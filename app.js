const express=require("express")
const bodyParser=require('body-parser')
const HOSTNAME='localhost'
const PORTNUMBER=8080

const app=express()
app.use(bodyParser.json())
app.use(express.static('./public'))
//add an authentication middleware
//all routes except / are protected
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',((req, res) => {
    res.render('login')
}))

//parse the post request to get id and password
//this should return the cookie for authentication
app.post('/login',((req, res) => {
    console.log(req.body)
    res.send("Accepted")
}))

app.get('/joinroom',(req,res)=>{
    res.render('joinroom')
})

app.get('/userCenter',(req,res)=>{
    res.render('usercenter')
})

app.get('/canvas',(req, res) => {
    res.render('canvas')
})

//start the server and listen on port 8080
app.listen(PORTNUMBER,()=>{
    console.log("Server start on port 8080")
})

