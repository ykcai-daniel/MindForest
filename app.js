const express=require("express")
const passport=require('passport')
const sequelize = require("sequelize");
const User=require('./models/model.js').UserModel
const Room=require('./models/model.js').RoomModel
const EmailCheck = require("./models/model.js").EmailCheckModel
const PORTNUMBER=8080
const session=require('express-session')
const flash = require('express-flash')

//send email and check
const email_check = require('./functions/email_check.js')

//store some temp information for verification
var Signinemail;
var Signinusername;
var Signinpassword;
var Forgetemail;

//create express app
const app=express()

//parse the body of POST request to Javascript object
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//template engine ejs
app.set('views', './views')
app.set('view engine','ejs')

//public file for express apps
app.use(express.static('./public'));

app.use(session({
    secret : "tempsecret",
    resave: true,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    },
    async function(email,password,done){
    try{
        const userInfo = await User.findOne({
            where:{
                email:email
            }
        })
        if(userInfo == null) {
            console.log("cannot find the user")
            return done(null,false);
        }
        if(userInfo.password!=password) {
            console.log("wrong password")
            return done(null,false);
        }
        return done(null,userInfo)
    }
    catch(e){
        console.log(e)
        return done(e)
    }
}))

passport.serializeUser((userInfo, done) => {
    done(null, userInfo)
})
passport.deserializeUser((userInfo, done) => {
    done(null, userInfo)
})

//try
const testRouter = require("./functions/upload_picture.js")
app.use("/main", testRouter)

//old url
//show login page; show main page if logged in
app.get('/',(req,res)=>{
    res.redirect('/login')
})
//show login page
app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login')
})
//POST route for receiving credentials
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true}),
    (req,res) => {
        console.log("login")
        res.redirect('/main')
    })


//POST route for receiving information of the newly signed up user
app.get("/register", checkNotAuthenticated,(req,res) => {
    res.render('register')
})
app.post("/register", checkNotAuthenticated,async(req,res,next )=>{
    const exist_user_check = await User.findOne({ where: { email: req.body.email } });
    if (exist_user_check === null) {
        await email_check(req,res)
        Signinemail = req.body.email
        Signinusername = req.body.name
        Signinpassword = req.body.password
        res.render('registerverification')
    } else {
        console.log("email exists");
        res.render('register',{text: 'email exists'});
    }
})
app.post("/register/verification", checkNotAuthenticated,async(req,res,next )=>{
    try{
        const new_info = await EmailCheck.findOne({
            where:{
                email:Signinemail
            }
        })
        console.log(Signinemail)
        console.log(req.body.verification)

        if(new_info == null) {
            console.log("invalid verification code.")
            return 0;
        }
        if(new_info.code!=req.body.verification) {
            console.log("wrong verification code.")
            return 0;
        }
        if(new_info.code == req.body.verification) {
            const new_user = User.build({
                email: Signinemail,
                password: Signinpassword,
                username: Signinusername
            })
            try{
                await new_user.save()
            } catch (e) {
                console.log(e)
                res.redirect('/register')
            }
            return 0
        }
        return 1
    }
    catch(e){
        console.log(e)
        console.log("invalid verification code.")
    }
})


//show forget password page
app.get('/forgotpassword',checkNotAuthenticated,((req, res) => {
    res.render('forgot-password')
}))
app.post('/forgotpassword/verification',checkNotAuthenticated,async (req, res) => {
    try{
        const validUser = await User.findOne({
            where:{
                email:req.body.email
            }
        })
        if(validUser == null){
            console.log("The email cannot match any account")
            res.redirect('/forgotpassword')
        }else{
            await email_check(req,res)
            console.log("success")
            res.redirect('/login')
        }
    } catch (e) {
        console.log(e)
        res.redirect('/forgotpassword')
    }

})
/////////////////上面都是旧代码，到时候全换下面
/*
//  new code
//first part
app.get('/login', checkNotAuthenticated,(req,res) => {
    res.sendFile()//go to login file!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true}),
    (req,res) => {
        console.log("login")
        if(req.session.passport.user.admin == 0){
            res.redirect('/main')
        }
        else if(req.session.passport.user.admin == 1){
            //admin user, go to different place ----------------------------------------------------------
            res.redirect('/main')
        }
    })

app.post('/forget', checkNotAuthenticated, async (req, res) => {
    try{
        let validUser = await User.findOne({
            where:{
                email:req.body.email
            }
        })
        if(validUser == null){
            console.log("The email cannot match any account")
            res.redirect('/login')  // waiting for update
        }else{
            await email_check(req,res)
            Forgetemail = req.body.email
            console.log("success")
           // do something !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! try to post to /forget/verify
        }
    } catch (e) {
        console.log(e)
        res.redirect('/login') // waiting for update
    }
})
app.post('/forget/verify', checkNotAuthenticated, async (req, res) => {
    try{
        let new_info = await EmailCheck.findOne({
            where:{
                email:Signinemail
            }
        })
        if(new_info == null) {
            console.log("invalid verification code.")
            res.redirect('/login') // waiting for update
            return 0;
        }
        else if(new_info.code!=req.body.verification) {
            console.log("wrong verification code.")
            res.redirect('/login') // waiting for update
            return 0;
        }
        else if(new_info.code == req.body.verification) {
            let change_password = await User.findOne({
                where:{
                    email: Forgetemail
                }
            })
            try{
                change_password.password = req.body.password
                await change_password.save()
            } catch (e) {
                console.log(e)
                res.redirect('/login')
            }
            return 0
        }
        return 1
    }
    catch(e){
        console.log(e)
        res.redirect('/login') // waiting for update
    }
})
app.post('/signup', checkNotAuthenticated,async(req,res,next )=>{
    const exist_user_check = await User.findOne({ where: { email: req.body.email } });
    if (exist_user_check === null) {
        await email_check(req,res)
        Signinemail = req.body.email
        Signinusername = req.body.username
        Signinpassword = req.body.password
        // do something !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! try to post to /forget/verify
    } else {
        console.log("email exists");
        res.redirect('/login') // waiting for update
    }
})
app.post('/signup/verify', checkNotAuthenticated, async (req, res) => {
    try{
        const new_info = await EmailCheck.findOne({
            where:{
                email:Signinemail
            }
        })
        console.log(Signinemail)
        console.log(req.body.verification)
        if(new_info == null) {
            console.log("invalid verification code.")
            res.redirect('/login') // waiting for update
            return 0;
        }
        if(new_info.code!=req.body.verification) {
            console.log("wrong verification code.")
            res.redirect('/login') // waiting for update
            return 0;
        }
        if(new_info.code == req.body.verification) {
            const new_user = User.build({
                email: Signinemail,
                password: Signinpassword,
                username: Signinusername
            })
            try{
                await new_user.save()
            } catch (e) {
                console.log(e)
                res.redirect('/login')
            }
            return 0
        }
        return 1
    }
    catch(e){
        console.log(e)
        res.redirect('/login')// waiting for update
    }
})

*/
//////////////////////////////////////////////////////////////////////////////
//second part
//show main page react app
app.get('/main',checkAuthenticated,(req,res)=>{
    res.sendFile('./client/main.html',{ root: __dirname })
})



//AJAX request for all rooms
app.get('/rooms',async (req,res)=>{
    //send all rooms in Json
    //use include to join
    const rooms=await Room.findAll({
        where:{
            participants:{
                [sequelize.Op.gt]:0
            }
        }
    })
    res.send(rooms)
})

//AJAX request for my room
app.get('/myrooms',async (req,res)=>{
    const rooms=await Room.findAll({
        where:{
            participants:{
                [sequelize.Op.gt]:0
            }
        }
    })
    res.send(rooms)
})

//create new room
app.post('/rooms',(req,res)=>{
    //get user id from session info
    //create new room and room-user relation
    //redirect to  /canvas/:roomID

})

app.post('/join',(req,res)=>{
    //read room id from post body
    //redirect to  /canvas/:roomID
    res.redirect()
})


//get the canvas react app
app.get('/canvas/:roomID',(req, res) => {
    res.sendFile('./client/map.html',{ root: __dirname })
})

//AJAX to load map
app.get('/loadmap/:roomID',(req, res) => {
    //query data and output
    res.render('canvas')
})

app.get('/temp', checkAuthenticated,(req, res) =>{
    var userInfo = req.session.passport.user
    res.render('temp', {userInfo})
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/main')
    }
    next()
}


//start the server and listen on port 8080
const server=app.listen(PORTNUMBER,()=>{
    console.log("Server start on port 8080")
})

//mount socket.io endpoints on http server
const io = require('socket.io')(server)
io.on('connection',(socket)=>{
    console.log("New user connected")
    io.emit('hi','hi')
    socket.on('insert',(parentNodeID,index)=>{
        socket.broadcast.emit('other-insert',parentNodeID,index)
        console.log(parentNodeID)
        console.log(index)
    })
socket.on('delete',(id)=>{
    socket.broadcast.emit('other-delete',id)
    console.log(id)
})

socket.on('edit',(nodeID,topic)=>{
    socket.broadcast.emit('other-edit',nodeID,topic)
    console.log(nodeID)
    console.log(topic)
})
socket.on('save',async (data,roomID)=>{
    try{
        await Room.update({content:data}, {where:{id:roomID}})
    }
    catch{

    }
})
})

