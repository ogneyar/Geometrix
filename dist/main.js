(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\VSCode\Geometrix\src\main.ts */"zUnb");


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
        console.log(this.form.value.name);
        this.get(this.form.value.name, this.form.value.phone, this.form.value.email);
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])], decls: 168, vars: 2, consts: [[1, "header-background"], [1, "header"], [1, "services"], [1, "ooo"], [1, "foundation"], ["src", "assets/l.png", "alt", "logo", 1, "logo"], ["src", "assets/logo.png", "alt", "logo", 1, "logo-mini"], [1, "email"], [1, "phone"], ["src", "assets/img/social/phone.png", "alt", "phone"], [1, "whatsapp"], ["src", "assets/img/social/wa.png", "alt", "phone"], [1, "hr"], [1, "main"], [1, "top"], ["src", "assets/top++.jpg", "alt", "header"], [1, "promo"], [1, "consultation"], [1, "form", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F*", "formControlName", "name", "required", "", "maxlength", "20"], ["type", "text", "placeholder", "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D*", "formControlName", "phone", "required", "", "maxlength", "20"], ["type", "text", "placeholder", "\u0412\u0430\u0448 Email", "formControlName", "email", "maxlength", "30"], ["type", "submit", "id", "submit", 1, "btn", 3, "disabled"], ["src", "assets/instrument.png", "alt", "instrument", 1, "instrument"], ["id", "fon", 1, "fon"], [1, "why-are-we"], [1, "about-photo"], [1, "container"], [1, "card", "card1"], [1, "face", "face1"], [1, "content"], ["src", "assets/about-photo-one.jpg", "alt", "one"], [1, "face", "face2"], [1, "card", "card2"], ["src", "assets/about-photo-two.jpg", "alt", "two"], [1, "card", "card3"], ["src", "assets/about-photo-three.jpg", "alt", "three"], [1, "reason"], [1, "reason-one"], [1, "reason-two"], [1, "reason-three"], [1, "reason-img-one"], ["src", "assets/reason-img-one.jpg", "alt", "reason-img-one"], [1, "reason-img-two"], ["src", "assets/reason-img-two.jpg", "alt", "reason-img-two"], [1, "reason-img-three"], ["src", "assets/reason-img-three.jpg", "alt", "reason-img-three"], [1, "about-text"], [1, "box"], [1, "about-text-one"], [1, "about-text-two"], [1, "about-text-three"], [1, "scheme"], [1, "reviews"], [1, "map"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2277.71671512554!2d39.723912792176!3d47.24246509347906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9b3ff95edd7%3A0x3df435d2d9858d18!2z0YPQuy4g0J3QsNC90YHQtdC90LAsIDE0ONCQLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0KDQvtGB0YLQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMzQ0MDM4!5e0!3m2!1sru!2sru!4v1609084672156!5m2!1sru!2sru"), "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0"], [1, "footer"], [1, "director"], [1, "privacy"], ["href", "privacy"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u00A0\u00A0\u00A0\u041E\u041E\u041E \u00AB\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u043A\u0441\u00BB \u2014 \u0442\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u043E-\u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432 2012 \u0433. \u0433\u0440\u0443\u043F\u043F\u043E\u0439 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432 \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430 \u201C\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u043D\u0430\u044F \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u044F\u201D \u0420\u043E\u0441\u0442\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u00A0\u00A0\u00A0\u041C\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u0432\u0441\u0435 \u0432\u0438\u0434\u044B \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0433. \u0420\u043E\u0441\u0442\u043E\u0432\u0430-\u043D\u0430-\u0414\u043E\u043D\u0443 \u0438 \u0420\u043E\u0441\u0442\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u00A0\u00A0\u00A0\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C, \u0441\u0432\u044F\u0437\u0430\u043D\u0430 \u0441 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E-\u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439 \u043F\u043E\u0434 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u00A0\u00A0\u00A0\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439 \u0441\u0442\u0440\u043E\u0433\u043E \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438, \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u00A0\u00A0\u00A0\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u0431\u043E\u0440\u043E\u0432 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0430\u0448\u0435\u0439 \u0444\u0438\u0440\u043C\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u043B\u044E\u0431\u043E\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0443.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0\u00A0\u00A0\u0412 \u0447\u0438\u0441\u043B\u043E \u043D\u0430\u0448\u0438\u0445 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u0432 \u0432\u0445\u043E\u0434\u044F\u0442 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F, \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u044B\u0435 \u0438 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0447\u0430\u0441\u0442\u043D\u044B\u0435 \u043B\u0438\u0446\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u044A\u0435\u043C\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u044A\u0435\u043C\u043A\u0430 \u2014 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432\u0438\u0434 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442. \u041F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044C \u0432 \u043D\u0435\u0439 \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u0435\u0442 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0442\u043E\u043F\u043E\u043A\u0430\u0440\u0442, \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u044F\u0445, \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043B\u0430\u043D\u043E\u0432 \u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0447\u0435\u0440\u0442\u0435\u0436\u0435\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043D\u043E\u0433\u043E \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u0413\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u043F\u043E\u0434 \u0441\u043E\u0431\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u043F\u043E \u0440\u0430\u0437\u0431\u0438\u0432\u043A\u0435 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0435. \u041D\u0430\u0448\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u043B\u043D\u043E \u0438 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u044F\u0442 \u0432\u0441\u044E \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E \u043D\u0430 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0437\u0430 \u043E\u0441\u0430\u0434\u043A\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F \u0437\u0430 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u043C\u0438 \u0438\u043B\u0438 \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433 \u0437\u0434\u0430\u043D\u0438\u0439 \u0438 \u0441\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0430\u0441\u043D\u044B\u0445 \u0432\u0435\u043B\u0438\u0447\u0438\u043D \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0439 \u0438 \u043E\u043F\u043E\u043B\u0437\u043D\u0435\u0432\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0447\u0438\u043D \u0438\u0445 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0438\u043C\u0435\u043D\u043D\u043E \u043C\u044B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u041F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u041F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u041F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u0412\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u041C\u0435\u0436\u0435\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442 \u0431\u044B\u0441\u0442\u0440\u043E\u0435, \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043C\u0435\u0436\u0435\u0432\u0430\u043D\u0438\u0435 \u0437\u0435\u043C\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043A\u0430: \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u0435 \u0433\u0440\u0430\u043D\u0438\u0446, \u0440\u0430\u0437\u0434\u0435\u043B, \u043F\u0435\u0440\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435, \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435, \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0435\u043C\u0435\u043B\u044C\u043D\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043A\u043E\u0432. \u041E\u043F\u044B\u0442 \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u043D\u0430\u0448\u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u044E\u0442 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u0441\u0435\u0445 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0435\u0439.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u0422\u043E\u043F\u043E\u043F\u043B\u0430\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u044A\u0435\u043C\u043A\u0430 \u043C\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u0438 \u2013 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0432 \u0441\u043E\u0441\u0442\u0430\u0432\u0435 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u043D\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043B\u0430\u043D\u043E\u0432 \u043C\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u0442\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u0430\u0440\u0442 \u0434\u043B\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0438\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044F\u043C\u0438, \u0432\u043E\u0435\u043D\u043D\u044B\u043C\u0438, \u0442\u0443\u0440\u0438\u0441\u0442\u0430\u043C\u0438 \u0438 \u0442.\u0434. \u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0442\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u044A\u0435\u043C\u043A\u0438, \u043A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u043E, \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u0435 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C \u044D\u0442\u043E\u0433\u043E \u0432\u0438\u0434\u0430 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u043E\u043F\u043E\u043F\u043B\u0430\u043D \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\u0413\u0435\u043E\u0434\u0435\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u043F\u043E\u0434 \u0441\u043E\u0431\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u043F\u043E \u0440\u0430\u0437\u0431\u0438\u0432\u043A\u0435 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0435. \u00AB\u0413\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u043A\u0441\u00BB \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0432\u0430\u043C \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u0435\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E. \u0412\u0441\u0435 \u0437\u0430\u0431\u043E\u0442\u044B \u043E \u0433\u0435\u043E\u0434\u0435\u0437\u0438\u0438 \u043C\u044B \u0432\u043E\u0437\u044C\u043C\u0435\u043C \u043D\u0430 \u0441\u0435\u0431\u044F!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "iframe", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "footer", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u041A\u043E\u0447\u043A\u0438\u043D \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0415\u0432\u0433\u0435\u043D\u044C\u0435\u0432\u0438\u0447");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\u00A0\u00A0\u00A0344010, \u0420\u0424, \u0420\u041E, \u0433.\u0420\u043E\u0441\u0442\u043E\u0432-\u043D\u0430-\u0414\u043E\u043D\u0443, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u00A0\u00A0\u00A0\u0443\u043B.\u041D\u0430\u043D\u0441\u0435\u043D\u0430, \u0434.148\u0430, \u043E\u0444\u0438\u0441 109");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u041E\u0413\u0420\u041D: 1126194004100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u0418\u041D\u041D: 6168059100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: ["@font-face {\n  font-family: \"ISOCPEUR\";\n  src: url(\"/assets/fonts/ttf/ISOCPEUR.ttf\");\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: 200;\n}\n.header[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n  background: #ffc40e;\n  color: white;\n}\n.header-background[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background: #ffc40e;\n  opacity: 1;\n  width: 100%;\n  height: 150px;\n  z-index: 10;\n}\n.hr[_ngcontent-%COMP%] {\n  z-index: 10;\n  width: 100%;\n  border-top: 1px solid white;\n  border-bottom: 1px solid black;\n  position: fixed;\n  top: 150px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 150px;\n}\n.header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 8px;\n  left: 115px;\n  z-index: 10;\n  font-size: large;\n  font-size: 1.5rem;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 250px;\n  position: fixed;\n  left: 100px;\n  z-index: 10;\n}\n.header[_ngcontent-%COMP%]   .logo-mini[_ngcontent-%COMP%] {\n  width: 100px;\n  position: fixed;\n  left: 30px;\n  z-index: 10;\n  display: none;\n}\n.header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 120px;\n  left: 115px;\n  z-index: 10;\n  font-size: 1.5rem;\n}\n.header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50px;\n  z-index: 10;\n  width: 650px;\n  color: lightseagreen;\n  text-align: center;\n}\n.header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-family: ISOCPEUR, Arial, Helvetica, sans-serif;\n  position: fixed;\n  right: 100px;\n  z-index: 10;\n  font-size: 1.5rem;\n}\n.header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  top: 10px;\n}\n.header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  top: 50px;\n}\n.header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  top: 110px;\n}\n.header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n@media (max-width: 1375px) {\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    left: 70px;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    left: 55px;\n  }\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    width: 400px;\n    top: 40px;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    right: 55px;\n  }\n}\n@media (max-width: 1060px) {\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    left: 25px;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n}\n@media (max-width: 900px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    left: 250px;\n  }\n}\n@media (max-width: 820px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    left: 300px;\n    top: 15px;\n    width: 200px;\n    line-height: 0.9em;\n  }\n}\n@media (max-width: 750px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    left: 270px;\n  }\n}\n@media (max-width: 690px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 500px) {\n  .header[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .header[_ngcontent-%COMP%]   .logo-mini[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 30px;\n  }\n  .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    top: 25px;\n  }\n  .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n    top: 75px;\n  }\n\n  .header-background[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n\n  .hr[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n}\n@media (max-width: 500px) {\n  .header[_ngcontent-%COMP%]   .logo-mini[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n}\n@media (max-height: 700px) {\n  .header[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .header[_ngcontent-%COMP%]   .ooo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .foundation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 30px;\n  }\n  .header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    top: 25px;\n  }\n  .header[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n    top: 75px;\n  }\n\n  .header-background[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n\n  .hr[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n}\n@media (max-height: 700px) and (max-width: 1375px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 20px;\n    line-height: 0.9em;\n  }\n}\n@media (max-height: 700px) and (max-width: 820px) {\n  .header[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    top: 10px;\n    font-size: 1.5rem;\n  }\n}\n.main[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 350px);\n}\n.top[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  background: white;\n  position: relative;\n}\n.top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  background: rgba(189, 189, 189, 0.3);\n  color: black;\n  position: absolute;\n  top: 120px;\n  font-size: 2.5rem;\n  border-radius: 10px;\n  border: 2px solid;\n  text-align: center;\n  margin: 15px;\n}\n.top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  background: rgba(129, 129, 129, 0.4);\n  color: white;\n  position: absolute;\n  top: 500px;\n  font-size: 3rem;\n  border-radius: 10px;\n  border: 2px solid;\n  text-align: center;\n  margin: 15px;\n}\n@media (max-width: 450px) {\n  .top[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n  .top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    top: 80px;\n    font-size: 2rem;\n  }\n  .top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    top: 400px;\n    font-size: 2rem;\n  }\n}\n.consultation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  height: 600px;\n  position: relative;\n}\n.consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  background: rgba(158, 158, 158, 0.6);\n  width: 300px;\n  height: 450px;\n  padding: 20px;\n}\n.consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 5px 20px 0 20px;\n}\n.consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 20px;\n  margin: 20px 20px 0 20px;\n}\n.consultation[_ngcontent-%COMP%]   .instrument[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50px;\n  bottom: 0;\n}\n.consultation[_ngcontent-%COMP%]   .fon[_ngcontent-%COMP%] {\n  z-index: 1000;\n  background: white;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  visibility: hidden;\n}\n@media (min-width: 1000px) {\n  .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    left: 600px;\n  }\n  .consultation[_ngcontent-%COMP%]   .instrument[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 400px;\n  }\n}\n@media (max-width: 400px) {\n  .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .consultation[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 15px;\n    margin: 15px 15px 0 15px;\n  }\n}\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border: 2px solid #42A948;\n}\n.ng-invalid[_ngcontent-%COMP%] {\n  border: 2px solid #a94442;\n}\n.why-are-we[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px;\n  min-height: 400px;\n  background: #ffc40e;\n  color: white;\n}\n.why-are-we[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.why-are-we[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n@media (min-width: 1000px) {\n  .why-are-we[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n@media (max-width: 500px) {\n  .why-are-we[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .why-are-we[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}\n.promo[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 800px;\n  background: #ffc40e;\n  color: white;\n  visibility: hidden;\n  display: none;\n}\n.about-photo[_ngcontent-%COMP%] {\n  background: white;\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.about-photo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100px;\n  font-size: 2rem;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 600px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 200px;\n  margin: 20px;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: 0.5s;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  transform-origin: bottom;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5em;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-origin: top;\n  transform: translateY(100%) rotateX(90deg);\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 1rem;\n  padding: 10px;\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face1[_ngcontent-%COMP%] {\n  transform: translateY(-100%) rotateX(90deg);\n}\n.about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face2[_ngcontent-%COMP%] {\n  transform: translateY(0) rotateX(0deg);\n}\n@media (max-width: 1000px) {\n  .card3[_ngcontent-%COMP%] {\n    visibility: hidden;\n    display: none;\n  }\n\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  .about-photo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    top: 50px;\n  }\n}\n@media (max-width: 700px) {\n  .card2[_ngcontent-%COMP%] {\n    visibility: hidden;\n    display: none;\n  }\n\n  .about-photo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .about-photo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    top: 25px;\n  }\n}\n.reason[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 400px;\n  background: #ffc40e;\n}\n.reason[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.reason[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 100px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-two[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -50px;\n  z-index: 1;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-two[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 100px;\n}\n.reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n@media (max-width: 750px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 50px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 50px;\n  }\n}\n@media (max-width: 700px) {\n  .reason[_ngcontent-%COMP%]   .reason-three[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 650px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n}\n@media (max-width: 550px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 500px) {\n  .reason[_ngcontent-%COMP%]   .reason-two[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 1000px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 200px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 200px;\n  }\n}\n@media (min-width: 1500px) {\n  .reason[_ngcontent-%COMP%]   .reason-img-one[_ngcontent-%COMP%] {\n    left: 300px;\n  }\n  .reason[_ngcontent-%COMP%]   .reason-img-three[_ngcontent-%COMP%] {\n    right: 300px;\n  }\n}\n.about-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 600px;\n  background: #2f455b;\n  color: white;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 80px;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n@media (max-width: 700px) {\n  .about-text-three[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 500px) {\n  .about-text-two[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 1000px) {\n  .about-text[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.scheme[_ngcontent-%COMP%] {\n  height: 400px;\n  background: #ffc40e;\n  color: white;\n  visibility: hidden;\n  display: none;\n}\n.reviews[_ngcontent-%COMP%] {\n  height: 400px;\n  background: #2f455b;\n  color: white;\n  visibility: hidden;\n  display: none;\n}\n.map[_ngcontent-%COMP%] {\n  background: white;\n}\n.map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n}\n.footer[_ngcontent-%COMP%] {\n  height: 200px;\n  position: relative;\n  width: 100%;\n}\n.footer[_ngcontent-%COMP%]   .director[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  top: 10px;\n}\n.footer[_ngcontent-%COMP%]   .privacy[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1QkFBQTtFQUNBLDBDQUFBO0FBQUo7QUFhQTtFQUNJLGdCQUFBO0FBWEo7QUFjQTtFQUNJLG1CQWZXO0VBZ0JYLFlBYkk7QUFFUjtBQWFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFwQlk7RUFxQlosV0FqQmE7QUFPakI7QUFZQTtFQUNJLFdBcEJhO0VBcUJiLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBN0JZO0FBb0JoQjtBQVdBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQXJDWTtBQTJCaEI7QUFXSTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBdENTO0VBdUNULGdCQUFBO0VBQ0EsaUJBQUE7QUFUUjtBQVdJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0E5Q1M7QUFxQ2pCO0FBV0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQXBEUztFQXFEVCxhQUFBO0FBVFI7QUFXSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBM0RTO0VBNERULGlCQUFBO0FBVFI7QUFXSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FqRVM7RUFrRVQsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFUUjtBQVdJO0VBQ0ksbURBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBMUVTO0VBMkVULGlCQUFBO0FBVFI7QUFXSTtFQUNJLFNBQUE7QUFUUjtBQVdJO0VBSUksU0FBQTtBQVpSO0FBU1E7RUFDSSxXQUFBO0FBUFo7QUFXSTtFQUlJLFVBQUE7QUFaUjtBQVNRO0VBQ0ksV0FBQTtBQVBaO0FBWUE7RUFFUTtJQUNJLFVBQUE7RUFWVjtFQVlNO0lBQ0ksVUFBQTtFQVZWO0VBWU07SUFDSSxZQUFBO0lBQ0EsU0FBQTtFQVZWO0VBWU07SUFDSSxXQUFBO0VBVlY7QUFDRjtBQWFBO0VBRVE7SUFDSSxVQUFBO0VBWlY7RUFjTTtJQUNJLFVBQUE7RUFaVjtFQWNNO0lBQ0ksV0FBQTtFQVpWO0FBQ0Y7QUFlQTtFQUVRO0lBQ0ksV0FBQTtFQWRWO0FBQ0Y7QUFpQkE7RUFFUTtJQUNJLFdBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBaEJWO0FBQ0Y7QUFtQkE7RUFFUTtJQUNJLFdBQUE7RUFsQlY7QUFDRjtBQXFCQTtFQUVRO0lBQ0ksYUFBQTtFQXBCVjtBQUNGO0FBdUJBO0VBQ0k7SUFzQkksYUFwTFk7RUEwSWxCO0VBcUJNO0lBQ0ksY0FBQTtFQW5CVjtFQXFCTTtJQUNJLGFBQUE7RUFuQlY7RUFxQk07SUFDSSxhQUFBO0VBbkJWO0VBcUJNO0lBQ0ksU0FBQTtFQW5CVjtFQXFCTTtJQUNJLE1BQUE7RUFuQlY7RUFxQk07SUFDSSxTQUFBO0VBbkJWO0VBcUJNO0lBQ0ksU0FBQTtFQW5CVjs7RUF1QkU7SUFDSSxhQXZMWTtFQW1LbEI7O0VBc0JFO0lBQ0ksVUExTFk7RUF1S2xCO0FBQ0Y7QUFxQkE7RUFFUTtJQUNJLFVBQUE7RUFwQlY7QUFDRjtBQXlCQTtFQUNJO0lBZ0JJLGFBdk5ZO0VBaUxsQjtFQXVCTTtJQUNJLGFBQUE7RUFyQlY7RUF1Qk07SUFDSSxTQUFBO0VBckJWO0VBdUJNO0lBQ0ksTUFBQTtFQXJCVjtFQXVCTTtJQUNJLFNBQUE7RUFyQlY7RUF1Qk07SUFDSSxTQUFBO0VBckJWOztFQXlCRTtJQUNJLGFBMU5ZO0VBb01sQjs7RUF3QkU7SUFDSSxVQTdOWTtFQXdNbEI7QUFDRjtBQXVCSTtFQUVRO0lBQ0ksU0FBQTtJQUNBLGtCQUFBO0VBdEJkO0FBQ0Y7QUF5Qkk7RUFFUTtJQUNJLFNBQUE7SUFDQSxpQkFBQTtFQXhCZDtBQUNGO0FBa0NBO0VBQ0ksK0JBQUE7QUFoQ0o7QUF5Q0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFHQSxnQkFBQTtFQUNBLGlCQTNRSTtFQTZRSixrQkFBQTtBQXpDSjtBQTJDSTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUExQ1I7QUE0Q0k7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUEzQ1I7QUE4Q0E7RUFDSTtJQUVJLGFBQUE7RUE1Q047RUE2Q007SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQTNDVjtFQTZDTTtJQUNJLFVBQUE7SUFDQSxlQUFBO0VBM0NWO0FBQ0Y7QUFxREE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQXJVSTtFQXdVSixhQUFBO0VBQ0Esa0JBQUE7QUF2REo7QUF3REk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFHQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQXhEUjtBQXlEUTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQXZEWjtBQXlEUTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FBdkRaO0FBNERJO0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQTNEUjtBQTZESTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBM0RSO0FBOERBO0VBRVE7SUFDSSxXQUFBO0VBNURWO0VBK0RNO0lBRUksa0JBQUE7SUFDQSxXQUFBO0VBOURWO0FBQ0Y7QUFrRUE7RUFFUTtJQUNJLFlBQUE7RUFqRVY7RUFrRVU7SUFDSSxhQUFBO0lBQ0Esd0JBQUE7RUFoRWQ7QUFDRjtBQXFFQTtFQUNJLHlCQUFBO0FBbkVKO0FBcUVBO0VBQ0kseUJBQUE7QUFsRUo7QUEyRUE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUdBLGlCQUFBO0VBQ0EsbUJBcmFXO0VBc2FYLFlBbmFJO0FBd1ZSO0FBK0VJO0VBR0ksYUFBQTtBQS9FUjtBQWlGSTtFQUNJLGlCQUFBO0FBL0VSO0FBbUZBO0VBRVE7SUFDSSxVQUFBO0VBakZWO0FBQ0Y7QUFvRkE7RUFDSTtJQUNJLGFBQUE7RUFsRk47RUFtRk07SUFDSSxvQkFBQTtFQWpGVjtBQUNGO0FBMkZBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQTFjVztFQTJjWCxtQkFsZFc7RUFtZFgsWUFoZEk7RUFpZEosa0JBQUE7RUFDQSxhQUFBO0FBMUZKO0FBa0dBO0VBQ0ksaUJBM2RJO0VBNmRKLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBaEdKO0FBaUdJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQS9GUjtBQWtHQTtFQUNJLGFBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWhHSjtBQWlHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBL0ZSO0FBZ0dRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUE5Rlo7QUFnR1E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQTlGWjtBQStGWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUE3RmhCO0FBZ0dRO0VBRUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0FBL0ZaO0FBZ0dZO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBOUZoQjtBQW1HSTtFQUNJLDJDQUFBO0FBakdSO0FBbUdJO0VBQ0ksc0NBQUE7QUFqR1I7QUFvR0E7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtFQWpHTjs7RUFvR007SUFDSSxhQUFBO0VBakdWO0VBbUdNO0lBQ0ksU0FBQTtFQWpHVjtBQUNGO0FBb0dBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLGFBQUE7RUFsR047O0VBcUdNO0lBQ0ksYUFBQTtFQWxHVjtFQW9HTTtJQUNJLFNBQUE7RUFsR1Y7QUFDRjtBQTRHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBR0EsYUFBQTtFQUVBLG1CQTlrQlc7QUFpZWY7QUFrSEk7RUFDSSxZQUFBO0FBaEhSO0FBa0hJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBaEhSO0FBa0hJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWhIUjtBQWlIUTtFQUNJLFlBQUE7QUEvR1o7QUFtSEk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBakhSO0FBa0hRO0VBQ0ksWUFBQTtBQWhIWjtBQW1ISTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFqSFI7QUFtSFE7RUFDSSxZQUFBO0FBakhaO0FBcUhBO0VBRVE7SUFDSSxVQUFBO0VBbkhWO0VBcUhNO0lBQ0ksV0FBQTtFQW5IVjtBQUNGO0FBc0hBO0VBRVE7SUFDSSxhQUFBO0VBckhWO0FBQ0Y7QUF5SEE7RUFFUTtJQUNJLFVBQUE7RUF4SFY7RUEwSE07SUFDSSxXQUFBO0VBeEhWO0FBQ0Y7QUEySEE7RUFFUTtJQUNJLGFBQUE7RUExSFY7RUE0SE07SUFDSSxhQUFBO0VBMUhWO0FBQ0Y7QUE2SEE7RUFFUTtJQUNJLGFBQUE7RUE1SFY7QUFDRjtBQStIQTtFQUVRO0lBQ0ksV0FBQTtFQTlIVjtFQWdJTTtJQUNJLFlBQUE7RUE5SFY7QUFDRjtBQWlJQTtFQUVRO0lBQ0ksV0FBQTtFQWhJVjtFQWtJTTtJQUNJLFlBQUE7RUFoSVY7QUFDRjtBQTBJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBanNCRztFQWtzQkgsWUFqc0JJO0FBd2pCUjtBQTJJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsYUFBQTtFQUlBLGtCQUFBO0FBN0lSO0FBOElRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBNUlaO0FBK0lRO0VBQ0ksa0JBQUE7QUE3SVo7QUErSVE7RUFDSSxhQUFBO0FBN0laO0FBaUpBO0VBQ0k7SUFDSSxhQUFBO0VBOUlOO0FBQ0Y7QUFnSkE7RUFDSTtJQUNJLGFBQUE7RUE5SU47QUFDRjtBQWdKQTtFQUVRO0lBQ0ksVUFBQTtFQS9JVjtBQUNGO0FBd0pBO0VBT0ksYUFBQTtFQUNBLG1CQTV2Qlc7RUE2dkJYLFlBMXZCSTtFQTR2Qkosa0JBQUE7RUFDQSxhQUFBO0FBN0pKO0FBcUtBO0VBT0ksYUFBQTtFQUNBLG1CQTl3Qkc7RUErd0JILFlBOXdCSTtFQWd4Qkosa0JBQUE7RUFDQSxhQUFBO0FBektKO0FBaUxBO0VBQ0ksaUJBMXhCSTtBQTRtQlI7QUErS0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQTdLUjtBQW9MQTtFQUNJLGFBbHlCWTtFQW15Qlosa0JBQUE7RUFDQSxXQUFBO0FBakxKO0FBa0xJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQWhMUjtBQW1MSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFqTFIiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSVNPQ1BFVVInOyBcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL3R0Zi9JU09DUEVVUi50dGYnKTsgXHJcbn1cclxuXHJcbiRsaWdodC15ZWxsb3c6IHJnYigyNTUsMTk2LDE0KTtcclxuJHllbGxvdzogcmdiKDIxMiwxNTgsNzQpO1xyXG4kZGFyazogcmdiKDQ3LDY5LDkxKTtcclxuJHdoaXRlOiB3aGl0ZTtcclxuJGhlaWdodC1oZWFkZXI6IDE1MHB4O1xyXG4kaGVpZ2h0LWhlYWRlci1taW46IDEwMHB4O1xyXG4kaGVpZ2h0LWZvb3RlcjogMjAwcHg7XHJcbiRoZWlnaHQtYmxvY2s6IDgwMHB4O1xyXG4kei1pbmRleC1oZWFkZXI6IDEwO1xyXG5cclxuaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLmhlYWRlciwgLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQteWVsbG93O1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxufVxyXG4uaGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwxOTYsMTQpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0LWhlYWRlcjtcclxuICAgIHotaW5kZXg6ICR6LWluZGV4LWhlYWRlcjtcclxufVxyXG4uaHIge1xyXG4gICAgei1pbmRleDogJHotaW5kZXgtaGVhZGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6ICRoZWlnaHQtaGVhZGVyO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGhlaWdodDogJGhlaWdodC1oZWFkZXI7XHJcbiAgICAub29vIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgbGVmdDogMTE1cHg7XHJcbiAgICAgICAgei1pbmRleDogJHotaW5kZXgtaGVhZGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiAxMDBweDtcclxuICAgICAgICB6LWluZGV4OiAkei1pbmRleC1oZWFkZXI7XHJcbiAgICB9XHJcbiAgICAubG9nby1taW5pIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGxlZnQ6IDMwcHg7XHJcbiAgICAgICAgei1pbmRleDogJHotaW5kZXgtaGVhZGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZm91bmRhdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMTIwcHg7XHJcbiAgICAgICAgbGVmdDogMTE1cHg7XHJcbiAgICAgICAgei1pbmRleDogJHotaW5kZXgtaGVhZGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLnNlcnZpY2VzIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIHotaW5kZXg6ICR6LWluZGV4LWhlYWRlcjtcclxuICAgICAgICB3aWR0aDogNjUwcHg7XHJcbiAgICAgICAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnBob25lLCAud2hhdHNhcHAsIC5lbWFpbCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IElTT0NQRVVSLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICByaWdodDogMTAwcHg7XHJcbiAgICAgICAgei1pbmRleDogJHotaW5kZXgtaGVhZGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLmVtYWlsIHtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucGhvbmUge1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgIH0gICAgXHJcbiAgICAud2hhdHNhcHAge1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvcDogMTEwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNzVweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLm9vbywgLmZvdW5kYXRpb24ge1xyXG4gICAgICAgICAgICBsZWZ0OiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDU1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIC5waG9uZSwgLndoYXRzYXBwLCAuZW1haWwge1xyXG4gICAgICAgICAgICByaWdodDogNTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNjBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLm9vbywgLmZvdW5kYXRpb24ge1xyXG4gICAgICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waG9uZSwgLndoYXRzYXBwLCAuZW1haWwge1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICAuc2VydmljZXMge1xyXG4gICAgICAgICAgICBsZWZ0OjI1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgIGxlZnQ6MzAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC45ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLnNlcnZpY2VzIHtcclxuICAgICAgICAgICAgbGVmdDoyNzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY5MHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICAuc2VydmljZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIC5sb2dvLW1pbmkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub29vLCAuZm91bmRhdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVtYWlsIHtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGhvbmUge1xyXG4gICAgICAgICAgICB0b3A6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53aGF0c2FwcCB7XHJcbiAgICAgICAgICAgIHRvcDogNzVweDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQtaGVhZGVyLW1pbjtcclxuICAgIH1cclxuICAgIC5oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0LWhlYWRlci1taW47XHJcbiAgICB9XHJcbiAgICAuaHIge1xyXG4gICAgICAgIHRvcDogJGhlaWdodC1oZWFkZXItbWluO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLmxvZ28tbWluaSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyDQstGL0YHQvtGC0LBcclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA3MDBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLm9vbywgLmZvdW5kYXRpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VydmljZXMge1xyXG4gICAgICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lbWFpbCB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBob25lIHtcclxuICAgICAgICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAud2hhdHNhcHAge1xyXG4gICAgICAgICAgICB0b3A6IDc1cHg7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0LWhlYWRlci1taW47XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgICAgIGhlaWdodDogJGhlaWdodC1oZWFkZXItbWluO1xyXG4gICAgfVxyXG4gICAgLmhyIHtcclxuICAgICAgICB0b3A6ICRoZWlnaHQtaGVhZGVyLW1pbjtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTM3NXB4KSB7XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC45ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgLnNlcnZpY2VzIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g0J/RgNC40LLRj9C30LrQsCDRhNGD0YLQtdGA0LAg0Log0L/QvtC00LLQsNC70YMgOilcclxuLm1haW4ge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC50b3BcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4OSwgMTg5LCAxODksIDAuMyk7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMjBweDtcclxuICAgICAgICAvLyBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMjksIDEyOSwgMTI5LCAwLjQpO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAwcHg7XHJcbiAgICAgICAgLy8gbGVmdDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLnRvcCB7XHJcbiAgICAgICAgLy8gb3ZlcmZsb3c6dmlzaWJsZTtcclxuICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgdG9wOiA0MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC5jb25zdWx0YXRpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5jb25zdWx0YXRpb24ge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICRsaWdodC15ZWxsb3c7XHJcbiAgICAvLyBoZWlnaHQ6ICRoZWlnaHQtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIGxlZnQ6IDIwMHB4O1xyXG4gICAgICAgIC8vIHRvcDogMTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjYpO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgaDEsIGg0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAyMHB4IDAgMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMjBweCAwIDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluc3RydW1lbnQge1xyXG4gICAgICAgIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAuZm9uIHtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmNvbnN1bHRhdGlvbiB7XHJcbiAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICBsZWZ0OiA2MDBweDtcclxuICAgICAgICAgICAgLy8gdG9wOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluc3RydW1lbnQge1xyXG4gICAgICAgICAgICAvLyB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAvLyB0b3A6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5jb25zdWx0YXRpb24ge1xyXG4gICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBpbnB1dCwgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQyQTk0ODtcclxufSAgXHJcbi5uZy1pbnZhbGlkICB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLndoeS1hcmUtd2VcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi53aHktYXJlLXdlIHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG5cclxuICAgIC8vIGhlaWdodDogJGhlaWdodC1ibG9jaztcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LXllbGxvdztcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcblxyXG4vLyAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4vLyAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIGgxIHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC53aHktYXJlLXdlIHsgXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAud2h5LWFyZS13ZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLnByb21vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4ucHJvbW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQteWVsbG93O1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC5hYm91dC1waG90b1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLmFib3V0LXBob3RvIHtcclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICRsaWdodC15ZWxsb3c7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbn1cclxuLmFib3V0LXBob3RvIC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyMzYsIDIzNiwgMC41KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAuZmFjZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYWNlLmZhY2UxIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmFjZS5mYWNlMiB7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgICAgICAgICAuY29udGVudCBwIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZDpob3ZlciAuZmFjZS5mYWNlMSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgIH1cclxuICAgIC5jYXJkOmhvdmVyIC5mYWNlLmZhY2UyIHtcdFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVYKDBkZWcpO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5jYXJkMyB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtcGhvdG8ge1xyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5jYXJkMiB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtcGhvdG8ge1xyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC5yZWFzb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5yZWFzb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC8vIGhlaWdodDogJGhlaWdodC1ibG9jaztcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQteWVsbG93O1xyXG5cclxuICAgIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC8vIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgIH1cclxuICAgIC5yZWFzb24taW1nLW9uZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgICBsZWZ0OiAxMDBweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWFzb24taW1nLXR3byB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlYXNvbi1pbWctdGhyZWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAucmVhc29uIHtcclxuICAgICAgICAucmVhc29uLWltZy1vbmUge1xyXG4gICAgICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVhc29uLWltZy10aHJlZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5yZWFzb24ge1xyXG4gICAgICAgIC5yZWFzb24tdGhyZWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAucmVhc29uIHtcclxuICAgICAgICAucmVhc29uLWltZy1vbmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVhc29uLWltZy10aHJlZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5yZWFzb24ge1xyXG4gICAgICAgIC5yZWFzb24taW1nLW9uZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWFzb24taW1nLXRocmVlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAucmVhc29uIHtcclxuICAgICAgICAucmVhc29uLXR3byB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5yZWFzb24ge1xyXG4gICAgICAgIC5yZWFzb24taW1nLW9uZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVhc29uLWltZy10aHJlZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgLnJlYXNvbiB7XHJcbiAgICAgICAgLnJlYXNvbi1pbWctb25lIHtcclxuICAgICAgICAgICAgbGVmdDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWFzb24taW1nLXRocmVlIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC5hYm91dC10ZXh0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4uYWJvdXQtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICRkYXJrO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAuYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgICAgIC8vIGhlaWdodDogJGhlaWdodC1ibG9jaztcclxuICAgICAgICBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogODBweDtcclxuICAgICAgICAgICAgLy8gbGVmdDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmFib3V0LXRleHQtdGhyZWUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuYWJvdXQtdGV4dC10d28ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmFib3V0LXRleHQge1xyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLnNjaGVtZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLnNjaGVtZSB7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLy8gaGVpZ2h0OiAkaGVpZ2h0LWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICRsaWdodC15ZWxsb3c7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC5yZXZpZXdzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4ucmV2aWV3cyB7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLy8gaGVpZ2h0OiAkaGVpZ2h0LWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICRkYXJrO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIFxyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLm1hcFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuLm1hcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICBpZnJhbWUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi5mb290ZXIge1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0LWZvb3RlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmRpcmVjdG9yIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIC5wcml2YWN5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
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