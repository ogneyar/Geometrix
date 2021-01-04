// example:
// const smtp = require('./smtp');
// smtp('admin@mail.ru', 'test :)', '<strong>What`s up my friend?</strong>');

const nodemailer = require('nodemailer');

//module.exports = function(email, subject, message) {
    const mailTransport = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        secure: false,
        port: 25,
        auth: { 
            user: 'web-geometrix61', 
            pass: 'UYruAY3pyy1%' 
        },
        tls: { rejectUnauthorized: false }
    });
    mailTransport.sendMail({ 
        from: 'web-geometrix61@mail.ru', 
        to: "ya13th@mail.ru",
        subject: "subject",
        html: "<b>Hello world!!!</b>"
        //to: email,
        //subject: subject,
        //html: message
    }, function(err, info) {});
//};


console.log("smtp message send");