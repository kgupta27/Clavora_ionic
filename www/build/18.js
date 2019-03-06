webpackJsonp([18],{

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(878);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utilities_utilities__ = __webpack_require__(45);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, app, firebaseAnalytics, platform, user, utility, constants) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.user = user;
        this.utility = utility;
        this.constants = constants;
        this.isNotification = this.user.userData.isNotificationActive == "1" ? true : false;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Settings" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
    };
    SettingsPage.prototype.onTerms = function (isTerms) {
        console.log("onTerms", isTerms);
        this.navCtrl.push(this.constants.PAGES.TERMS_N_CONDITION, { isTerms: isTerms });
    };
    SettingsPage.prototype.onBoardingTutorial = function () {
        console.log("onBoardingTutorial");
        this.navCtrl.push(this.constants.PAGES.ONBOARDING);
    };
    SettingsPage.prototype.onNotification = function () {
        var _this = this;
        console.log("onNotification");
        this.user.toggleNotification(this.isNotification).subscribe(function (resp) {
            console.log(resp);
            _this.utility.showToast({ message: resp.message });
            _this.user.userData.isNotificationActive = _this.isNotification ? 1 : 0;
            _this.user.userData = _this.user.userData; //to re-save it to localstorage
        }, function (error) {
            console.log(error);
        });
    };
    SettingsPage.prototype.onContactAdmin = function () {
        console.log("onContactAdmin");
        this.navCtrl.push(this.constants.PAGES.CONTACT_ADMIN);
    };
    SettingsPage.prototype.onChangePassword = function () {
        console.log("onChangePassword");
        this.navCtrl.push(this.constants.PAGES.CHANGE_PASSWORD);
    };
    SettingsPage.prototype.onLogout = function () {
        var _this = this;
        console.log("onLogout");
        this.utility.showAlert({
            title: "",
            subTitle: this.constants.LANGS.PAGE_LABEL_LOGOUT_SUBTITLE,
            buttons: [
                {
                    text: this.constants.LANGS.LABEL_YES,
                    handler: function (data) {
                        _this.user.logout().subscribe(function (resp) {
                            console.log(resp);
                            _this.user.clearData();
                            _this.app.getRootNav().setRoot(_this.constants.PAGES.LOGIN_SIGNUP, { isLogin: true });
                        }, function (error) {
                            console.log(error);
                        });
                    }
                },
                {
                    text: this.constants.LANGS.LABEL_NO,
                    role: 'cancel',
                    handler: function (data) {
                        console.log('canceled');
                    }
                }
            ]
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{constants.LANGS.PAGE_TITLE_SETTINGS}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list no-lines>\n  <ion-item (click)="onTerms(true)">\n    {{constants.LANGS.PAGE_LABEL_ACCEPT_TNC_2}}\n  </ion-item>\n  <ion-item (click)="onTerms(false)">\n      {{constants.LANGS.PAGE_LABEL_ACCEPT_TNC_4}}\n  </ion-item>\n  <ion-item (click)="onBoardingTutorial()">\n    {{constants.LANGS.PAGE_LABEL_SETTINGS_ONBOARDING_TUTORIAL}}\n  </ion-item>\n  <ion-item>\n    <ion-label>{{constants.LANGS.PAGE_TITLE_NOTIFICATION}}</ion-label>\n    <ion-toggle [(ngModel)]="isNotification" (ionChange)="onNotification()" ></ion-toggle>\n  </ion-item>\n  <ion-item (click)="onContactAdmin()">\n    {{constants.LANGS.PAGE_TITLE_CONTACT_ADMIN}}\n  </ion-item>\n  <ion-item (click)="onChangePassword()" *ngIf="user.loginType == \'email\'">\n    {{constants.LANGS.PAGE_TITLE_CHANGE_PASSWORD}}\n  </ion-item>\n  <ion-item (click)="onLogout()">\n      {{constants.LANGS.PAGE_LABEL_SETTINGS_LOGOUT}}\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utilities_utilities__["a" /* UtilitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=18.js.map