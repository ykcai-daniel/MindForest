// The module that provide the function of change avatar
"use strict";
console.log("in the new js file")
const express = require("express")
const multer = require("multer")
const User=require('../models/model.js').UserModel
const router = express.Router()
var current_id
var current_avatar
var path

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/useravatar');},
    // change the name of uploaded picture
    filename: function(req, file, cb) {
        let match = /\.[^\.]+$/.exec(file.originalname)
        let fname = Date.now()+match[0]
        path = '/useravatar/'+fname
        cb(null, fname)
    }
})
var upload = multer({ storage: storage });


router.get("/avatar", (req,res)=>{
    let info = req.session.passport.user
    res.render('avatar_test',{info});
})

router.post('/uploadimg', upload.array('imgfile', 1), async function(req, res) {
    var files = req.files
    console.log(files)
    if (!files[0]) {
        res.send('error, no file uploaded');
        res.redirect("/main/avatar")
    } else {
        let current = await User.findOne({
            where:{
                id: req.session.passport.user.id
            }
        })
        // save the path of picture to the attribute 'avatar' of the user.
        current.avatar = path
        await current.save()
        req.session.passport.user.avatar = path
        res.redirect("/main/avatar")

    }
    console.log(files);
})

module.exports = router