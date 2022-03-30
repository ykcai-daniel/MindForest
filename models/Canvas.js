//schema of Room in Mongodb
const mongoose =new require('mongoose');

mongoose.connect('mongodb://localhost:27017/mindforest');
const db = mongoose.connection;
db.once("open",function (){
    console.log("Connected!")
})


const canvasSchema=new mongoose.Schema({
    owner:String,
    //this should match the state in react app
    //will be loaded with fetch on canvas load
    reactState:mongoose.Schema.Types.Mixed
})

const CanvasModel = mongoose.model('User', userSchema);
export default CanvasModel