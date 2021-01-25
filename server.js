const fs = require("fs");
const bodyParser = require("body-parser");
const Bot = require("geometrix_bot");

let GEO_SMTP_USER;
let GEO_SMTP_PASS;
let GEO_SMTP_TO;
let WEBHOOK;
try {
    const data = fs.readFileSync("env.json");
    GEO_SMTP_USER = JSON.parse(data).GEO_SMTP_USER;
    GEO_SMTP_PASS = JSON.parse(data).GEO_SMTP_PASS;
    GEO_SMTP_TO = JSON.parse(data).GEO_SMTP_TO;
    WEBHOOK = JSON.parse(data).WEBHOOK;
} catch (err) {
    console.error(err) 
}

let webhook = WEBHOOK || process.env.WEBHOOK;
let bot = new Bot(webhook); 


const express = require('express');
let	port = process.env.PORT || 80;
let	host = process.env.HOST || "0.0.0.0";
let user = GEO_SMTP_USER || process.env.GEO_SMTP_USER;
// let user;
let pass = GEO_SMTP_PASS || process.env.GEO_SMTP_PASS;
let to = GEO_SMTP_TO || process.env.GEO_SMTP_TO;

const nodemailer = require('nodemailer');

	
express().use(express.static('dist'))
    .use(bodyParser.json())
    .get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
    .get('/privacy', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
    .get('/api', (req, res) => {
        let response;
        if ((req.query.name) && (req.query.name != "")) {
            if ((req.query.phone) && (req.query.phone != "")) {
                let message = "<h2>Клиенту требуется консультация: <br><br><center>Имя: " + req.query.name + "<br><br>Тел: " + req.query.phone;
                if ((req.query.email) && (req.query.email != "")) message += "<br><br>Почта: " + req.query.email;
                response = smtp(to, 'Запрос клиента с сайта https://geometrix61.ru', message +'</center></h2>');
                response.then(
                    resolve => { // Promis « выполнен успешно » но это не значит что сообщение доставлено
                        console.log("resolve: ", resolve);
                        res.send(resolve); // может быть ОК и ERROR
                    },
                    reject => { // « выполнен с ошибкой »
                        console.log("reject: ", reject);
                        res.send(reject);
                    }
                );
            }
        }
        // console.log("response: ", response);
        if (!response) res.sendFile(__dirname + '/dist/index.html');
    })

    .post('/bot', (req, res) => {
        if(req.body) {
            // bot.sendMessage(1038937592, JSON.stringify(req.body));
            res.send("ok");
            let result = req.body;
            let update_id = result.update_id;
            let message = result.message;
            let text = message.text;
            let from_id = message.from.id;
            // let url = "";

            let ReplyKeyboardMarkup = {
                'keyboard':[
                    [
                        {'text':'Показать закупки'}
                    ]
                ],
                'resize_keyboard':true
            }

            // if (text == "/start") bot.sendMessage(from_id, "Приветствую!");

            if (text == "/start") {
                bot.sendMessage(from_id, "Приветствую!\n\nНажми кнопку ниже или пришли команду /zakupki", "markdown", ReplyKeyboardMarkup);
            }else if (text == "/zakupki" || text == "Показать закупки") {

                bot.sendMessage(from_id, `bot.zakupki();`, "markdown");
                // bot.zakupki().then(a => bot.sendMessage(from_id, "hz " + JSON.stringify(a), "markdown"));                
                bot.zakupki(from_id);

            }else {
                console.log(text);
                bot.sendMessage(from_id, `*Не понимаю(*`, "markdown");
            }

        }
    })

    .get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
    .listen(port, host, () => console.log(`Server run, listen port ${ port }`));


async function smtp(email, subject, message) {
    let response = "null";
    const mailTransport = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        secure: false,
        port: 25,
        auth: { user, pass },
        tls: { rejectUnauthorized: false }
    });
    try {
        await mailTransport.sendMail({ 
            from: user + '@mail.ru', 
            to: email,
            subject: subject,
            html: message
        })
        .then(info => {
            if (info.messageId) {
                console.log("SMTP message send.");
                response = "ok";
            }else {
                console.log("ERROR: SMTP message NOT send.");
                response = "error";
            }
            // console.log("info: ", info);
        });
    }catch(e) {
        console.log("exception: ", e);
        response = "error";
    }
    return response; 
};