const express=require("express")
const mailer=require('nodemailer')
const passport=require('passport')
const sequelize = require("sequelize");
const User=require('./models/model.js').UserModel
const Room=require('./models/model.js').RoomModel
const PORTNUMBER=8080
const session=require('express-session')
const flash = require('express-flash')

//create express app
const app=express()

//parse the body of POST request to Javascript object
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//template engine ejs
app.set('views', './views')
app.set('view engine','ejs')

//route for serving javascript and css
app.use(express.static('./public'))

app.use(session({
    secret : "tempsecret",
    resave: false,
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
    successRedirect: '/temp',
    failureRedirect: '/login',
    failureFlash: true
}))

//POST route for receiving information of the newly signed up user
app.get("/register", checkNotAuthenticated,(req,res) => {
    res.render('register')
})
app.post("/register", checkNotAuthenticated,async(req,res,next )=>{
    //TODO: send mail
    //TODO:handle duplicate email (primary key violation)
    const user=User.build({
        email:req.body.email,
        password:req.body.password,
        username:req.body.name
    })
    try{
        await user.save()
        //log the user table
       /* const templist = await User.findAll()
        let description = "";
        for(let i in templist){
            let property = templist[i].id + " " + templist[i].email + " " + templist[i].password;
            description += i + " = " + property + "\n";
        }
        console.log(description); */
        res.redirect('/login')
    }
    catch (e){
        //catch primary key error
        console.log("email exists");
        res.render('register',{text: 'email exists'});
    }

})


//show forget password page
app.get('/forgotpassword',checkNotAuthenticated,((req, res) => {
    res.render('forgot-password')
}))
app.post('/forgotpassword',checkNotAuthenticated,async (req, res) => {
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
            //do something
            console.log("success")
            res.redirect('/login')
        }
    } catch (e) {
        console.log(e)
        res.redirect('/forgotpassword')
    }

})


//show information of authenticated user
app.get('/user',(req,res)=>{

    res.render('usercenter')
})


//show main page react app
app.get('/main',(req,res)=>{

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

})


//get the canvas react app
app.get('/canvas',(req, res) => {
    res.render('canvas')
})

//AJAX to load map
app.get('/loadmap',(req, res) => {
    res.render('canvas')
})

//save the mindmap
app.post('/save',(req,res)=>{

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
        return res.redirect('/temp')
    }
    next()
}


//start the server and listen on port 8080
const server=app.listen(PORTNUMBER,()=>{
    console.log("Server start on port 8080")
})

//mount socket.io endpoints on http server
const io = require('socket.io')(server)
io.on("connection",()=>{

})
