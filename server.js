const fs = require("fs");

let GEO_SMTP_USER
let GEO_SMTP_PASS;
try {
    const data = fs.readFileSync("env.json");
    GEO_SMTP_USER = JSON.parse(data).GEO_SMTP_USER;
    GEO_SMTP_PASS = JSON.parse(data).GEO_SMTP_PASS;
} catch (err) {
    console.error(err)
}

var express = require('express');
var	port = process.env.PORT || 80;
var	host = process.env.HOST || "0.0.0.0";
let user = process.env.GEO_SMTP_USER || GEO_SMTP_USER;
let pass = process.env.GEO_SMTP_PASS || GEO_SMTP_PASS;

const nodemailer = require('nodemailer');

	
express().use(express.static('dist'))
    .get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
    .get('/privacy', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
    .get('/api', (req, res) => {
        if ((req.query.name) && (req.query.name != "")) {
            if ((req.query.phone) && (req.query.phone != "")) {
                let message = "<h2>Клиенту требуется консультация: <br><br><center>Имя: " + req.query.name + "<br><br>Тел: " + req.query.phone;
                if ((req.query.email) && (req.query.email != "")) message += "<br><br>Почта: " + req.query.email;
                smtp('ya13th@mail.ru', 'Запрос клиента с сайта https://geometrix61.ru', message +'</center></h2>');                
            }
        }
        res.sendFile(__dirname + '/dist/index.html')
    })
    .get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
    .listen(port, host, () => console.log(`Starting server. Listening on ${ port }`));


function smtp(email, subject, message) {
    const mailTransport = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        secure: false,
        port: 25,
        auth: { user, pass },
        tls: { rejectUnauthorized: false }
    });
    mailTransport.sendMail({ 
        from: user + '@mail.ru', 
        to: email,
        subject: subject,
        html: message
    }, function(err, info) {
        if (err) console.log("ERROR: SMTP message NOT send.");
        else console.log("SMTP message send.");
    });    
};