import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// const N = require('./n');
// import { N } from './n';
// console.log(N);

// "use strict";
// const nodemailer = require('nodemailer');


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      if (params['name'] == 'test') {
        console.log("params['name'] = test")
      }
    })
  }
  
  ngOnInit(): void {}


  onClickForm(): void {
    const doc = document
    let name = doc.getElementById('name')
    let phone = doc.getElementById('phone')
    let email = doc.getElementById('email')
    // if (name.value) console.log("name.value = ",name.value)
    // if (phone.value) console.log("phone.value = ",phone.value)
    // if (email.value) console.log("email.value = ",email.value)
  }

  async onClickSMTP(): Promise<void> {
    // "use strict";
    // const nodemailer = require('nodemailer');
    
    // let testEmailAccount = await nodemailer.createTestAccount();
    
    // let transporter = nodemailer.createTransport({
    //   host: 'smtp.mail.ru',
    //   port: 25,
    //   secure: false,
    //   auth: {
    //     user: "ya13th",
    //     pass: "*******"
    //   }
    // });
    
    // let result = await transporter.sendMail({
    //   from: '"Node js" <nodejs@example.com>',
    //   to: "user@example.com, user@example.com",
    //   subject: "Message from Node js",
    //   text: "This message was sent from Node js server.",
    //   html: "This <i>message</i> was sent from <strong>Node js</strong> server."
    // });
    
    // console.log(result);
  }


}
