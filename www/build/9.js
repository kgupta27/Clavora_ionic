webpackJsonp([9],{

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignupPageModule", function() { return LoginSignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_signup__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_default_button_default_button_module__ = __webpack_require__(846);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginSignupPageModule = /** @class */ (function () {
    function LoginSignupPageModule() {
    }
    LoginSignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_signup__["a" /* LoginSignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_default_button_default_button_module__["a" /* DefaultButtonModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login_signup__["a" /* LoginSignupPage */])
            ],
        })
    ], LoginSignupPageModule);
    return LoginSignupPageModule;
}());

//# sourceMappingURL=login-signup.module.js.map

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

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constant__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_facebook_facebook__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_google_google__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_utilities_utilities__ = __webpack_require__(45);
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
 * Generated class for the LoginSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginSignupPage = /** @class */ (function () {
    function LoginSignupPage(navCtrl, navParams, user, utility, formBuilder, constants, firebaseAnalytics, platform, facebook, google) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.utility = utility;
        this.formBuilder = formBuilder;
        this.constants = constants;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.facebook = facebook;
        this.google = google;
        this.isLogin = false;
        //check if the page is opening to login rather than sign up(default)
        this.isLogin = navParams.get("isLogin");
        this.connectForm = this.formBuilder.group({
            email: [this.navParams.get('email'), [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].email, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].pattern(__WEBPACK_IMPORTED_MODULE_1__app_constant__["a" /* EmailRegExp */])]],
            password: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].pattern(__WEBPACK_IMPORTED_MODULE_1__app_constant__["c" /* PasswordRegExp */]),
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(15)]]
        });
    }
    LoginSignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginSignupPage');
    };
    // Used for facebook login
    LoginSignupPage.prototype.doFacebookLogin = function () {
        var _this = this;
        console.log('doFacebookLogin');
        this.facebook.getFacebookUser()
            .then(function (data) {
            console.log('doFacebookLogin data', data);
            if (data != null)
                _this.socialLoginSuccess(data);
            else
                _this.facebook.doFacebookLogin()
                    .then(function (data) { return _this.socialLoginSuccess(data); }, function (err) { return console.log("Facebook Login error", err); });
        });
    };
    LoginSignupPage.prototype.ionViewWillEnter = function () {
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: this.isLogin ? "Login" : "Sign Up" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        if (!this.isLogin) {
            this.connectForm.reset();
        }
        else {
            this.connectForm.reset();
            this.connectForm = this.formBuilder.group({
                email: [this.navParams.get('email'), [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].email, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].pattern(__WEBPACK_IMPORTED_MODULE_1__app_constant__["a" /* EmailRegExp */])]],
                password: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required,
                        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(15)]]
            });
        }
    };
    // Used for google login
    LoginSignupPage.prototype.doGoogleLogin = function () {
        var _this = this;
        console.log('doGoogleLogin');
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        this.google.getGoogleUser().then(function (data) {
            console.log('doGoogleLogin data', data);
            if (data != null)
                _this.google.doGoogleLogin()
                    .then(function (data) { return _this.socialLoginSuccess(data); }, function (err) { return console.log("Google Login error", err); });
            else
                _this.google.trySilentLogin()
                    .then(function (data) { return _this.socialLoginSuccess(data); }, function (error) {
                    console.log('doGoogleLogin error');
                    //we don't have the user data so we will ask him to log in
                    _this.google.doGoogleLogin()
                        .then(function (data) { return _this.socialLoginSuccess(data); }, function (err) { return console.log("Google Login error", err); });
                });
        });
    };
    LoginSignupPage.prototype.connect = function () {
        var _this = this;
        if (!this.isLogin) {
            this.navCtrl.push(this.constants.PAGES.TERMS_N_CONDITION, { isTerms: true, isSignup: true, email: this.email.value, password: this.password.value });
            // this.user.signUp(this.email.value, this.password.value).subscribe((resp: any) => {
            //   console.log(resp);
            //   this.utility.showToast({ message: resp.message });
            //   this.navCtrl.push(this.constants.PAGES.LOGIN_SIGNUP, { isLogin: !this.isLogin, email: this.email.value });
            //   this.connectForm.reset()
            // }, err => {
            //   console.log(err);
            // });
        }
        else {
            this.user.login(this.email.value, this.password.value).subscribe(function (resp) {
                console.log(resp);
                _this.navCtrl.setRoot(_this.user.getHomePage());
            }, function (err) {
                console.log(err);
            });
        }
    };
    LoginSignupPage.prototype.openTnC = function (isTerms) {
        this.navCtrl.push(this.constants.PAGES.TERMS_N_CONDITION, { isTerms: isTerms });
    };
    LoginSignupPage.prototype.openForgetPassword = function () {
        this.navCtrl.push(this.constants.PAGES.FORGOT_PASSWORD, { email: this.email.valid ? this.email.value : '' });
    };
    LoginSignupPage.prototype.togglePage = function () {
        this.navCtrl.setRoot(this.constants.PAGES.LOGIN_SIGNUP, { isLogin: !this.isLogin });
    };
    Object.defineProperty(LoginSignupPage.prototype, "email", {
        get: function () {
            return this.connectForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginSignupPage.prototype, "password", {
        get: function () {
            return this.connectForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginSignupPage.prototype.socialLoginSuccess = function (socialInfo) {
        var _this = this;
        console.log("socialLoginSuccess", JSON.stringify(socialInfo));
        if (socialInfo.email) {
            this.user.socialLogin(socialInfo)
                .subscribe(function (resp) {
                console.log("socialLoginSuccess response");
                console.log(resp);
                if (_this.user.userData.isTermAccepted == 0)
                    _this.navCtrl.setRoot(_this.constants.PAGES.TERMS_N_CONDITION, { isTerms: true, isSocial: true });
                else
                    _this.navCtrl.setRoot(_this.user.getHomePage());
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.utility.showAlert({
                // title: "Alert!",
                subTitle: this.constants.ERRORS.SOCIAL_LOGIN_EMAIL_MISSING,
                buttons: ['Ok']
            });
            switch (socialInfo.source) {
                case 'google':
                    this.google.doGoogleLogout();
                    this.google.removeGoogleUser();
                    break;
                case 'facebook':
                    this.facebook.doFacebookLogout();
                    this.facebook.removeFacebookUser();
                    break;
            }
        }
    };
    LoginSignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-login-signup',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/login-signup/login-signup.html"*/'<!--\n  Generated template for the LoginSignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding-right padding-left no-bounce>\n  <div padding-right padding-left>\n    <img alt="" class="back-arrow-custom" *ngIf="isLogin" (click)="togglePage()" src="assets/icon/back-arrow.svg">\n    <div class="title">{{isLogin?constants.LANGS.PAGE_LABEL_LOGIN:constants.LANGS.LABEL_SIGN_UP}}</div>\n    <div class="sub-title">{{isLogin?constants.LANGS.PAGE_LABEL_LOGIN_DETAIL:constants.LANGS.PAGE_LABEL_SIGN_UP_DETAIL}}</div>\n    <form class="connect-form" [formGroup]="connectForm">\n      <ion-item class="form-item">\n        <ion-input type="email" autocorrect="on" autocomplete="on" name="email" formControlName="email" [placeholder]="constants.LANGS.LABEL_EMAIL_ADDRESS"></ion-input>\n      </ion-item>\n      <div class="field-validation-error" *ngIf="email.dirty && !email.valid">\n        {{constants.ERRORS.INVALID_EMAIL}}\n      </div>\n      <ion-item class="form-item">\n        <ion-input type="password" name="password" formControlName="password" maxlength="18" [placeholder]="constants.LANGS.LABEL_PASSWORD"></ion-input>\n      </ion-item>\n      <div class="field-validation-error" *ngIf="password.dirty && !password.valid">\n        {{constants.ERRORS.INVALID_PASSWORD}}\n      </div>\n      <default-button tappable (click)="connect()" class="connect-button" [attr.disabled]="!email.valid || !password.valid" block text="{{isLogin?constants.LANGS.LABEL_LOGIN:constants.LANGS.LABEL_SIGN_UP}}"></default-button>\n      <!-- <button class="connect-button" type="submit" (click)="connect()" ion-button\n        block>Sign Up</button> -->\n    </form>\n    <div class="social-buttons">\n      <div class="social-button facebook" tappable (click)="doFacebookLogin()">\n        <img alt="" class="fb-icon" src="assets/imgs/login-signup/fb.svg"> {{constants.LANGS.LABEL_FACEBOOK}}\n      </div>\n      <div class="social-button google" tappable (click)="doGoogleLogin()">\n        <img alt="" class="google-icon" src="assets/imgs/login-signup/google.png"> {{constants.LANGS.LABEL_GOOGLE}}\n      </div>\n    </div>\n  </div>\n\n  <div class="tnc" *ngIf="!isLogin">\n    <!-- <div>{{constants.LANGS.PAGE_LABEL_ACCEPT_TNC_1}}</div> -->\n    <div>\n      <a (click)="openTnC(true)">{{constants.LANGS.PAGE_LABEL_ACCEPT_TNC_2}}</a> {{constants.LANGS.PAGE_LABEL_ACCEPT_TNC_3}}\n      <a (click)="openTnC(false)">{{constants.LANGS.PAGE_LABEL_ACCEPT_TNC_4}}</a>\n    </div>\n  </div>\n  <div class="tnc forgot-pass" *ngIf="isLogin" (click)="openForgetPassword()">\n\n    <a>{{constants.LANGS.LABEL_FORGOT_PASSWORD}}?</a>\n  </div>\n\n  <div class="login-subtitle">{{isLogin?constants.LANGS.PAGE_LABEL_DONT_HAVE_ACCOUNT:constants.LANGS.PAGE_LABEL_ALREADY_HAVE_ACCOUNT}}\n    <a (click)="togglePage()">{{isLogin?constants.LANGS.LABEL_SIGN_UP:constants.LANGS.LABEL_LOGIN}}</a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/login-signup/login-signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_utilities_utilities__["a" /* UtilitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__providers_facebook_facebook__["a" /* FacebookProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_google_google__["a" /* GoogleProvider */]])
    ], LoginSignupPage);
    return LoginSignupPage;
}());

//# sourceMappingURL=login-signup.js.map

/***/ })

});
//# sourceMappingURL=9.js.map