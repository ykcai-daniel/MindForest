const express=require("express")
const bodyParser=require('body-parser')
const mongoose = require('mongoose');
const HOSTNAME='localhost'
const PORTNUMBER=8080

//mongodb
//a middleware to protect
function isAuthenticated(){
    if(true){

    }
    else{
        res.redirect('login')
    }
}
//await mongoose.connect('mongodb://localhost:27017/test');

const app=express()
app.use(bodyParser.json())
app.use(express.static('./public'))
//add an authentication middleware
//all routes except / are protected
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('login')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.get('/forgotpassword',((req, res) => {
    res.render('forgot-password')
}))


app.get('/joinroom',(req,res)=>{
    res.render('joinroom')
})

app.get('/usercenter',(req,res)=>{
    res.render('usercenter')
})

app.get('/canvas',(req, res) => {
    res.render('canvas')
})

//start the server and listen on port 8080
app.listen(PORTNUMBER,()=>{
    console.log("Server start on port 8080")
})

