webpackJsonp([22],{

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAdminPageModule", function() { return ContactAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_admin__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactAdminPageModule = /** @class */ (function () {
    function ContactAdminPageModule() {
    }
    ContactAdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_admin__["a" /* ContactAdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_admin__["a" /* ContactAdminPage */]),
            ],
        })
    ], ContactAdminPageModule);
    return ContactAdminPageModule;
}());

//# sourceMappingURL=contact-admin.module.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the ContactAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactAdminPage = /** @class */ (function () {
    function ContactAdminPage(navCtrl, navParams, firebaseAnalytics, platform, constants) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.constants = constants;
    }
    ContactAdminPage.prototype.ionViewDidLoad = function () {
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Contact Admin" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        console.log('ionViewDidLoad ContactAdminPage');
    };
    ContactAdminPage.prototype.onEmail = function () {
        window.open("mailto:" + this.constants.LANGS.ADMIN_EMAIL, "_system");
    };
    ContactAdminPage.prototype.onCall = function () {
        window.open("tel:" + this.constants.LANGS.ADMIN_PHONE.replace(/ /g, ''), "_system");
    };
    ContactAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-contact-admin',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/contact-admin/contact-admin.html"*/'<!--\n  Generated template for the ContactAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{constants.LANGS.PAGE_TITLE_CONTACT_ADMIN}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item (click)="onEmail()">\n      <img alt="" class="email" src="assets/icon/email.svg">\n      {{constants.LANGS.ADMIN_EMAIL}}\n    </ion-item>\n    <ion-item (click)="onCall()">\n      <img alt="" src="assets/icon/phone.svg">\n      {{constants.LANGS.ADMIN_PHONE}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/contact-admin/contact-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1__providers_constants_constants__["a" /* ConstantsProvider */]])
    ], ContactAdminPage);
    return ContactAdminPage;
}());

//# sourceMappingURL=contact-admin.js.map

/***/ })

});
//# sourceMappingURL=22.js.map