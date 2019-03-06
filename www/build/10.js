webpackJsonp([10],{

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_default_button_default_button_module__ = __webpack_require__(846);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_default_button_default_button_module__["a" /* DefaultButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
            ],
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultButtonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default_button__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DefaultButtonModule = /** @class */ (function () {
    function DefaultButtonModule() {
    }
    DefaultButtonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__default_button__["a" /* DefaultButtonComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__default_button__["a" /* DefaultButtonComponent */]]
        })
    ], DefaultButtonModule);
    return DefaultButtonModule;
}());

//# sourceMappingURL=default-button.module.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultButtonComponent = /** @class */ (function () {
    function DefaultButtonComponent() {
        console.log('Hello DefaultButtonComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DefaultButtonComponent.prototype, "text", void 0);
    DefaultButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'default-button',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/components/default-button/default-button.html"*/'<div>{{text}}</div>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/components/default-button/default-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DefaultButtonComponent);
    return DefaultButtonComponent;
}());

//# sourceMappingURL=default-button.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constant__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, constants, user, utility, firebaseAnalytics, platform, formBuilder, navParams) {
        this.navCtrl = navCtrl;
        this.constants = constants;
        this.user = user;
        this.utility = utility;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.resetPasswordForm = this.formBuilder.group({
            email: [this.navParams.get('email'), [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(__WEBPACK_IMPORTED_MODULE_1__app_constant__["a" /* EmailRegExp */])]],
        });
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Forgot Password" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
    };
    ForgotPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        this.user.resetPassword(this.email.value).subscribe(function (resp) {
            console.log(resp);
            _this.utility.showToast({ message: resp.message });
            _this.navCtrl.setRoot(_this.constants.PAGES.LOGIN_SIGNUP, { isLogin: true, email: _this.email.value });
        }, function (err) {
            console.log(err);
        });
    };
    Object.defineProperty(ForgotPasswordPage.prototype, "email", {
        get: function () {
            return this.resetPasswordForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/forgot-password/forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding-right padding-left no-bounce>\n  <div padding-right padding-left>\n    <img alt="" class="back-arrow-custom" navPop src="assets/icon/back-arrow.svg">\n    <div class="title">{{constants.LANGS.LABEL_FORGOT_PASSWORD}}</div>\n    <div class="sub-title">{{constants.LANGS.PAGE_LABEL_FORGOT_PASSWORD_DETAIL}}</div>\n    <form class="connect-form" [formGroup]="resetPasswordForm">\n      <ion-item class="form-item">\n        <ion-input type="email" autocorrect="on" autocomplete="on" name="email" formControlName="email" [placeholder]="constants.LANGS.LABEL_EMAIL_ADDRESS"></ion-input>\n      </ion-item>\n      <div class="field-validation-error" *ngIf="email.dirty && !email.valid">\n        {{constants.ERRORS.INVALID_EMAIL}}\n      </div>\n\n      <default-button class="connect-button" [attr.disabled]="!email.valid" block text="{{constants.LANGS.LABEL_SUBMIT}}" (click)="resetPassword()"></default-button>\n      <!-- <button class="connect-button" type="submit" (click)="connect()" ion-button\n          block>Sign Up</button> -->\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__["a" /* UtilitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ })

});
//# sourceMappingURL=10.js.map