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

    // console.log(this.form.value.name);

    this.get(this.form.value.name, this.form.value.phone, this.form.value.email);


    this.form.setValue({"name":"","phone":"","email":""});

    this.toast();


  }

  toast(): void {    
    let toast = document.getElementById("toast");    
    toast.style.display = "flex";
  }

  delete_toast(): void {    
    let toast = document.getElementById("toast");    
    toast.style.display = "none";
  }


  arrowLeft(id1 = "card1", id2 = "card2", id3 = "card3", middleWidth = 700): void {
    let card1 = document.getElementById(id1);
    let card2 = document.getElementById(id2);
    let card3 = document.getElementById(id3);

    // card1.style.transitionDelay = "2s";
    // card2.style.transitionDelay = "2s";
    // card3.style.transitionDelay = "2s";

    if (!card1.style.display) { // если это первое нажатие на кнопку
      if (window.innerWidth > middleWidth) { // если на экране две карточки (1 и 2)
        card1.style.display = "none";
        // card1.style.visibility = "hidden";
        // card1.style.opacity = "0";
        card2.style.display = "block";
        // card2.style.visibility = "visible";
        // card2.style.opacity = "1";
        card3.style.display = "block";
        // card3.style.visibility = "visible";
        // card3.style.opacity = "1";
      }else { // если на экране одна карточка (1)
        card1.style.display = "none";
        // card1.style.visibility = "hidden";
        // card1.style.opacity = "0";
        card2.style.display = "none";
        // card2.style.visibility = "hidden";
        // card2.style.opacity = "0";
        card3.style.display = "block";
        // card3.style.visibility = "visible";
        // card3.style.opacity = "1";
      }
    }else { // если это НЕ первое нажатие на кнопку
      if (window.innerWidth > middleWidth) { // если на экране две карточки, узнаём какие
        if (card1.style.display == "none") { // если 1 спрятана
          card1.style.display = "block"; //  показываем её
          // card1.style.visibility = "visible";
          // card1.style.opacity = "1";
          card2.style.display = "block";
          // card2.style.visibility = "visible";
          // card2.style.opacity = "1";
          card3.style.display = "none"; // прячем 3
          // card3.style.visibility = "hidden";
          // card3.style.opacity = "0";
        }else { // если 1 видна, значит 3 спрятана
          card1.style.display = "none"; // прячем 1
          // card1.style.visibility = "hidden";
          // card1.style.opacity = "0";
          card2.style.display = "block";
          // card2.style.visibility = "visible";
          // card2.style.opacity = "1";
          card3.style.display = "block"; //  показываем 3
          // card3.style.visibility = "visible";
          // card3.style.opacity = "1";
        }
      }else { // если на экране одна карточка, узнаём какая
        if (card1.style.display == "block") { // если 1 
          card1.style.display = "none"; // то прячем её
          // card1.style.visibility = "hidden";
          // card1.style.opacity = "0";
          card3.style.display = "block"; //  показываем 3
          // card3.style.visibility = "visible";
          // card3.style.opacity = "1";
        }else if (card2.style.display == "block") { // если 2 
          card2.style.display = "none";  // то прячем её
          // card2.style.visibility = "hidden";
          // card2.style.opacity = "0";
          card1.style.display = "block"; //  показываем 1        
          // card1.style.visibility = "visible";  
          // card1.style.opacity = "1";
        }else { // если 3          
          card3.style.display = "none"; // то прячем её
          // card3.style.visibility = "hidden";
          // card3.style.opacity = "0";
          card2.style.display = "block"; //  показываем 2   
          // card2.style.visibility = "visible";   
          // card2.style.opacity = "1";    
        }
      }
    }   
  
  } // end arrowLeft()


  arrowRight(id1 = "card1",id2 = "card2",id3 = "card3", middleWidth = 700): void {
    let card1 = document.getElementById(id1);
    let card2 = document.getElementById(id2);
    let card3 = document.getElementById(id3);

    if (!card1.style.display) { // если это первое нажатие на кнопку
      if (window.innerWidth > middleWidth) { // если на экране две карточки (1 и 2)
        card1.style.display = "none"; // прячем первую
        card2.style.display = "block";
        card3.style.display = "block"; // показываем первую
      }else { // если на экране одна карточка (1)
        card1.style.display = "none"; // прячем первую
        card2.style.display = "block"; // показываем вторую
        card3.style.display = "none";
      }
    }else { // если это НЕ первое нажатие на кнопку
      if (window.innerWidth > middleWidth) { // если на экране две карточки, узнаём какие
        if (card1.style.display == "none") { // если 1 спрятана
          card1.style.display = "block"; //  показываем её
          card2.style.display = "block";
          card3.style.display = "none"; // прячем 3
        }else { // если 1 видна, значит 3 спрятана
          card1.style.display = "none"; // прячем 1
          card2.style.display = "block";
          card3.style.display = "block"; //  показываем 3
        }
      }else { // если на экране одна карточка, узнаём какая
        if (card1.style.display == "block") { // если 1 
          card1.style.display = "none"; // то прячем её
          card2.style.display = "block"; //  показываем 2
        }else if (card2.style.display == "block") { // если 2 
          card2.style.display = "none";  // то прячем её
          card3.style.display = "block"; //  показываем 3 
        }else { // если 3          
          card3.style.display = "none"; // то прячем её
          card1.style.display = "block"; //  показываем 1   
        }
      }
    }

  } // end arrowRight()

  
  arrowLeftTwo(): void {
    this.arrowLeft("text1", "text2", "text3", 525)
  }

  arrowRightTwo(): void {
    this.arrowRight("text1", "text2", "text3", 525)
  }

}
