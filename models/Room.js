//schema of Room in Mongodb
const mongoose =new require('mongoose');

mongoose.connect('mongodb://localhost:27017/mindforest');
const db = mongoose.connection;
db.once("open",function (){
    console.log("Connected!")
})


const roomSchema=new mongoose.Schema({
    owner:mongoose.ObjectId,
    name:String,
    participants:[mongoose.ObjectId]
})

const RoomModel = mongoose.model('User', userSchema);


module.exports=RoomModel