import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TestService } from './test.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

// const N = require('./n');
// import { N } from './n';
// console.log(N);

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

    console.log("Нажата кнопка");

    // let httpClient;
    // let test  = new TestService(httpClient);
    // let test  =  TestService.get('http://anyurl.com')
    // test.subscribe(value =>{
    //     // value - результат
    //     console.log("value");
    // },
    // error => {
    //     // error - объект ошибки
    //     console.log("error");
    // });

    // console.log(TestService.get('http://anyurl.com').subscribe());


    // let httpCli = new HttpClient(next: HttpHandler);
    // httpCli.get('http://anyurl.com').subscribe(value =>{
    //     // value - результат
    //     console.log("value");
    //   },
    //   error => {
    //     // error - объект ошибки
    //     console.log("error");
    // });
    
  }


}
