(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\VSCode\Geometrix\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/forbidden-name.directive */ "VL+U");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/http.service */ "nGxR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");








// import { N } from './n'; console.log(N);
class LandingComponent {
    constructor(route, httpService) {
        this.route = route;
        this.httpService = httpService;
        this.route.queryParams.subscribe((params) => {
            if (params['name'] == 'test') {
                console.log("params['name'] = test");
            }
        });
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20),
                Object(_shared_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_2__["forbiddenNameValidator"])(/http/i),
                Object(_shared_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_2__["forbiddenNameValidator"])(/www/i)
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(9),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20),
                Object(_shared_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_2__["forbiddenNameValidator"])(/http/i),
                Object(_shared_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_2__["forbiddenNameValidator"])(/www/i)
            ])
        });
    }
    get(name, phone, email = "") {
        this.httpService.get(name, phone, email)
            .subscribe(res => console.log("res: ", res), err => console.log("err: ", err));
    }
    onClickForm() {
        console.log("Нажата кнопка");
        // console.log(this.form.value.name);
        this.get(this.form.value.name, this.form.value.phone, this.form.value.email);
        this.form.setValue({ "name": "", "phone": "", "email": "" });
        this.toast();
    }
    toast() {
        let toast = document.getElementById("toast");
        toast.style.display = "flex";
    }
    delete_toast() {
        let toast = document.getElementById("toast");
        toast.style.display = "none";
    }
    arrowThreeButtons(button = "left", id1 = "card1", id2 = "card2", id3 = "card3", middleWidth = 700) {
        let card1 = document.getElementById(id1);
        let card2 = document.getElementById(id2);
        let card3 = document.getElementById(id3);
        if (!card1.style.display) { // если это первое нажатие на кнопку
            if (window.innerWidth > middleWidth) { // если на экране две карточки (1 и 2)
                card1.style.display = "none"; // прячем первую
                card2.style.display = "block";
                card3.style.display = "block"; // показываем первую
            }
            else { // если на экране одна карточка (1)
                card1.style.display = "none"; // прячем первую
                if (button == "left") { // при нажатии на лево
                    card2.style.display = "none";
                    card3.style.display = "block"; // показывается 3
                }
                else { // при нажатии на право           
                    card2.style.display = "block"; // показывается 2
                    card3.style.display = "none";
                }
            }
        }
        else { // если это НЕ первое нажатие на кнопку
            if (window.innerWidth > middleWidth) { // если на экране две карточки, узнаём какие
                if (card1.style.display == "none") { // если 1 спрятана
                    card1.style.display = "block"; //  показываем её
                    card2.style.display = "block";
                    card3.style.display = "none"; // прячем 3
                }
                else { // если 1 видна, значит 3 спрятана
                    card1.style.display = "none"; // прячем 1
                    card2.style.display = "block";
                    card3.style.display = "block"; //  показываем 3
                }
            }
            else { // если на экране одна карточка, узнаём какая
                if (card1.style.display == "block") { // если 1 
                    card1.style.display = "none"; // то прячем её
                    if (button == "left") { // при нажатии на лево
                        card3.style.display = "block"; // показывается 3
                    }
                    else { // при нажатии на право           
                        card2.style.display = "block"; //  показываем 2
                    }
                }
                else if (card2.style.display == "block") { // если 2 
                    card2.style.display = "none"; // то прячем её
                    if (button == "left") { // при нажатии на лево
                        card1.style.display = "block"; // показывается 1
                    }
                    else { // при нажатии на право           
                        card3.style.display = "block"; //  показываем 3
                    }
                }
                else { // если 3          
                    card3.style.display = "none"; // то прячем её
                    if (button == "left") { // при нажатии на лево
                        card2.style.display = "block"; // показывается 2
                    }
                    else { // при нажатии на право           
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
    arrowFourButtons(button = "left", id1 = "text1", id2 = "text2", id3 = "text3", id4 = "text4", middleWidth = 600, maxWidth = 700) {
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
            }
            else if (window.innerWidth > middleWidth) { // если на экране две карточки (1 и 2)
                card1.style.display = "none"; // покажем две другие
                card2.style.display = "none";
                card3.style.display = "block";
                card4.style.display = "block";
            }
            else { // если на экране одна карточка (1)
                card1.style.display = "none";
                card3.style.display = "none";
                if (button == "left") { // при нажатии на лево
                    card2.style.display = "none";
                    card4.style.display = "block"; // показывается 4
                }
                else { // при нажатии на право           
                    card2.style.display = "block"; // показывается 2
                    card4.style.display = "none";
                }
            }
        }
        else { // если это НЕ первое нажатие на кнопку
            if (window.innerWidth > maxWidth) { // если на экране три карточки, узнаём какие
                if (card1.style.display == "none") { // если 1 спрятана
                    card1.style.display = "block"; //  показываем её
                    card4.style.display = "none"; // прячем 4
                }
                else { // если 1 видна, значит 4 спрятана
                    card1.style.display = "none"; // прячем 1
                    card4.style.display = "block"; //  показываем 4
                }
            }
            else if (window.innerWidth > middleWidth) { // если на экране две карточки, узнаём какие
                if (card1.style.display == "none") { // если 1 спрятана, значит и вторая
                    card1.style.display = "block"; //  показываем 1
                    card2.style.display = "block"; //  и показываем 2
                    card3.style.display = "none"; // прячем 3
                    card4.style.display = "none"; // и прячем  4
                }
                else { // если 1 видна, значит 3 и 4 спрятаны
                    card1.style.display = "none"; // прячем 1
                    card2.style.display = "none"; // и прячем 2
                    card3.style.display = "block"; //  показываем 3
                    card4.style.display = "block"; // и показываем 4
                }
            }
            else { // если на экране одна карточка, узнаём какая
                if (card1.style.display == "block") { // если 1 
                    card1.style.display = "none"; // то прячем её
                    if (button == "left") { // при нажатии на лево
                        card4.style.display = "block"; //  показываем 4
                    }
                    else { // при нажатии на право           
                        card2.style.display = "block"; // показывается 2
                    }
                }
                else if (card2.style.display == "block") { // если 2 
                    card2.style.display = "none"; // то прячем её
                    if (button == "left") { // при нажатии на лево
                        card1.style.display = "block"; //  показываем 1
                    }
                    else { // при нажатии на право           
                        card3.style.display = "block"; // показывается 3
                    }
                }
                else if (card3.style.display == "block") { // если 3 
                    card3.style.display = "none"; // то прячем её
                    if (button == "left") { // при нажатии на лево
                        card2.style.display = "block"; // показывается 2
                    }
                    else { // при нажатии на право
                        card4.style.display = "block"; //  показываем 4   
                    }
                }
                else { // если 4          
                    card4.style.display = "none"; // то прячем её
                    if (button == "left") { // при нажатии на лево
                        card3.style.display = "block"; // показывается 3
                    }
                    else { // при нажатии на право
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
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])], decls: 204, vars: 2, consts: [[1, "header-background"], [1, "header"], [1, "services"], [1, "ooo"], [1, "foundation"], ["src", "assets/l.png", "alt", "logo", 1, "logo"], ["src", "assets/logo.png", "alt", "logo", 1, "logo-mini"], [1, "email"], [1, "phone"], ["src", "assets/img/social/phone.png", "alt", "phone"], [1, "whatsapp"], ["src", "assets/img/social/wa.png", "alt", "phone"], [1, "hr"], [1, "main"], [1, "top"], ["src", "assets/top++.jpg", "alt", "header"], [1, "promo"], [1, "consultation"], [1, "form", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F*", "formControlName", "name", "required", "", "maxlength", "20"], ["type", "text", "placeholder", "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D*", "formControlName", "phone", "required", "", "maxlength", "20"], ["type", "text", "placeholder", "\u0412\u0430\u0448 Email", "formControlName", "email", "maxlength", "30"], ["type", "submit", "id", "submit", 1, "btn", 3, "disabled"], ["src", "assets/instrument.png", "alt", "instrument", 1, "instrument"], ["src", "assets/img/equipment/Image4.png", "alt", "image", 1, "image2"], ["id", "toast", 1, "toast", 3, "click"], [1, "block"], [3, "click"], [1, "why-are-we"], ["src", "assets/img/equipment/Image1.png", "alt", "Image1", 1, "image1"], [1, "about-photo"], [1, "container"], ["id", "card1", 1, "card", "card1"], [1, "face", "face1"], [1, "content"], ["src", "assets/about-photo-one.jpg", "alt", "one"], [1, "face", "face2"], ["id", "card2", 1, "card", "card2"], ["src", "assets/about-photo-two.jpg", "alt", "two"], ["id", "card3", 1, "card", "card3"], ["src", "assets/about-photo-three.jpg", "alt", "three"], [1, "arrow-left", 3, "click"], ["src", "assets/img/buttons/arrow-left.png", "alt", "arrow-left"], [1, "arrow-right", 3, "click"], ["src", "assets/img/buttons/arrow-right.png", "alt", "arrow-right"], ["src", "assets/img/equipment/Image3.png", "alt", "Image3", 1, "image3"], [1, "reason"], [1, "box"], [1, "reason-one"], [1, "reason-two"], [1, "reason-three"], [1, "reason-img-one"], ["src", "assets/reason-img-one.jpg", "alt", "reason-img-one"], [1, "reason-img-two"], ["src", "assets/reason-img-two.jpg", "alt", "reason-img-two"], [1, "reason-img-three"], ["src", "assets/reason-img-three.jpg", "alt", "reason-img-three"], [1, "about-text"], ["id", "text1", 1, "text"], ["id", "text2", 1, "text"], ["id", "text3", 1, "text"], ["id", "text4", 1, "text"], ["src", "assets/img/equipment/Image2.jpg", "alt", "image", 1, "image4"], [1, "scheme"], [1, "reviews"], [1, "map"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2277.71671512554!2d39.723912792176!3d47.24246509347906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9b3ff95edd7%3A0x3df435d2d9858d18!2z0YPQuy4g0J3QsNC90YHQtdC90LAsIDE0ONCQLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0KDQvtGB0YLQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMzQ0MDM4!5e0!3m2!1sru!2sru!4v1609084672156!5m2!1sru!2sru"), "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0"], [1, "footer"], [1, "director"], [1, "certificate"], ["href", "certificate"], [1, "privacy"], ["href", "privacy"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E-\u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041E\u041E\u041E \"\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u043A\u0441\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0430 \u0432 2012 \u0433\u043E\u0434\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "geometrix61@mail.ru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " +79081903754");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " +79286074999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " +79044478596");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "main", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0439 \u043E\u0442\u0447\u0451\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041E \u0413\u0415\u041E\u0414\u0415\u0417\u0418\u0427\u0415\u0421\u041A\u0418\u0425 \u0418\u0417\u042B\u0421\u041A\u0410\u041D\u0418\u042F\u0425");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "promo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LandingComponent_Template_form_ngSubmit_33_listener() { return ctx.onClickForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_47_listener() { return ctx.delete_toast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_51_listener() { return ctx.delete_toast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u042F\u0441\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u00A0\u00A0\u00A0\u041E\u041E\u041E \u00AB\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u043A\u0441\u00BB \u2014 \u0442\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u043E-\u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432 2012 \u0433. \u0433\u0440\u0443\u043F\u043F\u043E\u0439 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432 \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430 \u201C\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u043D\u0430\u044F \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u044F\u201D \u0420\u043E\u0441\u0442\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u00A0\u00A0\u00A0\u041C\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u0432\u0441\u0435 \u0432\u0438\u0434\u044B \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0433. \u0420\u043E\u0441\u0442\u043E\u0432\u0430-\u043D\u0430-\u0414\u043E\u043D\u0443 \u0438 \u0420\u043E\u0441\u0442\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0\u00A0\u00A0\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C, \u0441\u0432\u044F\u0437\u0430\u043D\u0430 \u0441 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E-\u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439 \u043F\u043E\u0434 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u00A0\u00A0\u00A0\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439 \u0441\u0442\u0440\u043E\u0433\u043E \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438, \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u00A0\u00A0\u00A0\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u0431\u043E\u0440\u043E\u0432 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0430\u0448\u0435\u0439 \u0444\u0438\u0440\u043C\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u043B\u044E\u0431\u043E\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0443.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u00A0\u00A0\u00A0\u0412 \u0447\u0438\u0441\u043B\u043E \u043D\u0430\u0448\u0438\u0445 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u0432 \u0432\u0445\u043E\u0434\u044F\u0442 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F, \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u044B\u0435 \u0438 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0447\u0430\u0441\u0442\u043D\u044B\u0435 \u043B\u0438\u0446\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u044A\u0435\u043C\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u044A\u0435\u043C\u043A\u0430 \u2014 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432\u0438\u0434 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442. \u041F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044C \u0432 \u043D\u0435\u0439 \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u0435\u0442 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0442\u043E\u043F\u043E\u043A\u0430\u0440\u0442, \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u044F\u0445, \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043B\u0430\u043D\u043E\u0432 \u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0447\u0435\u0440\u0442\u0435\u0436\u0435\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043D\u043E\u0433\u043E \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u0413\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u043F\u043E\u0434 \u0441\u043E\u0431\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u043F\u043E \u0440\u0430\u0437\u0431\u0438\u0432\u043A\u0435 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0435. \u041D\u0430\u0448\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u043B\u043D\u043E \u0438 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u044F\u0442 \u0432\u0441\u044E \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E \u043D\u0430 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0437\u0430 \u043E\u0441\u0430\u0434\u043A\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F \u0437\u0430 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u043C\u0438 \u0438\u043B\u0438 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433 \u0437\u0434\u0430\u043D\u0438\u0439 \u0438 \u0441\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0430\u0441\u043D\u044B\u0445 \u0432\u0435\u043B\u0438\u0447\u0438\u043D \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0439 \u0438 \u043E\u043F\u043E\u043B\u0437\u043D\u0435\u0432\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0447\u0438\u043D \u0438\u0445 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_104_listener() { return ctx.arrowLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_106_listener() { return ctx.arrowRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0430\u0441:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u0423 \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "- \u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0444\u0435\u0440\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "- \u0414\u043E\u0441\u0442\u043E\u0439\u043D\u0430\u044F \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "- \u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u041F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u043C\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "- C\u0442\u0440\u043E\u0433\u043E \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u0440\u043E\u043A\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "- \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u0423 \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "- \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435, \u0447\u0435\u0441\u0442\u043D\u044B\u0435 \u0446\u0435\u043D\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "- \u041A \u0440\u0430\u0431\u043E\u0442\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u0438\u043C\u0435\u044E\u0449\u0438\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0443\u044E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "- \u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043D\u0430 \u0432\u0441\u0435\u0445 \u044D\u0442\u0430\u043F\u0430\u0445 \u0440\u0430\u0431\u043E\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u0412\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "\u0412\u044B\u043D\u043E\u0441 \u0433\u0440\u0430\u043D\u0438\u0446 \u0437\u0435\u043C\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "\u0412\u044B\u043D\u043E\u0441 \u0433\u0440\u0430\u043D\u0438\u0446 \u0437\u0435\u043C\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043A\u0430 \u0432 \u043D\u0430\u0442\u0443\u0440\u0443 \u2014 \u044D\u0442\u043E \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430, \u0432 \u0445\u043E\u0434\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u043C \u0437\u0435\u043C\u0435\u043B\u044C\u043D\u043E\u043C \u043D\u0430\u0434\u0435\u043B\u0435 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043C\u0435\u0436\u0435\u0432\u044B\u0435 \u0437\u043D\u0430\u043A\u0438 \u0434\u043B\u044F \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0435\u0433\u043E \u0433\u0440\u0430\u043D\u0438\u0446. \u041E\u043D\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0440\u0430\u0437\u043D\u043E\u0432\u0438\u0434\u043D\u043E\u0441\u0442\u044C\u044E \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442, \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043A\u0435 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0438 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u044F\u044E\u0442\u0441\u044F \u043C\u0435\u0436\u0435\u0432\u044B\u0435 \u0437\u043D\u0430\u043A\u0438. \u041F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u044D\u0442\u043E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u0441\u044F \u0432 \u0415\u0434\u0438\u043D\u043E\u043C \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u0440\u0435\u0435\u0441\u0442\u0440\u0435 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u041F\u043E\u0434\u0441\u0447\u0435\u0442 \u043E\u0431\u044A\u0435\u043C\u043E\u0432 \u0437\u0435\u043C\u043B\u044F\u043D\u044B\u0445 \u043C\u0430\u0441\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u0414\u0430\u043D\u043D\u044B\u0439 \u0432\u0438\u0434 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u044A\u0435\u043C\u0430 \u0441\u044B\u043F\u0443\u0447\u0435\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430(\u043F\u0435\u0441\u043E\u043A, \u0449\u0435\u0431\u0435\u043D\u044C, \u0433\u0440\u0443\u043D\u0442 \u0438 \u0442.\u0434.), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u0441\u043A\u043B\u0430\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u044A\u0435\u043C\u043E\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u043E\u0442\u0441\u044B\u043F\u0430\u043D\u043D\u043E\u0433\u043E \u0433\u0440\u0443\u043D\u0442\u0430 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u0413\u0438\u0434\u0440\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u0418\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E \u2013 \u0433\u0438\u0434\u0440\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u044B - \u044D\u0442\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u0438\u0437\u044B\u0441\u043A\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0445 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u0440\u0435\u043B\u044C\u0435\u0444\u0435 \u0438 \u0432\u043E\u0434\u043D\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0442\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u043B\u0430\u043D\u043E\u0432 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u0439 \u0432\u043E\u0434\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 (\u0440\u0443\u0441\u0435\u043B \u0440\u0435\u043A, \u0430\u043A\u0432\u0430\u0442\u043E\u0440\u0438\u0439 \u0432\u043E\u0434\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449, \u043E\u0437\u0435\u0440, \u043F\u0440\u0438\u0431\u0440\u0435\u0436\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u043C\u043E\u0440\u0435\u0439 \u0438 \u043F\u0440\u0438\u043B\u0435\u0433\u0430\u044E\u0449\u0435\u0439 \u043A \u043D\u0438\u043C \u0447\u0430\u0441\u0442\u0438 \u0431\u0435\u0440\u0435\u0433\u0430, \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u0438\u0445 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043D\u044B\u043C\u0438 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u044F\u043C\u0438).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\u0410\u044D\u0440\u043E\u0444\u043E\u0442\u043E\u0441\u044A\u0451\u043C\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0430\u044D\u0440\u043E\u0444\u043E\u0442\u043E\u0441\u044A\u0451\u043C\u043A\u0438 - \u044D\u0442\u043E \u0442\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0438 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u044B. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0411\u041F\u041B\u0410 \u043F\u0440\u043E\u0432\u043E\u0434\u044F\u0442 \u0430\u044D\u0440\u043E\u0444\u043E\u0442\u043E\u0441\u044A\u0435\u043C\u043A\u0443 \u0437\u0435\u043C\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432, \u043A\u0430\u0440\u044C\u0435\u0440\u043E\u0432 \u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0439. \u0414\u043B\u044F \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0430\u044D\u0440\u043E\u0444\u043E\u0442\u043E\u0441\u044A\u0435\u043C\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u043E\u0442\u043E\u0447\u043D\u044B\u0435 \u043B\u0435\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B, \u043E\u0441\u043D\u0430\u0449\u0435\u043D\u043D\u044B\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u043E\u0439 \u0444\u043E\u0442\u043E \u0438 \u0432\u0438\u0434\u0435\u043E \u0444\u0438\u043A\u0441\u0430\u0446\u0438\u0438. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0438\u043C\u0435\u0435\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0430\u0440\u043A \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043B\u0435\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043E\u0432 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0445 \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C\u044E \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_168_listener() { return ctx.arrowLeftTwo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_170_listener() { return ctx.arrowRightTwo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "iframe", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "footer", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "OOO \"\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u043A\u0441\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u00A0\u00A0\u00A0344010, \u0420\u043E\u0441\u0441\u0438\u044F, \u0433.\u0420\u043E\u0441\u0442\u043E\u0432-\u043D\u0430-\u0414\u043E\u043D\u0443, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\u00A0\u00A0\u00A0\u0443\u043B.\u041D\u0430\u043D\u0441\u0435\u043D\u0430, \u0434.148\u0430, \u043E\u0444\u0438\u0441 109");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\u041E\u0413\u0420\u041D: 1126194004100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\u0418\u041D\u041D: 6168059100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\u041F\u0440\u0430\u0432\u043E \u041E\u041E\u041E \"\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u043A\u0441\" \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0420\u0424 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E-\u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "\u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u2116 0230.04-2012-6168059100-\u0418-020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " \u043E\u0442 \u00AB09\u00BB \u0444\u0435\u0432\u0440\u0430\u043B\u044F 2015 \u0433., \u0432\u044B\u0434\u0430\u043D\u043D\u043E\u043C \u0421\u0420\u041E \u041D\u041F \u00AB\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0418\u0437\u044B\u0441\u043A\u0430\u0442\u0435\u043B\u0435\u0439 \u042E\u0436\u043D\u043E\u0433\u043E \u0438 \u0421\u0435\u0432\u0435\u0440\u043E-\u041A\u0430\u0432\u043A\u0430\u0437\u0441\u043A\u043E\u0433\u043E \u043E\u043A\u0440\u0443\u0433\u043E\u0432\u00BB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: ["@font-face {\n  font-family: \"ISOCPEUR\";\n  src: url(\"/assets/fonts/ttf/ISOCPEUR.ttf\");\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: 200;\n}\n.header[_ngcontent-%COMP%] {\n  background: #ffc40e;\n  color: white;\n}\n.header-background[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background: #ffc40e;\n  opacity: 1;\n  width: 100%;\n  height: 150px;\n  z-index: 10;\n}\n.hr[_ngcontent-%COMP%] {\n  z-index: 10;\n  width: 100%;\n  border-top: 1px solid white;\n  border-bottom: 1px solid black;\n  position: fixed;\n  top: 150px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 150px;\n}\n.header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 8px;\n  left: 115px;\n  z-index: 10;\n  font-size: large;\n  font-size: 1.5rem;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 250px;\n  position: fixed;\n  left: 100px;\n  z-index: 10;\n}\n.header[_ngcontent-%COMP%]   .logo-mini[_ngcontent-%COMP%] {\n  width: 100px;\n  position: fixed;\n  left: 30px;\n  z-index: 10;\n  display: none;\n}\n.header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 120px;\n  left: 115px;\n  z-index: 10;\n  font-size: 1.5rem;\n}\n.header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50px;\n  z-index: 10;\n  width: 650px;\n  color: #2f455b;\n  text-align: center;\n}\n.header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-family: ISOCPEUR, Arial, Helvetica, sans-serif;\n  position: fixed;\n  right: 100px;\n  z-index: 10;\n  font-size: 1.5rem;\n}\n.header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  top: 10px;\n}\n.header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  top: 50px;\n}\n.header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  top: 110px;\n}\n.header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n@media (max-width: 1375px) {\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    left: 70px;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    left: 55px;\n  }\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    width: 400px;\n    top: 40px;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    right: 55px;\n  }\n}\n@media (max-width: 1060px) {\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    left: 25px;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n}\n@media (max-width: 900px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    left: 250px;\n  }\n}\n@media (max-width: 820px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    left: 300px;\n    top: 15px;\n    width: 200px;\n    line-height: 0.9em;\n  }\n}\n@media (max-width: 750px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    left: 270px;\n  }\n}\n@media (max-width: 690px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 500px) {\n  .header[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .header[_ngcontent-%COMP%]   .logo-mini[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 30px;\n  }\n  .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    top: 25px;\n  }\n  .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n    top: 75px;\n  }\n\n  .header-background[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n\n  .hr[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n}\n@media (max-width: 500px) {\n  .header[_ngcontent-%COMP%]   .logo-mini[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n}\n@media (max-height: 700px) {\n  .header[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 30px;\n  }\n  .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    top: 25px;\n  }\n  .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n    top: 75px;\n  }\n\n  .header-background[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n\n  .hr[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n}\n@media (max-height: 700px) and (max-width: 1375px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 20px;\n    line-height: 0.9em;\n  }\n}\n@media (max-height: 700px) and (max-width: 820px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 10px;\n    font-size: 1.5rem;\n  }\n}\n.main[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 350px);\n}\n.top[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  background: white;\n  position: relative;\n}\n.top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  background: rgba(189, 189, 189, 0.3);\n  color: #2f455b;\n  position: absolute;\n  top: 120px;\n  font-size: 2.5rem;\n  border-radius: 10px;\n  border: 2px solid;\n  text-align: center;\n  margin: 15px;\n}\n.top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  background: rgba(129, 129, 129, 0.4);\n  color: white;\n  position: absolute;\n  top: 500px;\n  font-size: 3rem;\n  border-radius: 10px;\n  border: 2px solid;\n  text-align: center;\n  margin: 15px;\n}\n@media (max-width: 450px) {\n  .top[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n  .top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    top: 80px;\n    font-size: 2rem;\n  }\n  .top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    top: 400px;\n    font-size: 2rem;\n  }\n}\n.consultation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  height: 600px;\n  position: relative;\n}\n.consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  border-top-right-radius: 30px;\n  border-bottom-left-radius: 30px;\n  background: rgba(47, 69, 91, 0.8);\n  color: white;\n  width: 300px;\n  height: 450px;\n  padding: 20px;\n}\n.consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 5px 20px 0 20px;\n}\n.consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 20px;\n  margin: 20px 20px 0 20px;\n}\n.consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.consultation[_ngcontent-%COMP%]   .instrument[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50px;\n  bottom: 0;\n}\n.consultation[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 100px;\n  top: 50px;\n  width: 150px;\n}\n@media (min-width: 1000px) {\n  .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    left: 600px;\n  }\n  .consultation[_ngcontent-%COMP%]   .instrument[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 400px;\n  }\n  .consultation[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%] {\n    left: 100px;\n    top: 50px;\n  }\n}\n@media (max-width: 400px) {\n  .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 15px;\n    margin: 15px 15px 0 15px;\n  }\n}\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border: 2px solid #42A948;\n}\n.ng-invalid[_ngcontent-%COMP%]:not(.form) {\n  border: 2px solid #a94442;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1001;\n  width: 100%;\n  height: 100%;\n  background: rgba(175, 175, 175, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n}\n.toast[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 300px;\n  height: 200px;\n  background: #f8f8f8;\n  border-radius: 5px;\n  opacity: 1;\n}\n.toast[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.toast[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  padding: 5px 10px;\n  margin: 10px;\n}\n.why-are-we[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px;\n  min-height: 400px;\n  background: #ffc40e;\n  color: #2f455b;\n  position: relative;\n}\n.why-are-we[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  padding: 5px 10px;\n  border-radius: 5px;\n  background: white;\n}\n.why-are-we[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.why-are-we[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -70px;\n  right: 10px;\n  width: 100px;\n}\n@media (min-width: 1200px) {\n  .why-are-we[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%] {\n    top: -100px;\n  }\n}\n@media (min-width: 1000px) {\n  .why-are-we[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n@media (min-width: 800px) {\n  .why-are-we[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%] {\n    right: 100px;\n  }\n}\n@media (max-width: 500px) {\n  .why-are-we[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .why-are-we[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}\n@media (max-width: 370px) {\n  .why-are-we[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.promo[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 800px;\n  background: #ffc40e;\n  color: white;\n  visibility: hidden;\n  display: none;\n}\n.about-photo[_ngcontent-%COMP%] {\n  background: white;\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.about-photo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  background: #ffc40e;\n  color: white;\n  border-radius: 5px;\n  padding: 5px 10px;\n  z-index: 1;\n}\n.about-photo[_ngcontent-%COMP%]   #card1[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-photo[_ngcontent-%COMP%]   #card2[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-photo[_ngcontent-%COMP%]   #card3[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-photo[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 40%;\n  left: 0;\n  opacity: 0.5;\n  display: none;\n}\n.about-photo[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n.about-photo[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 40%;\n  right: 0;\n  opacity: 0.5;\n  display: none;\n}\n.about-photo[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n.about-photo[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -30px;\n  left: 40px;\n  width: 150px;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 600px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 200px;\n  margin: 20px;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: 0.5s;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  transform-origin: bottom;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5em;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-origin: top;\n  transform: translateY(100%) rotateX(90deg);\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 1rem;\n  padding: 10px;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face1[_ngcontent-%COMP%] {\n  transform: translateY(-100%) rotateX(90deg);\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face2[_ngcontent-%COMP%] {\n  transform: translateY(0) rotateX(0deg);\n}\n@media (max-width: 1000px) {\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card1[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card2[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card3[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-photo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    top: 50px;\n  }\n  .about-photo[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-photo[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 700px) {\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card1[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card3[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-photo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    top: 25px;\n  }\n  .about-photo[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-photo[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-photo[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n@media (max-width: 700px) {\n  .about-photo[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n@media (max-width: 450px) {\n  .about-photo[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n    top: -50px;\n  }\n}\n.reason[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 600px;\n  background: #ffc40e;\n  color: #2f455b;\n}\n.reason[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 150px;\n}\n.reason[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 33%;\n  height: 50px;\n}\n.reason[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 1.5rem;\n  background: #2f455b;\n  color: white;\n}\n.reason[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  font-size: 1.2rem;\n  background: white;\n}\n.reason[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  padding: 5px 10px;\n  text-align: center;\n  background: #2f455b;\n  color: white;\n  border-radius: 5px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 100px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-two[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -30px;\n  z-index: 1;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-two[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 100px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n@media (max-width: 750px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 50px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 50px;\n  }\n}\n@media (max-width: 700px) {\n  .reason[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    display: block;\n    position: unset;\n  }\n  .reason[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 95%;\n    height: 95%;\n  }\n  .reason[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .reason[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%], .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    bottom: 5px;\n  }\n}\n@media (max-width: 650px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n}\n@media (max-width: 600px) {\n  .reason[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    top: 20px;\n  }\n}\n@media (max-width: 570px) {\n  .reason[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    top: 10px;\n    line-height: 1.8rem;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 420px) {\n  .reason[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n  .reason[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    top: 10px;\n    padding: 5px;\n    line-height: 1.5rem;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-two[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n@media (max-width: 350px) {\n  .reason[_ngcontent-%COMP%] {\n    height: 700px;\n  }\n}\n@media (min-width: 1000px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 200px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-two[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 200px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .reason[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media (min-width: 1500px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 300px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-two[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 300px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .reason[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n.about-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 600px;\n  background: #2f455b;\n  color: white;\n  position: relative;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  background: white;\n  color: #2f455b;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text1[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text2[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text3[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text4[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-text[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 40%;\n  left: 0;\n  opacity: 0.5;\n  display: none;\n}\n.about-text[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n.about-text[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 40%;\n  right: 0;\n  opacity: 0.5;\n  display: none;\n}\n.about-text[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n.about-text[_ngcontent-%COMP%]   .image4[_ngcontent-%COMP%] {\n  width: 120px;\n  position: absolute;\n  bottom: 10px;\n  right: 50px;\n}\n@media (min-width: 1051px) {\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text1[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text2[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text3[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text4[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n@media (max-width: 1050px) {\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text1[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text2[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text3[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text4[_ngcontent-%COMP%] {\n    width: 33%;\n  }\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text4[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-text[_ngcontent-%COMP%]   .image4[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n  .about-text[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-text[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 800px) {\n  .about-text[_ngcontent-%COMP%]   .image4[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n@media (max-width: 700px) {\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text1[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text2[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text3[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text4[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text3[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-text[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-text[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 600px) {\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text1[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text2[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text3[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text4[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-text[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-text[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-text[_ngcontent-%COMP%]   .image4[_ngcontent-%COMP%] {\n    bottom: 50px;\n  }\n}\n@media (max-width: 350px) {\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text1[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text2[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text3[_ngcontent-%COMP%], .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text4[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .about-text[_ngcontent-%COMP%]   .image4[_ngcontent-%COMP%] {\n    bottom: 30px;\n  }\n}\n.scheme[_ngcontent-%COMP%] {\n  height: 400px;\n  background: #ffc40e;\n  color: white;\n  visibility: hidden;\n  display: none;\n}\n.reviews[_ngcontent-%COMP%] {\n  height: 400px;\n  background: #2f455b;\n  color: white;\n  visibility: hidden;\n  display: none;\n}\n.map[_ngcontent-%COMP%] {\n  background: white;\n}\n.map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n}\n.footer[_ngcontent-%COMP%] {\n  background: #ffc40e;\n  color: white;\n  height: 350px;\n  position: relative;\n  width: 100%;\n}\n.footer[_ngcontent-%COMP%]   .director[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  top: 10px;\n}\n.footer[_ngcontent-%COMP%]   .certificate[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  bottom: 50px;\n  padding: 0 20px;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   .privacy[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  right: 20px;\n}\n@media (min-width: 1000px) {\n  .footer[_ngcontent-%COMP%]   .certificate[_ngcontent-%COMP%] {\n    padding: 0 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1QkFBQTtFQUNBLDBDQUFBO0FBQUo7QUFhQTtFQUNJLGdCQUFBO0FBWEo7QUFjQTtFQUNJLG1CQWZXO0VBZ0JYLFlBYkk7QUFFUjtBQWNBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFyQlk7RUFzQlosV0FsQmE7QUFPakI7QUFhQTtFQUNJLFdBckJhO0VBc0JiLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBOUJZO0FBb0JoQjtBQVlBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQXRDWTtBQTJCaEI7QUFZSTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBdkNTO0VBd0NULGdCQUFBO0VBQ0EsaUJBQUE7QUFWUjtBQVlJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0EvQ1M7QUFxQ2pCO0FBWUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQXJEUztFQXNEVCxhQUFBO0FBVlI7QUFZSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBNURTO0VBNkRULGlCQUFBO0FBVlI7QUFZSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FsRVM7RUFtRVQsWUFBQTtFQUVBLGNBM0VEO0VBNEVDLGtCQUFBO0FBWFI7QUFhSTtFQUNJLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQTVFUztFQTZFVCxpQkFBQTtBQVhSO0FBYUk7RUFDSSxTQUFBO0FBWFI7QUFhSTtFQUlJLFNBQUE7QUFkUjtBQVdRO0VBQ0ksV0FBQTtBQVRaO0FBYUk7RUFJSSxVQUFBO0FBZFI7QUFXUTtFQUNJLFdBQUE7QUFUWjtBQWNBO0VBRVE7SUFDSSxVQUFBO0VB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bnQiOlsiXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdJU09DUEVVUic7IFxyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvdHRmL0lTT0NQRVVSLnR0ZicpOyBcclxufVxyXG5cclxuJGxpZ2h0LXllbGxvdzogcmdiKDI1NSwxOTYsMTQpO1xyXG4keWVsbG93OiByZ2IoMjEyLDE1OCw3NCk7XHJcbiRkYXJrOiByZ2IoNDcsNjksOTEpO1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kaGVpZ2h0LWhlYWRlcjogMTUwcHg7XHJcbiRoZWlnaHQtaGVhZGVyLW1pbjogMTAwcHg7XHJcbiRoZWlnaHQtZm9vdGVyOiAzNTBweDtcclxuJGhlaWdodC1ibG9jazogODAwcHg7XHJcbiR6LWluZGV4LWhlYWRlcjogMTA7XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRsaWdodC15ZWxsb3c7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgLy8gY29sb3I6ICRkYXJrO1xyXG59XHJcbi5oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDE5NiwxNCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQtaGVhZGVyO1xyXG4gICAgei1pbmRleDogJHotaW5kZXgtaGVhZGVyO1xyXG59XHJcbi5ociB7XHJcbiAgICB6LWluZGV4OiAkei1pbmRleC1oZWFkZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogJGhlaWdodC1oZWFkZXI7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0LWhlYWRlcjtcclxuICAgIC5vb28ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICBsZWZ0OiAxMTVweDtcclxuICAgICAgICB6LWluZGV4OiAkei1pbmRleC1oZWFkZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGxlZnQ6IDEwMHB4O1xyXG4gICAgICAgIHotaW5kZXg6ICR6LWluZGV4LWhlYWRlcjtcclxuICAgIH1cclxuICAgIC5sb2dvLW1pbmkge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICB6LWluZGV4OiAkei1pbmRleC1oZWFkZXI7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5mb3VuZGF0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAxMjBweDtcclxuICAgICAgICBsZWZ0OiAxMTVweDtcclxuICAgICAgICB6LWluZGV4OiAkei1pbmRleC1oZWFkZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICAuc2VydmljZXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgei1pbmRleDogJHotaW5kZXgtaGVhZGVyO1xyXG4gICAgICAgIHdpZHRoOiA2NTBweDtcclxuICAgICAgICAvLyBjb2xvcjogbGlnaHRzZWFncmVlbjtcclxuICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnBob25lLCAud2hhdHNhcHAsIC5lbWFpbCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IElTT0NQRVVSLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICByaWdodDogMTAwcHg7XHJcbiAgICAgICAgei1pbmRleDogJHotaW5kZXgtaGVhZGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLmVtYWlsIHtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucGhvbmUge1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgIH0gICAgXHJcbiAgICAud2hhdHNhcHAge1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvcDogMTEwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNzVweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLm9vbywgLmZvdW5kYXRpb24ge1xyXG4gICAgICAgICAgICBsZWZ0OiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDU1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIC5waG9uZSwgLndoYXRzYXBwLCAuZW1haWwge1xyXG4gICAgICAgICAgICByaWdodDogNTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNjBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLm9vbywgLmZvdW5kYXRpb24ge1xyXG4gICAgICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waG9uZSwgLndoYXRzYXBwLCAuZW1haWwge1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICAuc2VydmljZXMge1xyXG4gICAgICAgICAgICBsZWZ0OjI1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgIGxlZnQ6MzAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC45ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLnNlcnZpY2VzIHtcclxuICAgICAgICAgICAgbGVmdDoyNzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY5MHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICAuc2VydmljZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIC5sb2dvLW1pbmkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub29vLCAuZm91bmRhdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVtYWlsIHtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGhvbmUge1xyXG4gICAgICAgICAgICB0b3A6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53aGF0c2FwcCB7XHJcbiAgICAgICAgICAgIHRvcDogNzVweDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQtaGVhZGVyLW1pbjtcclxuICAgIH1cclxuICAgIC5oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0LWhlYWRlci1taW47XHJcbiAgICB9XHJcbiAgICAuaHIge1xyXG4gICAgICAgIHRvcDogJGhlaWdodC1oZWFkZXItbWluO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLmxvZ28tbWluaSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyDQstGL0YHQvtGC0LBcclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA3MDBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLm9vbywgLmZvdW5kYXRpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VydmljZXMge1xyXG4gICAgICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lbWFpbCB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBob25lIHtcclxuICAgICAgICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAud2hhdHNhcHAge1xyXG4gICAgICAgICAgICB0b3A6IDc1cHg7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0LWhlYWRlci1taW47XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgICAgIGhlaWdodDogJGhlaWdodC1oZWFkZXItbWluO1xyXG4gICAgfVxyXG4gICAgLmhyIHtcclxuICAgICAgICB0b3A6ICRoZWlnaHQtaGVhZGVyLW1pbjtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTM3NXB4KSB7XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC45ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgLnNlcnZpY2VzIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g0J/RgNC40LLRj9C30LrQsCDRhNGD0YLQtdGA0LAg0Log0L/QvtC00LLQsNC70YMgOilcclxuLm1haW4ge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC50b3BcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4OSwgMTg5LCAxODksIDAuMyk7XHJcbiAgICAgICAgLy8gY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTIwcHg7XHJcbiAgICAgICAgLy8gbGVmdDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTI5LCAxMjksIDEyOSwgMC40KTtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwMHB4O1xyXG4gICAgICAgIC8vIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC50b3Age1xyXG4gICAgICAgIC8vIG92ZXJmbG93OnZpc2libGU7XHJcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIHRvcDogODBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHRvcDogNDAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAuY29uc3VsdGF0aW9uICAgICAg0JfQsNC/0L7Qu9C90LjRgtC1INGE0L7RgNC80YNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5jb25zdWx0YXRpb24ge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICRsaWdodC15ZWxsb3c7XHJcbiAgICAvLyBoZWlnaHQ6ICRoZWlnaHQtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC42KTtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDcsNjksOTEsMC44KTtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgaDEsIGg0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAyMHB4IDAgMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMjBweCAwIDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluc3RydW1lbnQge1xyXG4gICAgICAgIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmNvbnN1bHRhdGlvbiB7XHJcbiAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICBsZWZ0OiA2MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluc3RydW1lbnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2UyIHtcclxuICAgICAgICAgICAgbGVmdDogMTAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuY29uc3VsdGF0aW9uIHtcclxuICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0MkE5NDg7XHJcbn0gIFxyXG4ubmctaW52YWxpZDpub3QoLmZvcm0pICB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vIFRPQVNUIC0g0LLRgdC/0LvRi9Cy0LDRjtGJ0LXQtSDRgdC+0L7QsdGJ0LXQvdC40LVcclxuLnRvYXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3NSwgMTc1LCAxNzUsIDAuOCk7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAuYmxvY2sge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAud2h5LWFyZS13ZSAgICAgICAgINCeINC60L7QvNC/0LDQvdC40LhcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi53aHktYXJlLXdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LXllbGxvdztcclxuICAgIC8vIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBjb2xvcjogJGRhcms7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICAgIC5pbWFnZTEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC03MHB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLndoeS1hcmUtd2UgeyBcclxuICAgICAgICAuaW1hZ2UxIHtcclxuICAgICAgICAgICAgdG9wOiAtMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC53aHktYXJlLXdlIHsgXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAud2h5LWFyZS13ZSB7XHJcbiAgICAgICAgLmltYWdlMSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAud2h5LWFyZS13ZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xyXG4gICAgLndoeS1hcmUtd2Uge1xyXG4gICAgICAgIC5pbWFnZTEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC5wcm9tb1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLnByb21vIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQteWVsbG93O1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC5hYm91dC1waG90byAgICAgICAg0JzRiyDQv9GA0LXQtNC70LDQs9Cw0LXQvDpcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5hYm91dC1waG90byB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAkbGlnaHQteWVsbG93O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaDEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRsaWdodC15ZWxsb3c7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgICNjYXJkMSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAjY2FyZDIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgI2NhcmQzIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5hcnJvdy1sZWZ0IHtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIC5hcnJvdy1yaWdodCB7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmltYWdlMyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTMwcHg7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbn1cclxuLmFib3V0LXBob3RvIC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAuZmFjZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYWNlLmZhY2UxIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmFjZS5mYWNlMiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgICAgICAgICAgLmNvbnRlbnQgcCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkOmhvdmVyIC5mYWNlLmZhY2UxIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgfVxyXG4gICAgLmNhcmQ6aG92ZXIgLmZhY2UuZmFjZTIge1x0XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmFib3V0LXBob3RvIHtcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNjYXJkMiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctbGVmdCB7ICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFycm93LXJpZ2h0IHsgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHsgICAgXHJcbiAgICAuYWJvdXQtcGhvdG8ge1xyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHRvcDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFycm93LWxlZnQgeyAgICBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnJvdy1yaWdodCB7ICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlMyB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmFib3V0LXBob3RvIHtcclxuICAgICAgICAuaW1hZ2UzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC5hYm91dC1waG90byB7XHJcbiAgICAgICAgLmltYWdlMyB7XHJcbiAgICAgICAgICAgIHRvcDogLTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC5yZWFzb24gICAgICAgICAgICDQn9C+0YfQtdC80YMg0JLRiyDQtNC+0LvQttC90Ysg0LLRi9Cx0YDQsNGC0Ywg0LjQvNC10L3QvdC+INC90LDRgTpcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5yZWFzb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gaGVpZ2h0OiAkaGVpZ2h0LWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICRsaWdodC15ZWxsb3c7XHJcbiAgICBjb2xvcjogJGRhcms7XHJcbiAgICAuYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGRhcms7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGRhcms7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAucmVhc29uLWltZy1vbmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgbGVmdDogMTAwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWFzb24taW1nLXR3byB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlYXNvbi1pbWctdGhyZWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAucmVhc29uIHtcclxuICAgICAgICAucmVhc29uLWltZy1vbmUge1xyXG4gICAgICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVhc29uLWltZy10aHJlZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5yZWFzb24ge1xyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlYXNvbi1pbWctb25lLCAucmVhc29uLWltZy10aHJlZSB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC5yZWFzb24ge1xyXG4gICAgICAgIC5yZWFzb24taW1nLW9uZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWFzb24taW1nLXRocmVlIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnJlYXNvbiB7IFxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcclxuICAgIC5yZWFzb24ge1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVhc29uLWltZy1vbmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVhc29uLWltZy10aHJlZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgLnJlYXNvbiB7IFxyXG4gICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlYXNvbi1pbWctdHdvIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgIC5yZWFzb24ge1xyXG4gICAgICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgLnJlYXNvbiB7XHJcbiAgICAgICAgLnJlYXNvbi1pbWctb25lIHtcclxuICAgICAgICAgICAgbGVmdDogMjAwcHg7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlYXNvbi1pbWctdHdvIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVhc29uLWltZy10aHJlZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgLnJlYXNvbiB7XHJcbiAgICAgICAgLnJlYXNvbi1pbWctb25lIHtcclxuICAgICAgICAgICAgbGVmdDogMzAwcHg7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlYXNvbi1pbWctdHdvIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVhc29uLWltZy10aHJlZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAuYWJvdXQtdGV4dCAgICAgICAgINCS0LjQtNGLINGA0LDQsdC+0YI6XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4uYWJvdXQtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICRkYXJrO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAkaGVpZ2h0LWJsb2NrOyAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgICAgIC8vIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0ZXh0MSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjdGV4dDIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgI3RleHQzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICN0ZXh0NCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hcnJvdy1sZWZ0IHtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIC5hcnJvdy1yaWdodCB7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICAuaW1hZ2U0IHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICByaWdodDogNTBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MXB4KSB7IC8vID49IDEwNTFcclxuICAgIC5hYm91dC10ZXh0IHtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgI3RleHQxLCAjdGV4dDIsICN0ZXh0MywgI3RleHQ0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCkgeyAvLyA8PSAxMDUwXHJcbiAgICAuYWJvdXQtdGV4dCB7XHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICN0ZXh0MSwgI3RleHQyLCAjdGV4dDMsICN0ZXh0NHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RleHQ0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlNCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFycm93LWxlZnQgeyAgICBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnJvdy1yaWdodCB7ICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7IC8vIDwgODAwXHJcbiAgICAuYWJvdXQtdGV4dCB7XHJcbiAgICAgICAgLmltYWdlNCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAuYWJvdXQtdGV4dCB7XHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICAgICN0ZXh0MSwgI3RleHQyLCAjdGV4dDMsICN0ZXh0NHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gI3RleHQxIHtcclxuICAgICAgICAgICAgLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vICN0ZXh0MiB7XHJcbiAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAjdGV4dDMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctbGVmdCB7ICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFycm93LXJpZ2h0IHsgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5hYm91dC10ZXh0IHtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgI3RleHQxLCAjdGV4dDIsICN0ZXh0MywgI3RleHQ0e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAjdGV4dDEge1xyXG4gICAgICAgICAgICAvLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIC8vIH0gICAgXHJcbiAgICAgICAgICAgICN0ZXh0MiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICN0ZXh0MyB7XHJcbiAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnJvdy1sZWZ0IHsgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctcmlnaHQgeyAgICBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZTQge1xyXG4gICAgICAgICAgICBib3R0b206IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgLmFib3V0LXRleHQge1xyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgICAjdGV4dDEsICN0ZXh0MiwgI3RleHQzLCAjdGV4dDR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2U0IHtcclxuICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLnNjaGVtZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLnNjaGVtZSB7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLy8gaGVpZ2h0OiAkaGVpZ2h0LWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICRsaWdodC15ZWxsb3c7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC5yZXZpZXdzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4ucmV2aWV3cyB7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLy8gaGVpZ2h0OiAkaGVpZ2h0LWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICRkYXJrO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIFxyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLm1hcFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLm1hcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICBpZnJhbWUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LXllbGxvdztcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAvLyBjb2xvcjogJGRhcms7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQtZm9vdGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuZGlyZWN0b3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNlcnRpZmljYXRlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICBib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5wcml2YWN5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5mb290ZXIge1xyXG4gICAgICAgIC5jZXJ0aWZpY2F0ZSB7XHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                providers: [_shared_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
                styleUrls: ['./landing.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'geometrix';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TsVY":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 103, vars: 0, consts: [[1, "logo"], ["href", "/"], ["src", "assets/logo.png", "alt", "logo"], [1, "back"], [1, "privacy"], ["id", "politics"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "1. \u041E\u0431\u0449\u0438\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1.1. \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435 \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043C \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0441\u0430\u0439\u0442\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043E\u043D\u043E \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043E \u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u0437\u0430\u0449\u0438\u0442\u044B \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446\u0430\u0445, \u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0438\u0445\u0441\u044F \u0443\u0441\u043B\u0443\u0433\u0430\u043C\u0438 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442\u0430 (\u0434\u0430\u043B\u0435\u0435 - \u0421\u0430\u0439\u0442) \u0438 \u0435\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432 (\u0434\u0430\u043B\u0435\u0435 - \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "1.2. \u041E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441\u043E \u0441\u0431\u043E\u0440\u043E\u043C, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u0437\u0430\u0449\u0438\u0442\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u0445 \u0421\u0430\u0439\u0442\u0430, \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C, \u0438\u043D\u044B\u043C\u0438 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0421\u0430\u0439\u0442\u0430 \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "1.3. \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u044F\u0441\u044C, \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F, \u0437\u0430\u044F\u0432\u043A\u0438, \u043B\u0438\u0434\u044B, \u0438\u043D\u044B\u0435 \u043F\u043E\u0441\u043B\u0430\u043D\u0438\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u0444\u043E\u0440\u043C \u0441\u0432\u044F\u0437\u0438 \u043D\u0430 \u0421\u0430\u0439\u0442\u0435, \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0421\u0430\u0439\u0442\u0430 \u0438 \u0435\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043D\u0435\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D\u043E. \u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u044D\u0442\u043E \u043D\u0435\u0441\u0435\u0442 \u0441\u0430\u043C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1.4. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u043D\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u043E\u0439 (\u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C\u043E\u0439) \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u0445, \u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u043A\u043E\u0433\u0434\u0430 \u0442\u0430\u043A\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0432 \u0446\u0435\u043B\u044F\u0445 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0421\u0430\u0439\u0442\u0430 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u0435\u0440\u0435\u0434 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2. \u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u0446\u0435\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2.1. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432 \u0446\u0435\u043B\u044F\u0445 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0441\u0432\u043E\u0438\u0445 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043C\u0435\u0436\u0434\u0443 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0421\u0430\u0439\u0442\u0430 \u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043D\u044B\u0445 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0439 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u0421\u0430\u0439\u0442\u0430. \u0412 \u0441\u0438\u043B\u0443 \u0441\u0442\u0430\u0442\u044C\u0438 6 \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0430 \u043E\u0442 27.07.2006 \u2116 152-\u0424\u0417 \u00AB\u041E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\u00BB \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F. \u0412 \u0441\u0438\u043B\u0443 \u043F.\u043F. 2 \u043F. 2 \u0441\u0442\u0430\u0442\u044C\u0438 22 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0430 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0431\u0435\u0437 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0443\u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0440\u0433\u0430\u043D\u0430 \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u0430\u0432 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2.2. \u0426\u0435\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0432 \u0441\u0435\u0431\u044F: \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A, \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0433\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433, \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "3. \u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0432\u0432\u043E\u0434\u0430 \u0432 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3.1. \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0432 \u0441\u0438\u043B\u0443 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0435\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043D\u0430 \u0421\u0430\u0439\u0442\u0435 \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u043E, \u0434\u043E \u0437\u0430\u043C\u0435\u043D\u044B \u0435\u0433\u043E \u043D\u043E\u0432\u044B\u043C \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "3.2. \u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0430\u044F \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u044F \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u044F\u0432\u043B\u044F\u044E\u0449\u0438\u043C\u0441\u044F \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043C, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043B\u044E\u0431\u043E\u043C\u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "3.3. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u0432\u043F\u0440\u0430\u0432\u0435 \u0432\u043D\u043E\u0441\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435. \u041F\u0440\u0438 \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0435\u0442 \u043E\u0431 \u044D\u0442\u043E\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043F\u0443\u0442\u0435\u043C \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0439 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0438 \u043D\u0430 \u0421\u0430\u0439\u0442\u0435 \u043F\u043E \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443. \u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0438 \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0443\u0442\u0440\u0430\u0447\u0438\u0432\u0430\u044E\u0442 \u0441\u0438\u043B\u0443. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "4. \u0426\u0435\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "4.1. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u0445, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432 \u0446\u0435\u043B\u044F\u0445 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043C\u0435\u0436\u0434\u0443 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0421\u0430\u0439\u0442\u0430 \u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043D\u044B\u0445 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0439 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u0421\u0430\u0439\u0442\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "5. \u0421\u043E\u0441\u0442\u0430\u0432 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "5.1. \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0434\u043E\u0431\u0440\u043E\u0432\u043E\u043B\u044C\u043D\u043E, \u043E\u0437\u043D\u0430\u0447\u0430\u044E\u0442 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u0438\u0445 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0421\u0430\u0439\u0442\u0430 \u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0432 \u0441\u0435\u0431\u044F: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "5.1.1. \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0441\u0432\u044F\u0437\u0438: \u0438\u043C\u044F (\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u044B\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0433\u043E), \u043D\u043E\u043C\u0435\u0440 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438/\u0438\u043B\u0438 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B. \u0418\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 (\u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043F\u043E\u043B, \u0432\u043E\u0437\u0440\u0430\u0441\u0442, \u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F, \u0430\u0434\u0440\u0435\u0441 \u0438 \u0442.\u0434.) \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043F\u043E \u0436\u0435\u043B\u0430\u043D\u0438\u044E \u0438 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0442\u0430\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0441\u0432\u044F\u0437\u0438 \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0438 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0443\u0441\u043B\u0443\u0433 \u0438\u043B\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u0439 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "5.2. \u0418\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u0445, \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u0430\u044F \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0421\u0430\u0439\u0442\u0430. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0442\u0430\u043A\u0436\u0435 \u0438\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u0445, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "5.2.1. \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u044B\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u043F\u0440\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0435 \u043A \u0421\u0430\u0439\u0442\u0443 \u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u0445 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F (IP-\u0430\u0434\u0440\u0435\u0441 \u0445\u043E\u0441\u0442\u0430, \u0432\u0438\u0434 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0421\u0430\u0439\u0442\u0430, \u043F\u043E\u0441\u0435\u0449\u0430\u0435\u043C\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5.2.2. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u0430\u044F \u043F\u0440\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0435 \u043A \u0421\u0430\u0439\u0442\u0443 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A (cookies).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "5.2.3. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0430\u044F \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0430 \u0421\u0430\u0439\u0442\u0435. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "5.2.4. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0430\u044F \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043D\u0430 \u0421\u0430\u0439\u0442\u0435. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "5.2.5. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430\u044F \u0434\u043B\u044F \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C \u0441\u0430\u0439\u0442\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "6. \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u0445 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "6.1. \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "- \u0437\u0430\u043A\u043E\u043D\u043D\u043E\u0441\u0442\u0438 \u0446\u0435\u043B\u0435\u0439 \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u0432 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "- \u0434\u043E\u0431\u0440\u043E\u0441\u043E\u0432\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u0438; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "- \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F \u0446\u0435\u043B\u0435\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0446\u0435\u043B\u044F\u043C, \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u043C \u0438 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u043D\u044B\u043C \u043F\u0440\u0438 \u0441\u0431\u043E\u0440\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0438\u044F\u043C \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0421\u0430\u0439\u0442\u0430; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "- \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F \u043E\u0431\u044A\u0435\u043C\u0430 \u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u0432 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0446\u0435\u043B\u044F\u043C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "6.2. \u0421\u0431\u043E\u0440 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "6.2.1. \u0421\u0431\u043E\u0440 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0421\u0430\u0439\u0442\u0435 \u043F\u0440\u0438 \u043F\u0440\u0438 \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u0438 \u0438\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043F\u043E \u0441\u0432\u043E\u0435\u0439 \u0438\u043D\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0435 \u043D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043A \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0441\u0430\u0439\u0442\u0430 \u043B\u0438\u0431\u043E \u043A \u0441\u0430\u0439\u0442\u0443, \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "6.2.2. \u0418\u043C\u044F, \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u0438\\\u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0434\u043B\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u0438 \u0434\u043B\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0430 \u0421\u0430\u0439\u0442\u0435 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "6.2.3. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0438\u043D\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0435 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0421\u0430\u0439\u0442\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "6.3. \u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "6.3.1. \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044F\u0445 \u0438 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C, \u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u043A\u043E\u0433\u0434\u0430 \u043D\u0435\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "6.4. \u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "6.4.1. \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u043A\u0430\u043A\u0438\u043C-\u043B\u0438\u0431\u043E \u043B\u0438\u0446\u0430\u043C, \u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u043F\u0440\u044F\u043C\u043E \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "6.4.2. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u043D\u0430 \u0421\u0430\u0439\u0442\u0435, \u0440\u0430\u0437\u043C\u0435\u0449\u0430\u044E\u0442\u0441\u044F \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0442\u0440\u0435\u0442\u044C\u0438\u043C\u0438 \u043B\u0438\u0446\u0430\u043C\u0438 (\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C\u0438), \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0442 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0421\u0430\u0439\u0442\u0430 \u0438 \u043D\u0435 \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u043E\u0442 \u0438\u043C\u0435\u043D\u0438 \u0438\u043B\u0438 \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0421\u0430\u0439\u0442\u0430. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043E\u0431\u044F\u0437\u0430\u043D\u044B \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0438 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u0437\u0430\u0449\u0438\u0442\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0442\u0430\u043A\u0438\u0445 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446 (\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432) \u0434\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "6.4.3. \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u043E\u0432 (\u043E\u0440\u0433\u0430\u043D\u043E\u0432 \u043C\u0435\u0441\u0442\u043D\u043E\u0433\u043E \u0441\u0430\u043C\u043E\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F) \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u043E\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "6.5. \u0423\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "6.5.1. \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0441\u044C\u0431\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041F\u0440\u043E\u0441\u044C\u0431\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u044F\u043C\u043E \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "7. \u041C\u0435\u0440\u044B \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u0445. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "7.1. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0435 \u043C\u0435\u0440\u044B \u0432 \u0446\u0435\u043B\u044F\u0445 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0437\u0430\u0449\u0438\u0442\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0442 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043D\u0438\u043C, \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u044F, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0442 \u0438\u043D\u044B\u0445 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "8. \u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u041F\u0440\u0430\u0432\u0438\u043B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "8.1. \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0445 \u041F\u0440\u0430\u0432\u0438\u043B \u043D\u0435 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0438 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "8.2. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446, \u043F\u043E\u043B\u0443\u0447\u0438\u0432\u0448\u0438\u0445 \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u0438\u043B\u0438 \u0423\u0441\u043B\u0443\u0433 \u0421\u0430\u0439\u0442\u0430 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435 \u0438 \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u0430\u044F, \u0432 \u0441\u0438\u043B\u0443 \u043F\u0440\u0438\u0440\u043E\u0434\u044B \u0421\u0430\u0439\u0442\u0430, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043B\u044E\u0431\u043E\u043C\u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "8.3. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u043A \u0440\u0435\u0448\u0435\u043D\u0438\u044E \u0432\u043E\u043F\u0440\u043E\u0441\u0430 \u043E\u0431 \u043E\u0431\u044A\u0435\u043C\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0441\u0435\u0431\u0435, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0439 \u0441 \u0421\u0430\u0439\u0442\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 10px;\n  right: 20px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  opacity: 0.5;\n}\n.back[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  background: #ffc40e;\n  opacity: 0.7;\n  font-size: 2rem;\n  border-radius: 5px;\n  border: 1px solid #ffc40e;\n}\n.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n@media (max-width: 800px) {\n  .back[_ngcontent-%COMP%] {\n    top: 63px;\n  }\n}\n@media (max-width: 529px) {\n  .back[_ngcontent-%COMP%] {\n    top: 25px;\n    left: 5px;\n  }\n}\n@media (max-width: 415px) {\n  .back[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    left: 5px;\n  }\n  .back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n@media (max-width: 340px) {\n  .back[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n@media (max-width: 700px) {\n  .logo[_ngcontent-%COMP%] {\n    top: 60px;\n  }\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n}\n@media (max-width: 500px) {\n  .logo[_ngcontent-%COMP%] {\n    top: 10px;\n  }\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n}\n.privacy[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n}\n.privacy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n}\n.privacy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByaXZhY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFESjtBQUVJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFBUjtBQUdBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBZlc7RUFnQlgsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFFQTtFQUNJO0lBQ0ksU0FBQTtFQUNOO0FBQ0Y7QUFDQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFNBQUE7RUFDTjtBQUNGO0FBQ0E7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsU0FBQTtFQUNOO0VBQU07SUFDSSxrQkFBQTtFQUVWO0FBQ0Y7QUFDQTtFQUNJO0lBQ0ksaUJBQUE7RUFDTjtFQUFNO0lBQ0ksa0JBQUE7RUFFVjtBQUNGO0FBQ0E7RUFDSTtJQUNJLFNBQUE7RUFDTjtFQUFNO0lBQ0ksV0FBQTtFQUVWO0FBQ0Y7QUFDQTtFQUNJO0lBQ0ksU0FBQTtFQUNOO0VBQU07SUFDSSxXQUFBO0VBRVY7QUFDRjtBQUVBO0VBQ0ksb0JBQUE7QUFBSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FBQ1I7QUFDSTtFQUNJLGlCQUFBO0FBQ1IiLCJmaWxlIjoicHJpdmFjeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaWdodC15ZWxsb3c6IHJnYigyNTUsMTk2LDE0KTtcclxuXHJcbi5sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG59XHJcbi5iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQteWVsbG93O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LXllbGxvdztcclxuICAgIGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5iYWNrIHtcclxuICAgICAgICB0b3A6IDYzcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyOXB4KSB7XHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICAgIGxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDE1cHgpIHtcclxuICAgIC5iYWNrIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJpdmFjeSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIGgxIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA0MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy',
                templateUrl: './privacy.component.html',
                styleUrls: ['./privacy.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VL+U":
/*!****************************************************!*\
  !*** ./src/app/shared/forbidden-name.directive.ts ***!
  \****************************************************/
/*! exports provided: forbiddenNameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
function forbiddenNameValidator(nameRe) {
    return (control) => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./privacy/privacy.component */ "TsVY");
/* harmony import */ var _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./certificate/certificate.component */ "ZaPg");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
        _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"],
        _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_9__["CertificateComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                    _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"],
                    _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_9__["CertificateComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZaPg":
/*!******************************************************!*\
  !*** ./src/app/certificate/certificate.component.ts ***!
  \******************************************************/
/*! exports provided: CertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateComponent", function() { return CertificateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CertificateComponent {
    constructor() { }
    ngOnInit() {
    }
}
CertificateComponent.ɵfac = function CertificateComponent_Factory(t) { return new (t || CertificateComponent)(); };
CertificateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CertificateComponent, selectors: [["app-certificate"]], decls: 9, vars: 0, consts: [[1, "logo"], ["href", "/"], ["src", "assets/logo.png", "alt", "logo"], [1, "back"], [1, "certificate"], ["src", "assets/img/certificate/certificate1.jpg", "alt", "certificate1"], ["src", "assets/img/certificate/certificate2.jpg", "alt", "certificate2"]], template: function CertificateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 10px;\n  right: 20px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  opacity: 0.5;\n}\n.back[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  background: #ffc40e;\n  opacity: 0.7;\n  font-size: 2rem;\n  border-radius: 5px;\n  border: 1px solid #ffc40e;\n}\n.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n@media (max-width: 900px) {\n  .logo[_ngcontent-%COMP%] {\n    top: 70px;\n  }\n}\n@media (max-width: 700px) {\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n}\n@media (max-width: 529px) {\n  .back[_ngcontent-%COMP%] {\n    top: 25px;\n    left: 5px;\n  }\n}\n@media (max-width: 500px) {\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n}\n@media (max-width: 450px) {\n  .logo[_ngcontent-%COMP%] {\n    top: 40px;\n  }\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n@media (max-width: 415px) {\n  .back[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    left: 5px;\n  }\n  .back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n@media (max-width: 340px) {\n  .back[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n.certificate[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n}\n.certificate[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n}\n.certificate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px 40px;\n}\n.certificate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNlcnRpZmljYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBREo7QUFFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQVI7QUFHQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQWZXO0VBZ0JYLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBRUE7RUFDSTtJQUNJLFNBQUE7RUFDTjtBQUNGO0FBTUE7RUFHUTtJQUNJLFdBQUE7RUFOVjtBQUNGO0FBU0E7RUFDSTtJQUNJLFNBQUE7SUFDQSxTQUFBO0VBUE47QUFDRjtBQVNBO0VBR1E7SUFDSSxXQUFBO0VBVFY7QUFDRjtBQVlBO0VBQ0k7SUFDSSxTQUFBO0VBVk47RUFXTTtJQUNJLFdBQUE7RUFUVjtBQUNGO0FBWUE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsU0FBQTtFQVZOO0VBV007SUFDSSxrQkFBQTtFQVRWO0FBQ0Y7QUFZQTtFQUNJO0lBQ0ksaUJBQUE7RUFWTjtFQVdNO0lBQ0ksa0JBQUE7RUFUVjtBQUNGO0FBZ0JBO0VBQ0ksb0JBQUE7QUFkSjtBQWVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FBYlI7QUFlSTtFQUNJLGlCQUFBO0FBYlI7QUFlSTtFQUNJLFdBQUE7QUFiUiIsImZpbGUiOiJjZXJ0aWZpY2F0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaWdodC15ZWxsb3c6IHJnYigyNTUsMTk2LDE0KTtcclxuXHJcbi5sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG59XHJcbi5iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQteWVsbG93O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LXllbGxvdztcclxuICAgIGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB0b3A6IDcwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgLy8gdG9wOiA2M3B4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIC8vIHRvcDogNjBweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyOXB4KSB7XHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICAgIGxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICAvLyB0b3A6IDEwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHRvcDogNDBweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNXB4KSB7XHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkge1xyXG4gICAgLmJhY2sge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uY2VydGlmaWNhdGUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggNDBweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-certificate',
                templateUrl: './certificate.component.html',
                styleUrls: ['./certificate.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nGxR":
/*!****************************************!*\
  !*** ./src/app/shared/http.service.ts ***!
  \****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



// export interface Form {
//     name: string
//     phone: string
//     email?: string
// }
class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(name, phone, email = "") {
        const options = { params: { "name": name, "phone": phone, "email": email } };
        return this.http.get("/api", options);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 3, vars: 0, consts: [[1, "center"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error 404 Page Not Found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".center[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #d49e4a;\n}\n.center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSIiwiZmlsZSI6InBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMTIsMTU4LDc0KTtcclxuICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificate/certificate.component */ "ZaPg");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacy/privacy.component */ "TsVY");








const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'privacy', component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_5__["PrivacyComponent"] },
    { path: 'certificate', component: _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_2__["CertificateComponent"] },
    { path: 'api', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map