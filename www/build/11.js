webpackJsonp([11],{

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseConsumptionPageModule", function() { return ChooseConsumptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_default_button_default_button_module__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choose_consumption__ = __webpack_require__(865);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChooseConsumptionPageModule = /** @class */ (function () {
    function ChooseConsumptionPageModule() {
    }
    ChooseConsumptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__choose_consumption__["a" /* ChooseConsumptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__components_default_button_default_button_module__["a" /* DefaultButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__choose_consumption__["a" /* ChooseConsumptionPage */]),
            ],
        })
    ], ChooseConsumptionPageModule);
    return ChooseConsumptionPageModule;
}());

//# sourceMappingURL=choose-consumption.module.js.map

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

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseConsumptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_utilities_utilities__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_questionnaire_questionnaire__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the ChooseConsumptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseConsumptionPage = /** @class */ (function () {
    function ChooseConsumptionPage(navCtrl, navParams, utility, constants, firebaseAnalytics, platform, questionnaire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.constants = constants;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.questionnaire = questionnaire;
        this.vitamins = [];
    }
    ChooseConsumptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseConsumptionPage');
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Choose Vitamin" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        this.getVitaminsList();
    };
    ChooseConsumptionPage.prototype.getVitaminsList = function () {
        var _this = this;
        this.questionnaire.getVitamins().subscribe(function (resp) {
            console.log(resp);
            _this.vitamins = resp.result;
        }, function (err) {
            console.log(err);
        });
    };
    ChooseConsumptionPage.prototype.selectVitamin = function (value) {
        this.selectedVitamin = value;
    };
    ChooseConsumptionPage.prototype.showInfo = function () {
        this.utility.showInfoAlert({
            title: "",
            subTitle: this.constants.LANGS.PAGE_LABEL_CHOOSE_VITAMIN_DESC,
            buttons: []
        });
    };
    ChooseConsumptionPage.prototype.showVitInfo = function (desc) {
        this.utility.showInfoAlert({
            title: "",
            subTitle: desc || this.constants.LANGS.PAGE_LABEL_VITAMIN_NO_DESC,
            buttons: []
        });
    };
    ChooseConsumptionPage.prototype.onNext = function () {
        this.navCtrl.push(this.constants.PAGES.CHOOSE_PROFILE, { selectedVitamin: this.selectedVitamin });
    };
    ChooseConsumptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-choose-consumption',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/choose-consumption/choose-consumption.html"*/'<!--\n  Generated template for the ChooseConsumptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{constants.LANGS.PAGE_TITLE_CHOOSE_CONSUMPTION}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="container">\n    <p>{{constants.LANGS.PAGE_TITLE_CHOOSE_CONSUMPTION_1}}</p>\n    <div class="question-container">\n      <div class="question-option">{{constants.LANGS.PAGE_TITLE_CHOOSE_CONSUMPTION_2}}</div>\n      <div class="question">\n        {{constants.LANGS.PAGE_TITLE_CHOOSE_CONSUMPTION_3}}\n      </div>\n      <img class="info-icon" alt="" (click)="showInfo()" src="assets/icon/info.png">\n    </div>\n    <ul class="options">\n      <li *ngFor="let vitamin of vitamins" class="radio-option" [class.active]="selectedVitamin == vitamin.id" (click)="selectVitamin(vitamin.id);">\n        <span>\n          <img alt="" [hidden]="selectedVitamin == vitamin.id">\n          <img alt="" class="active" [hidden]="selectedVitamin != vitamin.id">\n          {{vitamin.name}}\n        </span>\n        <img *ngIf="selectedVitamin == vitamin.id" alt="" class="info-icon" (click)="showVitInfo(vitamin.description)" src="assets/icon/info.png">\n      </li>\n    </ul>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <default-button [attr.disabled]="!selectedVitamin" [text]="constants.LANGS.LABEL_NEXT" tappable (click)="onNext()"></default-button>\n</ion-footer>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/choose-consumption/choose-consumption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__providers_utilities_utilities__["a" /* UtilitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3__providers_questionnaire_questionnaire__["a" /* QuestionnaireProvider */]])
    ], ChooseConsumptionPage);
    return ChooseConsumptionPage;
}());

//# sourceMappingURL=choose-consumption.js.map

/***/ })

});
//# sourceMappingURL=11.js.map