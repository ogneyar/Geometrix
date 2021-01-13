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


  arrowThreeButtons(button = "left", id1 = "card1",id2 = "card2",id3 = "card3", middleWidth = 700): void {
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

        if (button == "left") { // при нажатии на лево
          card2.style.display = "none";          
          card3.style.display = "block"; // показывается 3
        }else { // при нажатии на право           
          card2.style.display = "block"; // показывается 2
          card3.style.display = "none";
        }

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

          if (button == "left") { // при нажатии на лево
            card3.style.display = "block"; // показывается 3
          }else { // при нажатии на право           
            card2.style.display = "block"; //  показываем 2
          }

        }else if (card2.style.display == "block") { // если 2 
          card2.style.display = "none";  // то прячем её

          if (button == "left") { // при нажатии на лево
            card1.style.display = "block"; // показывается 1
          }else { // при нажатии на право           
            card3.style.display = "block"; //  показываем 3
          }
          
        }else { // если 3          
          card3.style.display = "none"; // то прячем её

          if (button == "left") { // при нажатии на лево
            card2.style.display = "block"; // показывается 2
          }else { // при нажатии на право           
            card1.style.display = "block"; //  показываем 1
          }
          
        }
      }
    }

  } // end arrowThreeButtons()

  arrowLeft() {
    this.arrowThreeButtons();
  }

  arrowRight() {
    this.arrowThreeButtons("right");
  }

  
  arrowFourButtons(button = "left", id1 = "text1", id2 = "text2", id3 = "text3", id4 = "text4", middleWidth = 600, maxWidth = 700): void {
    
    let card1 = document.getElementById(id1);
    let card2 = document.getElementById(id2);
    let card3 = document.getElementById(id3);
    let card4 = document.getElementById(id4);

    if (!card1.style.display) { // если это первое нажатие на кнопку
      if (window.innerWidth > maxWidth) { // если на экране три карточки (1, 2 и 3)
        card1.style.display = "none";
        card2.style.display = "block";
        card3.style.display = "block";
        card4.style.display = "block";
      }else if (window.innerWidth > middleWidth) { // если на экране две карточки (1 и 2)
        card1.style.display = "none";  // покажем две другие
        card2.style.display = "none";
        card3.style.display = "block";
        card4.style.display = "block";
      }else { // если на экране одна карточка (1)
        card1.style.display = "none";
        card3.style.display = "none";
        if (button == "left") { // при нажатии на лево
          card2.style.display = "none";          
          card4.style.display = "block"; // показывается 4
        }else { // при нажатии на право           
          card2.style.display = "block"; // показывается 2
          card4.style.display = "none";
        }
      }
    }else { // если это НЕ первое нажатие на кнопку
      if (window.innerWidth > maxWidth) { // если на экране три карточки, узнаём какие
        if (card1.style.display == "none") { // если 1 спрятана
          card1.style.display = "block"; //  показываем её
          card4.style.display = "none"; // прячем 4
        }else { // если 1 видна, значит 4 спрятана
          card1.style.display = "none"; // прячем 1
          card4.style.display = "block"; //  показываем 4
        }
      }else if (window.innerWidth > middleWidth) { // если на экране две карточки, узнаём какие
        if (card1.style.display == "none") { // если 1 спрятана, значит и вторая
          card1.style.display = "block"; //  показываем 1
          card2.style.display = "block"; //  и показываем 2
          card3.style.display = "none"; // прячем 3
          card4.style.display = "none"; // и прячем  4
        }else { // если 1 видна, значит 3 и 4 спрятаны
          card1.style.display = "none"; // прячем 1
          card2.style.display = "none"; // и прячем 2
          card3.style.display = "block"; //  показываем 3
          card4.style.display = "block"; // и показываем 4
        }
      }else { // если на экране одна карточка, узнаём какая
        if (card1.style.display == "block") { // если 1 
          card1.style.display = "none"; // то прячем её

          if (button == "left") { // при нажатии на лево
            card4.style.display = "block"; //  показываем 4
          }else { // при нажатии на право           
            card2.style.display = "block"; // показывается 2
          }

        }else if (card2.style.display == "block") { // если 2 
          card2.style.display = "none";  // то прячем её

          if (button == "left") { // при нажатии на лево
            card1.style.display = "block"; //  показываем 1
          }else { // при нажатии на право           
            card3.style.display = "block"; // показывается 3
          }

        }else if (card3.style.display == "block") { // если 3 
          card3.style.display = "none";  // то прячем её

          if (button == "left") { // при нажатии на лево
            card2.style.display = "block"; // показывается 2
          }else { // при нажатии на право
            card4.style.display = "block"; //  показываем 4   
          }

        }else { // если 4          
          card4.style.display = "none"; // то прячем её

          if (button == "left") { // при нажатии на лево
            card3.style.display = "block"; // показывается 3
          }else { // при нажатии на право
            card1.style.display = "block"; //  показываем 1   
          }

        }
      }
    }   

  } // end arrowFourButtons

  arrowLeftTwo() {
    // this.arrowFourButtons("left", "text1", "text2", "text3", "text3", 600, 700);
    this.arrowFourButtons();
  }

  arrowRightTwo() {
    // this.arrowFourButtons("right", "text1", "text2", "text3", "text3", 600, 700);
    this.arrowFourButtons("right");
  }

}
