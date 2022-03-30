const { Sequelize, Model, DataTypes } = require('sequelize');

const Sequelize = require("sequelize");
const sequelize = new Sequelize();

const User=sequelize.define("User",{
    email:{
        type:Sequelize.STRING,
        primaryKey:True
    },
    password:{
        type:Sequelize.STRING
    },
    admin:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    },
    username:{
        type:Sequelize.STRING
    }
})

const Room=sequelize.define("Room",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING
    },
    content:{
        type:Sequelize.BLOB
    },
    participants:{
        type:Sequelize.INTEGER
    }
})

Room.belongsTo(User)

await sequelize.sync()


module.exports={
    UserModel:User,
    RoomModel:Room
}


