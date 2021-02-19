let mongoose = require("mongoose");
let express = require('express');
let MessageSchema = require('../../models/message')
let router = express.Router();
var nodemailer = require("nodemailer");

var mailOptions;

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "webexpert0524@gmail.com",
        pass: "Mysister200165!"
    }
});

router.route('/send-message').post((req, res, next)=>{
    mailOptions={
        from: req.body.email,
        to : 'pythonexpert0605@gmail.com',
        subject : "your received new message !",
        html : req.body.message	
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        return next("error");
     }else{
            console.log("Message sent: " + link);
        res.json(200);
         }
});
})

module.exports = router;