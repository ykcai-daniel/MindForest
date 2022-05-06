//the module for checking code by email

const EmailCheck = require("../models/model.js").EmailCheckModel
const User=require('../models/model.js').UserModel

module.exports = async (req, res)=> {
    const nodemailer = require('nodemailer')
    const smtpTransport = require('nodemailer-smtp-transport')
    const assert = require('http-assert')

    // the account to send the email
    const transport = nodemailer.createTransport(smtpTransport({
        service: "Gmail",
        auth: {
            user: "temp3100zzz@gmail.com",
            pass: ".test135"
        }
    }));

    // generate the code
    const randomFns = () => {
        let rcode = ""
        for (let i = 0; i < 6; i++) {
            rcode += parseInt(Math.random() * 10)
        }
        return rcode
    }
    let ccode = randomFns()

    // save the code in the database
    const check_item = EmailCheck.build({
        email: req.body.email,
        code: ccode
    })
    try {
        await check_item.save()
    } catch (e) {
        //catch primary key error
        console.log(e)
        return 0
    }
    transport.sendMail({
            from: "temp3100zzz@gmail.com",
            to: req.body.email,  // the user email
            subject: "Mind forest register",
            html: `
            <p>Your mindforest register code is<strong style="color: #ff4e2a;">${ccode}</strong></p>
            <p> The code will expire in 5 minutes.</p>` // html content
        },
        function () {
            transport.close();
        })
    setTimeout(async () => {    //delete the code 5 minutes later
        await check_item.destroy()
    },5*60*1000)
}