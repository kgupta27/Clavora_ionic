webpackJsonp([12],{

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_default_button_default_button_module__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password__ = __webpack_require__(864);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__components_default_button_default_button_module__["a" /* DefaultButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__change_password__["a" /* ChangePasswordPage */]),
            ],
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

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

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constant__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, constants, firebaseAnalytics, platform, formBuilder, user, utility, navParams) {
        this.navCtrl = navCtrl;
        this.constants = constants;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.user = user;
        this.utility = utility;
        this.navParams = navParams;
        this.resetPasswordForm = formBuilder.group({
            oldPassword: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(__WEBPACK_IMPORTED_MODULE_1__app_constant__["c" /* PasswordRegExp */]), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(15)]],
            newPassword: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(__WEBPACK_IMPORTED_MODULE_1__app_constant__["c" /* PasswordRegExp */]),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(15)]],
            confirmPassword: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(15)]]
        });
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Password Change" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
    };
    ChangePasswordPage.prototype.setPassword = function () {
        var _this = this;
        this.user.changePassword(this.oldPassword.value, this.newPassword.value, this.confirmPassword.value).subscribe(function (resp) {
            _this.utility.showToast({
                message: resp.message
            });
            _this.navCtrl.pop();
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(ChangePasswordPage.prototype, "oldPassword", {
        get: function () {
            return this.resetPasswordForm.get('oldPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordPage.prototype, "newPassword", {
        get: function () {
            return this.resetPasswordForm.get('newPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordPage.prototype, "confirmPassword", {
        get: function () {
            return this.resetPasswordForm.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/change-password/change-password.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{constants.LANGS.PAGE_TITLE_CHANGE_PASSWORD}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form padding class="connect-form" [formGroup]="resetPasswordForm">\n    <ion-item class="form-item">\n      <ion-input type="password" name="oldPassword" formControlName="oldPassword" [placeholder]="constants.LANGS.LABEL_CURRENT_PASSWORD" class="error"></ion-input>\n    </ion-item>\n    <div class="field-validation-error" *ngIf="oldPassword.dirty && !oldPassword.valid">\n      {{constants.ERRORS.INVALID_PASSWORD}}\n    </div>\n    <ion-item class="form-item">\n      <ion-input type="password" name="newPassword" formControlName="newPassword" maxlength="18" [placeholder]="constants.LANGS.LABEL_NEW_PASSWORD"></ion-input>\n    </ion-item>\n    <div class="field-validation-error" *ngIf="newPassword.dirty && !newPassword.valid">\n      {{constants.ERRORS.INVALID_PASSWORD}}\n    </div>\n    <ion-item class="form-item">\n      <ion-input type="password" name="confirmPassword" formControlName="confirmPassword" maxlength="18" [placeholder]="constants.LANGS.LABEL_CONFIRM_PASSWORD"></ion-input>\n    </ion-item>\n    <div class="field-validation-error" *ngIf="confirmPassword.dirty && confirmPassword.value != newPassword.value">\n      {{constants.ERRORS.INVALID_CONFIRM_PASSWORD}}\n    </div>\n    <default-button tappable (click)="setPassword()" class="set-button" [attr.disabled]="!newPassword.valid || !confirmPassword.valid"\n      block text="{{constants.LANGS.LABEL_SET}}" text-uppercase></default-button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__["a" /* UtilitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavParams"]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=12.js.map