var express = require('express');
var	port = process.env.PORT || 80;
var	host = process.env.HOST || "0.0.0.0";

const nodemailer = require('nodemailer');

	
express().use(express.static('dist'))
    .get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
    .get('/privacy', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
    .get('/api', (req, res) => {
        if (req.query.name) {
            if (req.query.phone) {
                let message = "Требуется консультация: " + req.query.name + " " + req.query.phone;
                if (req.query.email) message += " " + req.query.email;
                smtp('ya13th@mail.ru', 'Запрос клиента с сайта https://geometrix61.ru', '<strong><center>'+ message +'</center></strong>');
                console.log("smtp message send");
            }
        }
        // console.log(req.query)
        // res.send('message send');
        res.sendFile(__dirname + '/dist/index.html')
    })
    .listen(port, host, () => console.log(`Starting server. Listening on ${ port }`));


function smtp(email, subject, message) {
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
        // to: "ya13th@mail.ru",
        // subject: "subject",
        // html: "<b>Hello world!!!</b>"
        to: email,
        subject: subject,
        html: message
    }, function(err, info) {});
};