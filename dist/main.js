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
    arrowLeft(id1 = "card1", id2 = "card2", id3 = "card3", middleWidth = 700) {
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
            }
            else { // если на экране одна карточка (1)
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
        }
        else { // если это НЕ первое нажатие на кнопку
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
                }
                else { // если 1 видна, значит 3 спрятана
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
            }
            else { // если на экране одна карточка, узнаём какая
                if (card1.style.display == "block") { // если 1 
                    card1.style.display = "none"; // то прячем её
                    // card1.style.visibility = "hidden";
                    // card1.style.opacity = "0";
                    card3.style.display = "block"; //  показываем 3
                    // card3.style.visibility = "visible";
                    // card3.style.opacity = "1";
                }
                else if (card2.style.display == "block") { // если 2 
                    card2.style.display = "none"; // то прячем её
                    // card2.style.visibility = "hidden";
                    // card2.style.opacity = "0";
                    card1.style.display = "block"; //  показываем 1        
                    // card1.style.visibility = "visible";  
                    // card1.style.opacity = "1";
                }
                else { // если 3          
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
    arrowRight(id1 = "card1", id2 = "card2", id3 = "card3", middleWidth = 700) {
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
                card2.style.display = "block"; // показываем вторую
                card3.style.display = "none";
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
                    card2.style.display = "block"; //  показываем 2
                }
                else if (card2.style.display == "block") { // если 2 
                    card2.style.display = "none"; // то прячем её
                    card3.style.display = "block"; //  показываем 3 
                }
                else { // если 3          
                    card3.style.display = "none"; // то прячем её
                    card1.style.display = "block"; //  показываем 1   
                }
            }
        }
    } // end arrowRight()
    arrowLeftTwo() {
        this.arrowLeft("text1", "text2", "text3", 525);
    }
    arrowRightTwo() {
        this.arrowRight("text1", "text2", "text3", 525);
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])], decls: 181, vars: 2, consts: [[1, "header-background"], [1, "header"], [1, "services"], [1, "ooo"], [1, "foundation"], ["src", "assets/l.png", "alt", "logo", 1, "logo"], ["src", "assets/logo.png", "alt", "logo", 1, "logo-mini"], [1, "email"], [1, "phone"], ["src", "assets/img/social/phone.png", "alt", "phone"], [1, "whatsapp"], ["src", "assets/img/social/wa.png", "alt", "phone"], [1, "hr"], [1, "main"], [1, "top"], ["src", "assets/top++.jpg", "alt", "header"], [1, "promo"], [1, "consultation"], [1, "form", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F*", "formControlName", "name", "required", "", "maxlength", "20"], ["type", "text", "placeholder", "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D*", "formControlName", "phone", "required", "", "maxlength", "20"], ["type", "text", "placeholder", "\u0412\u0430\u0448 Email", "formControlName", "email", "maxlength", "30"], ["type", "submit", "id", "submit", 1, "btn", 3, "disabled"], ["src", "assets/instrument.png", "alt", "instrument", 1, "instrument"], ["id", "toast", 1, "toast", 3, "click"], [1, "block"], [3, "click"], [1, "why-are-we"], [1, "about-photo"], [1, "container"], ["id", "card1", 1, "card", "card1"], [1, "face", "face1"], [1, "content"], ["src", "assets/about-photo-one.jpg", "alt", "one"], [1, "face", "face2"], ["id", "card2", 1, "card", "card2"], ["src", "assets/about-photo-two.jpg", "alt", "two"], ["id", "card3", 1, "card", "card3"], ["src", "assets/about-photo-three.jpg", "alt", "three"], [1, "arrow-left", 3, "click"], ["src", "assets/img/buttons/arrow-left.png", "alt", "arrow-left"], [1, "arrow-right", 3, "click"], ["src", "assets/img/buttons/arrow-right.png", "alt", "arrow-right"], [1, "reason"], [1, "reason-one"], [1, "reason-two"], [1, "reason-three"], [1, "reason-img-one"], ["src", "assets/reason-img-one.jpg", "alt", "reason-img-one"], [1, "reason-img-two"], ["src", "assets/reason-img-two.jpg", "alt", "reason-img-two"], [1, "reason-img-three"], ["src", "assets/reason-img-three.jpg", "alt", "reason-img-three"], [1, "about-text"], [1, "box"], ["id", "text1"], ["id", "text2"], ["id", "text3"], [1, "scheme"], [1, "reviews"], [1, "map"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2277.71671512554!2d39.723912792176!3d47.24246509347906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9b3ff95edd7%3A0x3df435d2d9858d18!2z0YPQuy4g0J3QsNC90YHQtdC90LAsIDE0ONCQLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0KDQvtGB0YLQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMzQ0MDM4!5e0!3m2!1sru!2sru!4v1609084672156!5m2!1sru!2sru"), "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0"], [1, "footer"], [1, "director"], [1, "privacy"], ["href", "privacy"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_46_listener() { return ctx.delete_toast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_50_listener() { return ctx.delete_toast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u042F\u0441\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u00A0\u00A0\u00A0\u041E\u041E\u041E \u00AB\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u043A\u0441\u00BB \u2014 \u0442\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u043E-\u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432 2012 \u0433. \u0433\u0440\u0443\u043F\u043F\u043E\u0439 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432 \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430 \u201C\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u043D\u0430\u044F \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u044F\u201D \u0420\u043E\u0441\u0442\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u00A0\u00A0\u00A0\u041C\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u0432\u0441\u0435 \u0432\u0438\u0434\u044B \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0433. \u0420\u043E\u0441\u0442\u043E\u0432\u0430-\u043D\u0430-\u0414\u043E\u043D\u0443 \u0438 \u0420\u043E\u0441\u0442\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u00A0\u00A0\u00A0\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C, \u0441\u0432\u044F\u0437\u0430\u043D\u0430 \u0441 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E-\u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439 \u043F\u043E\u0434 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u00A0\u00A0\u00A0\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439 \u0441\u0442\u0440\u043E\u0433\u043E \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438, \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u00A0\u00A0\u00A0\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u0431\u043E\u0440\u043E\u0432 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0430\u0448\u0435\u0439 \u0444\u0438\u0440\u043C\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u043B\u044E\u0431\u043E\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0443.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u00A0\u00A0\u00A0\u0412 \u0447\u0438\u0441\u043B\u043E \u043D\u0430\u0448\u0438\u0445 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u0432 \u0432\u0445\u043E\u0434\u044F\u0442 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F, \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u044B\u0435 \u0438 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0447\u0430\u0441\u0442\u043D\u044B\u0435 \u043B\u0438\u0446\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u044A\u0435\u043C\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u044A\u0435\u043C\u043A\u0430 \u2014 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432\u0438\u0434 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442. \u041F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044C \u0432 \u043D\u0435\u0439 \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u0435\u0442 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0442\u043E\u043F\u043E\u043A\u0430\u0440\u0442, \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u044F\u0445, \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043B\u0430\u043D\u043E\u0432 \u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0447\u0435\u0440\u0442\u0435\u0436\u0435\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043D\u043E\u0433\u043E \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u0413\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u043F\u043E\u0434 \u0441\u043E\u0431\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u043F\u043E \u0440\u0430\u0437\u0431\u0438\u0432\u043A\u0435 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0435. \u041D\u0430\u0448\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u043B\u043D\u043E \u0438 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u044F\u0442 \u0432\u0441\u044E \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E \u043D\u0430 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0437\u0430 \u043E\u0441\u0430\u0434\u043A\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F \u0437\u0430 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u043C\u0438 \u0438\u043B\u0438 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433 \u0437\u0434\u0430\u043D\u0438\u0439 \u0438 \u0441\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0430\u0441\u043D\u044B\u0445 \u0432\u0435\u043B\u0438\u0447\u0438\u043D \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0439 \u0438 \u043E\u043F\u043E\u043B\u0437\u043D\u0435\u0432\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0447\u0438\u043D \u0438\u0445 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_102_listener() { return ctx.arrowLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_104_listener() { return ctx.arrowRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0438\u043C\u0435\u043D\u043D\u043E \u043C\u044B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u041F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u041F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u041F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u0412\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u041C\u0435\u0436\u0435\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442 \u0431\u044B\u0441\u0442\u0440\u043E\u0435, \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043C\u0435\u0436\u0435\u0432\u0430\u043D\u0438\u0435 \u0437\u0435\u043C\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043A\u0430: \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u0435 \u0433\u0440\u0430\u043D\u0438\u0446, \u0440\u0430\u0437\u0434\u0435\u043B, \u043F\u0435\u0440\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435, \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435, \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0435\u043C\u0435\u043B\u044C\u043D\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043A\u043E\u0432. \u041E\u043F\u044B\u0442 \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u043D\u0430\u0448\u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u044E\u0442 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u0441\u0435\u0445 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0435\u0439.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u0422\u043E\u043F\u043E\u043F\u043B\u0430\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u044A\u0435\u043C\u043A\u0430 \u043C\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u0438 \u2013 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0432 \u0441\u043E\u0441\u0442\u0430\u0432\u0435 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u043D\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043B\u0430\u043D\u043E\u0432 \u043C\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u0442\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u0430\u0440\u0442 \u0434\u043B\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0438\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044F\u043C\u0438, \u0432\u043E\u0435\u043D\u043D\u044B\u043C\u0438, \u0442\u0443\u0440\u0438\u0441\u0442\u0430\u043C\u0438 \u0438 \u0442.\u0434. \u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0442\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u044A\u0435\u043C\u043A\u0438, \u043A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u043E, \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u0435 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C \u044D\u0442\u043E\u0433\u043E \u0432\u0438\u0434\u0430 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u043E\u043F\u043E\u043F\u043B\u0430\u043D \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u0413\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u043F\u043E\u0434 \u0441\u043E\u0431\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u043F\u043E \u0440\u0430\u0437\u0431\u0438\u0432\u043A\u0435 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0435. \u00AB\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u043A\u0441\u00BB \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0432\u0430\u043C \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u0435\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E. \u0412\u0441\u0435 \u0437\u0430\u0431\u043E\u0442\u044B \u043E \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0438 \u043C\u044B \u0432\u043E\u0437\u044C\u043C\u0435\u043C \u043D\u0430 \u0441\u0435\u0431\u044F!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_149_listener() { return ctx.arrowLeftTwo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_151_listener() { return ctx.arrowRightTwo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "iframe", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "footer", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u041A\u043E\u0447\u043A\u0438\u043D \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0415\u0432\u0433\u0435\u043D\u044C\u0435\u0432\u0438\u0447");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u00A0\u00A0\u00A0344010, \u0420\u043E\u0441\u0441\u0438\u044F, \u0433.\u0420\u043E\u0441\u0442\u043E\u0432-\u043D\u0430-\u0414\u043E\u043D\u0443, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\u00A0\u00A0\u00A0\u0443\u043B.\u041D\u0430\u043D\u0441\u0435\u043D\u0430, \u0434.148\u0430, \u043E\u0444\u0438\u0441 109");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "\u041E\u0413\u0420\u041D: 1126194004100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\u0418\u041D\u041D: 6168059100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: ["@font-face {\n  font-family: \"ISOCPEUR\";\n  src: url(\"/assets/fonts/ttf/ISOCPEUR.ttf\");\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: 200;\n}\n.header[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n  background: #ffc40e;\n  color: white;\n}\n.header-background[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background: #ffc40e;\n  opacity: 1;\n  width: 100%;\n  height: 150px;\n  z-index: 10;\n}\n.hr[_ngcontent-%COMP%] {\n  z-index: 10;\n  width: 100%;\n  border-top: 1px solid white;\n  border-bottom: 1px solid black;\n  position: fixed;\n  top: 150px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 150px;\n}\n.header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 8px;\n  left: 115px;\n  z-index: 10;\n  font-size: large;\n  font-size: 1.5rem;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 250px;\n  position: fixed;\n  left: 100px;\n  z-index: 10;\n}\n.header[_ngcontent-%COMP%]   .logo-mini[_ngcontent-%COMP%] {\n  width: 100px;\n  position: fixed;\n  left: 30px;\n  z-index: 10;\n  display: none;\n}\n.header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 120px;\n  left: 115px;\n  z-index: 10;\n  font-size: 1.5rem;\n}\n.header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50px;\n  z-index: 10;\n  width: 650px;\n  color: #2f455b;\n  text-align: center;\n}\n.header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-family: ISOCPEUR, Arial, Helvetica, sans-serif;\n  position: fixed;\n  right: 100px;\n  z-index: 10;\n  font-size: 1.5rem;\n}\n.header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  top: 10px;\n}\n.header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  top: 50px;\n}\n.header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  top: 110px;\n}\n.header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n@media (max-width: 1375px) {\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    left: 70px;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    left: 55px;\n  }\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    width: 400px;\n    top: 40px;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    right: 55px;\n  }\n}\n@media (max-width: 1060px) {\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    left: 25px;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n}\n@media (max-width: 900px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    left: 250px;\n  }\n}\n@media (max-width: 820px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    left: 300px;\n    top: 15px;\n    width: 200px;\n    line-height: 0.9em;\n  }\n}\n@media (max-width: 750px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    left: 270px;\n  }\n}\n@media (max-width: 690px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 500px) {\n  .header[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .header[_ngcontent-%COMP%]   .logo-mini[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 30px;\n  }\n  .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    top: 25px;\n  }\n  .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n    top: 75px;\n  }\n\n  .header-background[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n\n  .hr[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n}\n@media (max-width: 500px) {\n  .header[_ngcontent-%COMP%]   .logo-mini[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n}\n@media (max-height: 700px) {\n  .header[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 30px;\n  }\n  .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    top: 25px;\n  }\n  .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n    top: 75px;\n  }\n\n  .header-background[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n\n  .hr[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n}\n@media (max-height: 700px) and (max-width: 1375px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 20px;\n    line-height: 0.9em;\n  }\n}\n@media (max-height: 700px) and (max-width: 820px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 10px;\n    font-size: 1.5rem;\n  }\n}\n.main[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 350px);\n}\n.top[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  background: white;\n  position: relative;\n}\n.top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  background: rgba(189, 189, 189, 0.3);\n  color: #2f455b;\n  position: absolute;\n  top: 120px;\n  font-size: 2.5rem;\n  border-radius: 10px;\n  border: 2px solid;\n  text-align: center;\n  margin: 15px;\n}\n.top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  background: rgba(129, 129, 129, 0.4);\n  color: white;\n  position: absolute;\n  top: 500px;\n  font-size: 3rem;\n  border-radius: 10px;\n  border: 2px solid;\n  text-align: center;\n  margin: 15px;\n}\n@media (max-width: 450px) {\n  .top[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n  .top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    top: 80px;\n    font-size: 2rem;\n  }\n  .top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    top: 400px;\n    font-size: 2rem;\n  }\n}\n.consultation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  height: 600px;\n  position: relative;\n}\n.consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  border-top-right-radius: 30px;\n  border-bottom-left-radius: 30px;\n  background: rgba(47, 69, 91, 0.8);\n  color: white;\n  width: 300px;\n  height: 450px;\n  padding: 20px;\n}\n.consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 5px 20px 0 20px;\n}\n.consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 20px;\n  margin: 20px 20px 0 20px;\n}\n.consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.consultation[_ngcontent-%COMP%]   .instrument[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50px;\n  bottom: 0;\n}\n@media (min-width: 1000px) {\n  .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    left: 600px;\n  }\n  .consultation[_ngcontent-%COMP%]   .instrument[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 400px;\n  }\n}\n@media (max-width: 400px) {\n  .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 15px;\n    margin: 15px 15px 0 15px;\n  }\n}\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border: 2px solid #42A948;\n}\n.ng-invalid[_ngcontent-%COMP%]:not(.form) {\n  border: 2px solid #a94442;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1001;\n  width: 100%;\n  height: 100%;\n  background: rgba(175, 175, 175, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n}\n.toast[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 300px;\n  height: 200px;\n  background: #f8f8f8;\n  border-radius: 5px;\n  opacity: 1;\n}\n.toast[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.toast[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  padding: 5px 10px;\n  margin: 10px;\n}\n.why-are-we[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px;\n  min-height: 400px;\n  background: #ffc40e;\n  color: white;\n}\n.why-are-we[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.why-are-we[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n@media (min-width: 1000px) {\n  .why-are-we[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n@media (max-width: 500px) {\n  .why-are-we[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .why-are-we[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}\n.promo[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 800px;\n  background: #ffc40e;\n  color: white;\n  visibility: hidden;\n  display: none;\n}\n.about-photo[_ngcontent-%COMP%] {\n  background: white;\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.about-photo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100px;\n  font-size: 2rem;\n}\n.about-photo[_ngcontent-%COMP%]   #card1[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-photo[_ngcontent-%COMP%]   #card2[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-photo[_ngcontent-%COMP%]   #card3[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-photo[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 40%;\n  left: 0;\n  opacity: 0.5;\n  display: none;\n}\n.about-photo[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n.about-photo[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 40%;\n  right: 0;\n  opacity: 0.5;\n  display: none;\n}\n.about-photo[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 600px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 200px;\n  margin: 20px;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: 0.5s;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  transform-origin: bottom;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5em;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-origin: top;\n  transform: translateY(100%) rotateX(90deg);\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 1rem;\n  padding: 10px;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face1[_ngcontent-%COMP%] {\n  transform: translateY(-100%) rotateX(90deg);\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face2[_ngcontent-%COMP%] {\n  transform: translateY(0) rotateX(0deg);\n}\n@media (max-width: 1000px) {\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card1[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card2[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card3[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-photo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    top: 50px;\n  }\n  .about-photo[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-photo[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 700px) {\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card1[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #card3[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-photo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    top: 25px;\n  }\n  .about-photo[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-photo[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.reason[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 400px;\n  background: #ffc40e;\n}\n.reason[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.reason[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 100px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-two[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -50px;\n  z-index: 1;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-two[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 100px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n@media (max-width: 750px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 50px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 50px;\n  }\n}\n@media (max-width: 700px) {\n  .reason[_ngcontent-%COMP%]   .reason-three[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 650px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n}\n@media (max-width: 550px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 500px) {\n  .reason[_ngcontent-%COMP%]   .reason-two[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 1000px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 200px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 200px;\n  }\n}\n@media (min-width: 1500px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 300px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 300px;\n  }\n}\n.about-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 600px;\n  background: #2f455b;\n  color: white;\n  position: relative;\n}\n.about-text[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 40%;\n  left: 0;\n  opacity: 0.5;\n  display: none;\n}\n.about-text[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n.about-text[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 40%;\n  right: 0;\n  opacity: 0.5;\n  display: none;\n}\n.about-text[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 80px;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text1[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text2[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text3[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 700px) {\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text1[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text2[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text3[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-text[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-text[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 525px) {\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text1[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #text3[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-text[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .about-text[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 1000px) {\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.scheme[_ngcontent-%COMP%] {\n  height: 400px;\n  background: #ffc40e;\n  color: white;\n  visibility: hidden;\n  display: none;\n}\n.reviews[_ngcontent-%COMP%] {\n  height: 400px;\n  background: #2f455b;\n  color: white;\n  visibility: hidden;\n  display: none;\n}\n.map[_ngcontent-%COMP%] {\n  background: white;\n}\n.map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n}\n.footer[_ngcontent-%COMP%] {\n  height: 200px;\n  position: relative;\n  width: 100%;\n}\n.footer[_ngcontent-%COMP%]   .director[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  top: 10px;\n}\n.footer[_ngcontent-%COMP%]   .privacy[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1QkFBQTtFQUNBLDBDQUFBO0FBQUo7QUFhQTtFQUNJLGdCQUFBO0FBWEo7QUFjQTtFQUNJLG1CQWZXO0VBZ0JYLFlBYkk7QUFFUjtBQWFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFwQlk7RUFxQlosV0FqQmE7QUFPakI7QUFZQTtFQUNJLFdBcEJhO0VBcUJiLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBN0JZO0FBb0JoQjtBQVdBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQXJDWTtBQTJCaEI7QUFXSTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBdENTO0VBdUNULGdCQUFBO0VBQ0EsaUJBQUE7QUFUUjtBQVdJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0E5Q1M7QUFxQ2pCO0FBV0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQXBEUztFQXFEVCxhQUFBO0FBVFI7QUFXSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBM0RTO0VBNERULGlCQUFBO0FBVFI7QUFXSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FqRVM7RUFrRVQsWUFBQTtFQUVBLGNBMUVEO0VBMkVDLGtCQUFBO0FBVlI7QUFZSTtFQUNJLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQTNFUztFQTRFVCxpQkFBQTtBQVZSO0FBWUk7RUFDSSxTQUFBO0FBVlI7QUFZSTtFQUlJLFNBQUE7QUFiUjtBQVVRO0VBQ0ksV0FBQTtBQVJaO0FBWUk7RUFJSSxVQUFBO0FBYlI7QUFVUTtFQUNJLFdBQUE7QUFSWjtBQWFBO0VBRVE7SUFDSSxVQUFBO0VBWFY7RUFhTTtJQUNJLFVBQUE7RUFYVjtFQWFNO0lBQ0ksWUFBQTtJQUNBLFNBQUE7RUFYVjtFQWFNO0lBQ0ksV0FBQTtFQVhWO0FBQ0Y7QUFjQTtFQUVRO0lBQ0ksVUFBQTtFQWJWO0VBZU07SUFDSSxVQUFBO0VBYlY7RUFlTTtJQUNJLFdBQUE7RUFiVjtBQUNGO0FBZ0JBO0VBRVE7SUFDSSxXQUFBO0VBZlY7QUFDRjtBQWtCQTtFQUVRO0lBQ0ksV0FBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFqQlY7QUFDRjtBQW9CQTtFQUVRO0lBQ0ksV0FBQTtFQW5CVjtBQUNGO0FBc0JBO0VBRVE7SUFDSSxhQUFBO0VBckJWO0FBQ0Y7QUF3QkE7RUFDSTtJQXNCSSxhQXJMWTtFQTBJbEI7RUFzQk07SUFDSSxjQUFBO0VBcEJWO0VBc0JNO0lBQ0ksYUFBQTtFQXBCVjtFQXNCTTtJQUNJLGFBQUE7RUFwQlY7RUFzQk07SUFDSSxTQUFBO0VBcEJWO0VBc0JNO0lBQ0ksTUFBQTtFQXBCVjtFQXNCTTtJQUNJLFNBQUE7RUFwQlY7RUFzQk07SUFDSSxTQUFBO0VBcEJWOztFQXdCRTtJQUNJLGFBeExZO0VBbUtsQjs7RUF1QkU7SUFDSSxVQTNMWTtFQXVLbEI7QUFDRjtBQXNCQTtFQUVRO0lBQ0ksVUFBQTtFQXJCVjtBQUNGO0FBMEJBO0VBQ0k7SUFnQkksYUF4Tlk7RUFpTGxCO0VBd0JNO0lBQ0ksYUFBQTtFQXRCVjtFQXdCTTtJQUNJLFNBQUE7RUF0QlY7RUF3Qk07SUFDSSxNQUFBO0VBdEJWO0VBd0JNO0lBQ0ksU0FBQTtFQXRCVjtFQXdCTTtJQUNJLFNBQUE7RUF0QlY7O0VBMEJFO0lBQ0ksYUEzTlk7RUFvTWxCOztFQXlCRTtJQUNJLFVBOU5ZO0VBd01sQjtBQUNGO0FBd0JJO0VBRVE7SUFDSSxTQUFBO0lBQ0Esa0JBQUE7RUF2QmQ7QUFDRjtBQTBCSTtFQUVRO0lBQ0ksU0FBQTtJQUNBLGlCQUFBO0VBekJkO0FBQ0Y7QUFtQ0E7RUFDSSwrQkFBQTtBQWpDSjtBQTBDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUdBLGdCQUFBO0VBQ0EsaUJBNVFJO0VBOFFKLGtCQUFBO0FBMUNKO0FBNENJO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBRUEsY0FyUkQ7RUFzUkMsa0JBQUE7RUFDQSxVQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBNUNSO0FBOENJO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBN0NSO0FBZ0RBO0VBQ0k7SUFFSSxhQUFBO0VBOUNOO0VBK0NNO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUE3Q1Y7RUErQ007SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQTdDVjtBQUNGO0FBdURBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxpQkF2VUk7RUEwVUosYUFBQTtFQUNBLGtCQUFBO0FBekRKO0FBMERJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBRUEsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFuVkE7RUFvVkEsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBekRSO0FBMERRO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBeERaO0FBMERRO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUF4RFo7QUEwRFE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQXhEWjtBQTJESTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUExRFI7QUE4REE7RUFFUTtJQUNJLFdBQUE7RUE1RFY7RUErRE07SUFFSSxrQkFBQTtJQUNBLFdBQUE7RUE5RFY7QUFDRjtBQWtFQTtFQUVRO0lBQ0ksWUFBQTtFQWpFVjtFQWtFVTtJQUNJLGFBQUE7SUFDQSx3QkFBQTtFQWhFZDtBQUNGO0FBcUVBO0VBQ0kseUJBQUE7QUFuRUo7QUFxRUE7RUFDSSx5QkFBQTtBQWxFSjtBQXdFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFFQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxhQUFBO0FBdkVKO0FBeUVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQXZFUjtBQXdFUTtFQUNJLFlBQUE7QUF0RVo7QUF3RVE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXRFWjtBQStFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFyY1c7RUFzY1gsWUFuY0k7QUF1WFI7QUE2RUk7RUFDSSxhQUFBO0FBM0VSO0FBNkVJO0VBQ0ksaUJBQUE7QUEzRVI7QUE4RUE7RUFFUTtJQUNJLFVBQUE7RUE1RVY7QUFDRjtBQStFQTtFQUNJO0lBQ0ksYUFBQTtFQTdFTjtFQThFTTtJQUNJLG9CQUFBO0VBNUVWO0FBQ0Y7QUFzRkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBbmVXO0VBb2VYLG1CQTNlVztFQTRlWCxZQXplSTtFQTBlSixrQkFBQTtFQUNBLGFBQUE7QUFwRko7QUE0RkE7RUFDSSxpQkFwZkk7RUFzZkosa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUExRko7QUEyRkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBekZSO0FBMkZJO0VBRUksY0FBQTtBQTFGUjtBQStGSTtFQUVJLGNBQUE7QUE5RlI7QUFtR0k7RUFFSSxjQUFBO0FBbEdSO0FBdUdJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtBQXRHUjtBQXdHUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBdEdaO0FBeUdJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtBQXhHUjtBQTBHUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBeEdaO0FBNEdBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBekdKO0FBMEdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUF4R1I7QUF5R1E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXZHWjtBQXlHUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FBdkdaO0FBd0dZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQXRHaEI7QUF5R1E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUF2R1o7QUF3R1k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUF0R2hCO0FBMEdJO0VBQ0ksMkNBQUE7QUF4R1I7QUEwR0k7RUFDSSxzQ0FBQTtBQXhHUjtBQTJHQTtFQUVRO0lBQ0ksYUFBQTtFQXpHVjtFQTBHVTtJQUNJLGNBQUE7RUF4R2Q7RUE0R1U7SUFDSSxjQUFBO0VBMUdkO0VBOEdVO0lBQ0ksYUFBQTtFQTVHZDtFQWlITTtJQUNJLFNBQUE7RUEvR1Y7RUFpSE07SUFDSSxjQUFBO0VBL0dWO0VBaUhNO0lBQ0ksY0FBQTtFQS9HVjtBQUNGO0FBa0hBO0VBRVE7SUFDSSxhQUFBO0VBakhWO0VBa0hVO0lBQ0ksY0FBQTtFQWhIZDtFQW9IVTtJQUNJLGFBQUE7RUFsSGQ7RUFzSFU7SUFDSSxhQUFBO0VBcEhkO0VBeUhNO0lBQ0ksU0FBQTtFQXZIVjtFQXlITTtJQUNJLGNBQUE7RUF2SFY7RUF5SE07SUFDSSxjQUFBO0VBdkhWO0FBQ0Y7QUFtSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUdBLGFBQUE7RUFFQSxtQkF6ckJXO0FBcWpCZjtBQXlJSTtFQUNJLFlBQUE7QUF2SVI7QUF5SUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUF2SVI7QUF5SUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBdklSO0FBd0lRO0VBQ0ksWUFBQTtBQXRJWjtBQTBJSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUF4SVI7QUF5SVE7RUFDSSxZQUFBO0FBdklaO0FBMElJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXhJUjtBQTBJUTtFQUNJLFlBQUE7QUF4SVo7QUE0SUE7RUFFUTtJQUNJLFVBQUE7RUExSVY7RUE0SU07SUFDSSxXQUFBO0VBMUlWO0FBQ0Y7QUE2SUE7RUFFUTtJQUNJLGFBQUE7RUE1SVY7QUFDRjtBQWdKQTtFQUVRO0lBQ0ksVUFBQTtFQS9JVjtFQWlKTTtJQUNJLFdBQUE7RUEvSVY7QUFDRjtBQWtKQTtFQUVRO0lBQ0ksYUFBQTtFQWpKVjtFQW1KTTtJQUNJLGFBQUE7RUFqSlY7QUFDRjtBQW9KQTtFQUVRO0lBQ0ksYUFBQTtFQW5KVjtBQUNGO0FBc0pBO0VBRVE7SUFDSSxXQUFBO0VBckpWO0VBdUpNO0lBQ0ksWUFBQTtFQXJKVjtBQUNGO0FBd0pBO0VBRVE7SUFDSSxXQUFBO0VBdkpWO0VBeUpNO0lBQ0ksWUFBQTtFQXZKVjtBQUNGO0FBaUtBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxtQkE1eUJHO0VBNnlCSCxZQTV5Qkk7RUE4eUJKLGtCQUFBO0FBaktKO0FBbUtJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtBQWxLUjtBQW9LUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBbEtaO0FBcUtJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtBQXBLUjtBQXNLUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBcEtaO0FBd0tJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQUFBO0VBSUEsa0JBQUE7QUExS1I7QUEyS1E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUF6S1o7QUE0S1E7RUFDSSxrQkFBQTtBQTFLWjtBQTRLUTtFQUNJLGFBQUE7QUExS1o7QUE2S1E7RUFDSSxjQUFBO0FBM0taO0FBNktRO0VBQ0ksY0FBQTtBQTNLWjtBQTZLUTtFQUNJLGNBQUE7QUEzS1o7QUErS0E7RUFHWTtJQUNJLGNBQUE7RUE5S2Q7RUFnTFU7SUFDSSxjQUFBO0VBOUtkO0VBZ0xVO0lBQ0ksYUFBQTtFQTlLZDtFQWlMTTtJQUNJLGNBQUE7RUEvS1Y7RUFpTE07SUFDSSxjQUFBO0VBL0tWO0FBQ0Y7QUFrTEE7RUFHWTtJQUNJLGNBQUE7RUFsTGQ7RUFvTFU7SUFDSSxhQUFBO0VBbExkO0VBb0xVO0lBQ0ksYUFBQTtFQWxMZDtFQXFMTTtJQUNJLGNBQUE7RUFuTFY7RUFxTE07SUFDSSxjQUFBO0VBbkxWO0FBQ0Y7QUFzTEE7RUFFUTtJQUNJLFVBQUE7RUFyTFY7QUFDRjtBQThMQTtFQU9JLGFBQUE7RUFDQSxtQkFoN0JXO0VBaTdCWCxZQTk2Qkk7RUFnN0JKLGtCQUFBO0VBQ0EsYUFBQTtBQW5NSjtBQTJNQTtFQU9JLGFBQUE7RUFDQSxtQkFsOEJHO0VBbThCSCxZQWw4Qkk7RUFvOEJKLGtCQUFBO0VBQ0EsYUFBQTtBQS9NSjtBQXVOQTtFQUNJLGlCQTk4Qkk7QUEwdkJSO0FBcU5JO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFuTlI7QUEwTkE7RUFDSSxhQXQ5Qlk7RUF1OUJaLGtCQUFBO0VBQ0EsV0FBQTtBQXZOSjtBQXdOSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUF0TlI7QUF5Tkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBdk5SIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0lTT0NQRVVSJzsgXHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy90dGYvSVNPQ1BFVVIudHRmJyk7IFxyXG59XHJcblxyXG4kbGlnaHQteWVsbG93OiByZ2IoMjU1LDE5NiwxNCk7XHJcbiR5ZWxsb3c6IHJnYigyMTIsMTU4LDc0KTtcclxuJGRhcms6IHJnYig0Nyw2OSw5MSk7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRoZWlnaHQtaGVhZGVyOiAxNTBweDtcclxuJGhlaWdodC1oZWFkZXItbWluOiAxMDBweDtcclxuJGhlaWdodC1mb290ZXI6IDIwMHB4O1xyXG4kaGVpZ2h0LWJsb2NrOiA4MDBweDtcclxuJHotaW5kZXgtaGVhZGVyOiAxMDtcclxuXHJcbmgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5oZWFkZXIsIC5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LXllbGxvdztcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbn1cclxuLmhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMTk2LDE0KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogJGhlaWdodC1oZWFkZXI7XHJcbiAgICB6LWluZGV4OiAkei1pbmRleC1oZWFkZXI7XHJcbn1cclxuLmhyIHtcclxuICAgIHotaW5kZXg6ICR6LWluZGV4LWhlYWRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAkaGVpZ2h0LWhlYWRlcjtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQtaGVhZGVyO1xyXG4gICAgLm9vbyB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIGxlZnQ6IDExNXB4O1xyXG4gICAgICAgIHotaW5kZXg6ICR6LWluZGV4LWhlYWRlcjtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMTAwcHg7XHJcbiAgICAgICAgei1pbmRleDogJHotaW5kZXgtaGVhZGVyO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tbWluaSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgIHotaW5kZXg6ICR6LWluZGV4LWhlYWRlcjtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmZvdW5kYXRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDEyMHB4O1xyXG4gICAgICAgIGxlZnQ6IDExNXB4O1xyXG4gICAgICAgIHotaW5kZXg6ICR6LWluZGV4LWhlYWRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICB6LWluZGV4OiAkei1pbmRleC1oZWFkZXI7XHJcbiAgICAgICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgICAgIC8vIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgICAgIGNvbG9yOiAkZGFyaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucGhvbmUsIC53aGF0c2FwcCwgLmVtYWlsIHtcclxuICAgICAgICBmb250LWZhbWlseTogSVNPQ1BFVVIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHJpZ2h0OiAxMDBweDtcclxuICAgICAgICB6LWluZGV4OiAkei1pbmRleC1oZWFkZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICAuZW1haWwge1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5waG9uZSB7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgfSAgICBcclxuICAgIC53aGF0c2FwcCB7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9wOiAxMTBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTM3NXB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICAub29vLCAuZm91bmRhdGlvbiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgbGVmdDogNTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlcnZpY2VzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDQwcHg7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLnBob25lLCAud2hhdHNhcHAsIC5lbWFpbCB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA2MHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICAub29vLCAuZm91bmRhdGlvbiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBob25lLCAud2hhdHNhcHAsIC5lbWFpbCB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgIGxlZnQ6MjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLnNlcnZpY2VzIHtcclxuICAgICAgICAgICAgbGVmdDozMDBweDtcclxuICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjllbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICAuc2VydmljZXMge1xyXG4gICAgICAgICAgICBsZWZ0OjI3MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLmxvZ28tbWluaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vb28sIC5mb3VuZGF0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlcnZpY2VzIHtcclxuICAgICAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZW1haWwge1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waG9uZSB7XHJcbiAgICAgICAgICAgIHRvcDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndoYXRzYXBwIHtcclxuICAgICAgICAgICAgdG9wOiA3NXB4O1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIGhlaWdodDogJGhlaWdodC1oZWFkZXItbWluO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQtaGVhZGVyLW1pbjtcclxuICAgIH1cclxuICAgIC5ociB7XHJcbiAgICAgICAgdG9wOiAkaGVpZ2h0LWhlYWRlci1taW47XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICAubG9nby1taW5pIHtcclxuICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vINCy0YvRgdC+0YLQsFxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICAub29vLCAuZm91bmRhdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVtYWlsIHtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGhvbmUge1xyXG4gICAgICAgICAgICB0b3A6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53aGF0c2FwcCB7XHJcbiAgICAgICAgICAgIHRvcDogNzVweDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQtaGVhZGVyLW1pbjtcclxuICAgIH1cclxuICAgIC5oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0LWhlYWRlci1taW47XHJcbiAgICB9XHJcbiAgICAuaHIge1xyXG4gICAgICAgIHRvcDogJGhlaWdodC1oZWFkZXItbWluO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzc1cHgpIHtcclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgLnNlcnZpY2VzIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjllbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAuc2VydmljZXMge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyDQn9GA0LjQstGP0LfQutCwINGE0YPRgtC10YDQsCDQuiDQv9C+0LTQstCw0LvRgyA6KVxyXG4ubWFpbiB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzUwcHgpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLnRvcFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTg5LCAxODksIDE4OSwgMC4zKTtcclxuICAgICAgICAvLyBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIGNvbG9yOiAkZGFyaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMjBweDtcclxuICAgICAgICAvLyBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMjksIDEyOSwgMTI5LCAwLjQpO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAwcHg7XHJcbiAgICAgICAgLy8gbGVmdDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLnRvcCB7XHJcbiAgICAgICAgLy8gb3ZlcmZsb3c6dmlzaWJsZTtcclxuICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgdG9wOiA0MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC5jb25zdWx0YXRpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5jb25zdWx0YXRpb24ge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICRsaWdodC15ZWxsb3c7XHJcbiAgICAvLyBoZWlnaHQ6ICRoZWlnaHQtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC42KTtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDcsNjksOTEsMC44KTtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgaDEsIGg0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAyMHB4IDAgMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMjBweCAwIDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluc3RydW1lbnQge1xyXG4gICAgICAgIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuY29uc3VsdGF0aW9uIHtcclxuICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDYwMHB4O1xyXG4gICAgICAgICAgICAvLyB0b3A6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5zdHJ1bWVudCB7XHJcbiAgICAgICAgICAgIC8vIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogNDAwcHg7XHJcbiAgICAgICAgICAgIC8vIHRvcDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmNvbnN1bHRhdGlvbiB7XHJcbiAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIGlucHV0LCBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAxNXB4IDAgMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDJBOTQ4O1xyXG59ICBcclxuLm5nLWludmFsaWQ6bm90KC5mb3JtKSAge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2E5NDQ0MjtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyBUT0FTVCAtINCy0YHQv9C70YvQstCw0Y7RidC10LUg0YHQvtC+0LHRidC10L3QuNC1XHJcbi50b2FzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNzUsIDE3NSwgMTc1LCAwLjgpO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgLmJsb2NrIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLndoeS1hcmUtd2VcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi53aHktYXJlLXdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LXllbGxvdztcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC53aHktYXJlLXdlIHsgXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAud2h5LWFyZS13ZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLnByb21vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4ucHJvbW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogJGhlaWdodC1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICRsaWdodC15ZWxsb3c7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLmFib3V0LXBob3RvXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4uYWJvdXQtcGhvdG8ge1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogJGxpZ2h0LXllbGxvdztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgICNjYXJkMSB7XHJcbiAgICAgICAgLy8gY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC8vIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgICAgIC8vIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAjY2FyZDIge1xyXG4gICAgICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAvLyB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IC41cztcclxuICAgICAgICAvLyBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgI2NhcmQzIHtcclxuICAgICAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLy8gdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgICAgLy8gb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIC5hcnJvdy1sZWZ0IHtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIC5hcnJvdy1yaWdodCB7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi5hYm91dC1waG90byAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgLmZhY2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmFjZS5mYWNlMSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhY2UuZmFjZTIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgICAgICAgIC5jb250ZW50IHAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZDpob3ZlciAuZmFjZS5mYWNlMSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgIH1cclxuICAgIC5jYXJkOmhvdmVyIC5mYWNlLmZhY2UyIHtcdFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVYKDBkZWcpO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHsgICAgXHJcbiAgICAuYWJvdXQtcGhvdG8ge1xyXG4gICAgICAgIC5jb250YWluZXIgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvLyB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvLyB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIC8vIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFycm93LWxlZnQgeyAgICBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnJvdy1yaWdodCB7ICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7ICAgIFxyXG4gICAgLmFib3V0LXBob3RvIHsgICAgICAgIFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvLyB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIC8vIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAvLyB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAvLyBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICB0b3A6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnJvdy1sZWZ0IHsgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctcmlnaHQgeyAgICBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAucmVhc29uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4ucmVhc29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAvLyBoZWlnaHQ6ICRoZWlnaHQtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LXllbGxvdztcclxuXHJcbiAgICAvLyB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAvLyBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAucmVhc29uLWltZy1vbmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgbGVmdDogMTAwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmVhc29uLWltZy10d28ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC01MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWFzb24taW1nLXRocmVlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMDBweDtcclxuICAgICAgICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgLnJlYXNvbiB7XHJcbiAgICAgICAgLnJlYXNvbi1pbWctb25lIHtcclxuICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlYXNvbi1pbWctdGhyZWUge1xyXG4gICAgICAgICAgICByaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAucmVhc29uIHtcclxuICAgICAgICAucmVhc29uLXRocmVlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgLnJlYXNvbiB7XHJcbiAgICAgICAgLnJlYXNvbi1pbWctb25lIHtcclxuICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlYXNvbi1pbWctdGhyZWUge1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAucmVhc29uIHtcclxuICAgICAgICAucmVhc29uLWltZy1vbmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVhc29uLWltZy10aHJlZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLnJlYXNvbiB7XHJcbiAgICAgICAgLnJlYXNvbi10d28ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAucmVhc29uIHtcclxuICAgICAgICAucmVhc29uLWltZy1vbmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAyMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlYXNvbi1pbWctdGhyZWUge1xyXG4gICAgICAgICAgICByaWdodDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIC5yZWFzb24ge1xyXG4gICAgICAgIC5yZWFzb24taW1nLW9uZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVhc29uLWltZy10aHJlZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAuYWJvdXQtdGV4dFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLmFib3V0LXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZGFyaztcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5hcnJvdy1sZWZ0IHtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIC5hcnJvdy1yaWdodCB7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgLy8gaGVpZ2h0OiAkaGVpZ2h0LWJsb2NrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICAvLyBsZWZ0OiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0ZXh0MSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjdGV4dDIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgI3RleHQzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgeyAgICBcclxuICAgIC5hYm91dC10ZXh0IHtcclxuICAgICAgICAuYm94IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgI3RleHQxIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN0ZXh0MiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGV4dDMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctbGVmdCB7ICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFycm93LXJpZ2h0IHsgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTI1cHgpIHtcclxuICAgIC5hYm91dC10ZXh0IHtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgI3RleHQxIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAjdGV4dDIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAjdGV4dDMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctbGVmdCB7ICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFycm93LXJpZ2h0IHsgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuYWJvdXQtdGV4dCB7XHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAuc2NoZW1lXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4uc2NoZW1lIHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAvLyBoZWlnaHQ6ICRoZWlnaHQtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LXllbGxvdztcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcblxyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLnJldmlld3NcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5yZXZpZXdzIHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAvLyBoZWlnaHQ6ICRoZWlnaHQtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogJGRhcms7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgXHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAubWFwXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4ubWFwIHtcclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIGlmcmFtZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQtZm9vdGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuZGlyZWN0b3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnByaXZhY3kge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
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
    } }, styles: [".logo[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 10px;\n  right: 20px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  opacity: 0.5;\n}\n.back[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  background: #ffc40e;\n  opacity: 0.7;\n  font-size: 2rem;\n  border-radius: 5px;\n  border: 1px solid #ffc40e;\n}\n.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n@media (max-width: 800px) {\n  .back[_ngcontent-%COMP%] {\n    top: 63px;\n  }\n}\n@media (max-width: 529px) {\n  .back[_ngcontent-%COMP%] {\n    top: 25px;\n    left: 5px;\n  }\n}\n@media (max-width: 415px) {\n  .back[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    left: 5px;\n  }\n  .back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n@media (max-width: 340px) {\n  .back[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n.privacy[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n}\n.privacy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n}\n.privacy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px 40px;\n}\n@media (max-width: 700px) {\n  .logo[_ngcontent-%COMP%] {\n    top: 60px;\n  }\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n}\n@media (max-width: 500px) {\n  .logo[_ngcontent-%COMP%] {\n    top: 10px;\n  }\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByaXZhY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFESjtBQUVJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFBUjtBQUdBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBZlc7RUFnQlgsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFFQTtFQUNJO0lBQ0ksU0FBQTtFQUNOO0FBQ0Y7QUFDQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFNBQUE7RUFDTjtBQUNGO0FBQ0E7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsU0FBQTtFQUNOO0VBQU07SUFDSSxrQkFBQTtFQUVWO0FBQ0Y7QUFDQTtFQUNJO0lBQ0ksaUJBQUE7RUFDTjtFQUFNO0lBQ0ksa0JBQUE7RUFFVjtBQUNGO0FBRUE7RUFDSSxvQkFBQTtBQUFKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFDUjtBQUNJO0VBQ0ksaUJBQUE7QUFDUjtBQUVBO0VBQ0k7SUFDSSxTQUFBO0VBQ047RUFBTTtJQUNJLFdBQUE7RUFFVjtBQUNGO0FBQ0E7RUFDSTtJQUNJLFNBQUE7RUFDTjtFQUFNO0lBQ0ksV0FBQTtFQUVWO0FBQ0YiLCJmaWxlIjoicHJpdmFjeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaWdodC15ZWxsb3c6IHJnYigyNTUsMTk2LDE0KTtcclxuXHJcbi5sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG59XHJcbi5iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQteWVsbG93O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LXllbGxvdztcclxuICAgIGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5iYWNrIHtcclxuICAgICAgICB0b3A6IDYzcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyOXB4KSB7XHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICAgIGxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDE1cHgpIHtcclxuICAgIC5iYWNrIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcml2YWN5IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgaDEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDQwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
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
        _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
                    _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"]
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
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privacy/privacy.component */ "TsVY");







const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    { path: 'privacy', component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyComponent"] },
    { path: 'api', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
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