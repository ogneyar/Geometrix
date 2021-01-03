import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// const N = require('./n');
// import { N } from './n';
// console.log(N);

// const smtp = require('./smtp');
// smtp('hutor_yanin@mail.ru', 'test #2 :)', '<strong>What`s up my friend?</strong>');


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


}
