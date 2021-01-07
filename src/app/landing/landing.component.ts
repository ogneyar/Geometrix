import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { HttpService } from '../shared/http.service';

// import { N } from './n'; console.log(N);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  providers: [HttpService],
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {
    this.route.queryParams.subscribe((params: any) => {
      if (params['name'] == 'test') {
        console.log("params['name'] = test")
      }
    });
  }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        forbiddenNameValidator(/http/i),
        forbiddenNameValidator(/www/i)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.maxLength(20),
        forbiddenNameValidator(/http/i),
        forbiddenNameValidator(/www/i)
      ])
    });
  }

  get(name, phone, email = ""): void {
    this.httpService.get(name, phone, email)
      .subscribe(
        res => console.log("res: ", res),
        err => console.log("err: ", err)
      );
  }


  onClickForm(): void {

    console.log("Нажата кнопка");

    console.log(this.form.value.name);

    this.get(this.form.value.name, this.form.value.phone, this.form.value.email);


  }


}
