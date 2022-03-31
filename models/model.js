const Sequelize = require("sequelize");
const sequelize = new Sequelize('mindforest', 'mf', 'e3proj', {
    host: 'localhost',
    dialect: 'mysql'
})

const User=sequelize.define("User",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    email:{
        type:Sequelize.STRING,
        unique:true
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

//many rooms to one user; foreign key in room
Room.belongsTo(User)

sequelize.sync().then(r => console.log("finished!")).catch(e=>console.log(e))

module.exports={
    UserModel:User,
    RoomModel:Room
}


