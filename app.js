const express=require("express")
const bodyParser=require('body-parser')
const Sequelize = require("sequelize");
const mongoose = require('mongoose');
const io=require('socket.io')
const mailer=require('nodemailer')
const sequelize = require("sequelize");
const User=require('./models/model.js').UserModel
const Room=require('./models/model.js').RoomModel
const PORTNUMBER=8080

function isAuthenticated(){
    if(true){

    }
    else{
        res.redirect('login')
    }
}

//create express app
const app=express()
//parse the body of POST request to Javascript object
app.use(bodyParser.json())
//route for serving javascript and css
app.use(express.static('./public'))
//template engine ejs
app.set('view engine','ejs')


//show login page; show main page if logged in
app.get('/',(req,res)=>{
    res.render('login')
})

//show login page
app.get('/login',(req,res)=>{
    res.render('login')
})

//POST route for receiving credentials
app.post('/login',async(req,res)=>{
    const credential=req.body
    res.redirect('/main')
})

//POST route for receiving information of the newly signed up user
app.post('/signup', async(req,res)=>{
    //TODO: send mail
    //TODO:handle duplicate email (primary key violation)
    const user=User.build({
        email:req.body.email,
        password:req.body.password,
        username:req.body.username,
    })
    try{
        await user.save()
    }
    catch (e){
        //catch primary key error
    }
    res.redirect('/login')
})


//show forget password page
app.get('/forgotpassword',((req, res) => {
    res.render('forgot-password')
}))

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


//start the server and listen on port 8080
app.listen(PORTNUMBER,()=>{
    console.log("Server start on port 8080")
})

