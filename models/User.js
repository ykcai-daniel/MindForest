const mongoose =new require('mongoose');
mongoose.connect('mongodb://localhost:27017/mindforest');
const db = mongoose.connection;
db.once("open",function (){
    console.log("Connected!")
})

const userSchema=new mongoose.Schema({
    username:String,
    hash:Number,
    email: {type:String,unique:true},
    admin:{type:Boolean,default:false}
})
const UserModel = mongoose.model('User', userSchema);


module.exports=UserModel