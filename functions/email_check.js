const EmailCheck = require("../models/model.js").EmailCheckModel
const User=require('../models/model.js').UserModel

module.exports = async (req, res)=> {
    const nodemailer = require('nodemailer')
    const smtpTransport = require('nodemailer-smtp-transport')
    const assert = require('http-assert')

    const transport = nodemailer.createTransport(smtpTransport({
        service: "Gmail",
        auth: {
            user: "temp3100zzz@gmail.com", //用户名
            pass: ".test135" // SMTP授权码
        }
    }));
    const randomFns = () => { // 生成6位随机数
        let rcode = ""
        for (let i = 0; i < 6; i++) {
            rcode += parseInt(Math.random() * 10)
        }
        return rcode
    }
    let ccode = randomFns()
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
            from: "temp3100zzz@gmail.com", // 发件邮箱
            to: req.body.email, // 收件列表
            subject: "Mind forest register", // 标题
            html: `
            <p>Your mindforest register code <strong style="color: #ff4e2a;">${ccode}</strong></p>` // html content
        },
        function () {
            transport.close();
        })
    setTimeout(async () => {    //5分钟后失效
        await check_item.destroy()
    },5*60*1000)
}