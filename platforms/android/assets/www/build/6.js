webpackJsonp([6],{

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveySummaryPageModule", function() { return SurveySummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_default_button_default_button_module__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_summary__ = __webpack_require__(881);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SurveySummaryPageModule = /** @class */ (function () {
    function SurveySummaryPageModule() {
    }
    SurveySummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__survey_summary__["a" /* SurveySummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__components_default_button_default_button_module__["a" /* DefaultButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__survey_summary__["a" /* SurveySummaryPage */]),
            ],
        })
    ], SurveySummaryPageModule);
    return SurveySummaryPageModule;
}());

//# sourceMappingURL=survey-summary.module.js.map

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

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveySummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_utilities_utilities__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constant__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_questionnaire_questionnaire__ = __webpack_require__(69);
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
 * Generated class for the SurveySummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveySummaryPage = /** @class */ (function () {
    function SurveySummaryPage(navCtrl, questionnaire, constants, utilities, user, firebaseAnalytics, platform, navParams) {
        this.navCtrl = navCtrl;
        this.questionnaire = questionnaire;
        this.constants = constants;
        this.utilities = utilities;
        this.user = user;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.navParams = navParams;
        this.QUESTION_TYPE_TRUE_FALSE = __WEBPACK_IMPORTED_MODULE_3__app_constant__["e" /* QUESTION_TYPE_TRUE_FALSE */];
        this.QUESTION_TYPE_MULTI_OPTIONS = __WEBPACK_IMPORTED_MODULE_3__app_constant__["d" /* QUESTION_TYPE_MULTI_OPTIONS */];
    }
    SurveySummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveySummaryPage');
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Questionaire Summary" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
    };
    SurveySummaryPage.prototype.openTabs = function () {
        var _this = this;
        this.questionnaire.submitQuestions().subscribe(function (resp) {
            _this.navCtrl.setRoot(_this.constants.PAGES.TABS);
            if (resp.result.length > 0)
                _this.user.userData = Object.assign({}, _this.user.userData, { isCourseCreated: "1" });
            else
                _this.utilities.showToast({ message: resp.message });
            if (_this.questionnaire.profile["isOwner"] == 1)
                _this.user.userData = Object.assign({}, _this.user.userData, { name: _this.questionnaire.profile["name"] });
        }, function (err) {
            console.log(err);
        });
    };
    SurveySummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-survey-summary',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/survey-summary/survey-summary.html"*/'<!--\n  Generated template for the SurveySummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title>{{constants.LANGS.PAGE_LABEL_COURSE_PLAN}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="container">\n    <div class="title">{{constants.LANGS.PAGE_LABEL_RESULT}}</div>\n    <div class="summary">\n      <div class="gradient-option" *ngFor="let question of navParams.data.questions; let i = index">\n        <div class="label">{{i+1}}</div>\n        <div class="question">\n          <div>{{question.question}}</div>\n          <div>{{questionnaire.answers[question.id].value}}\n            <span *ngIf="question.type != QUESTION_TYPE_TRUE_FALSE">{{" " + questionnaire.answers[question.id].valueUnit}}</span>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons left>\n      <default-button class="go-back " block [text]="constants.LANGS.LABEL_GO_BACK" text-uppercase navPop></default-button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <default-button block [text]="constants.LANGS.LABEL_FINISH" text-uppercase (click)="openTabs()"></default-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/survey-summary/survey-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_questionnaire_questionnaire__["a" /* QuestionnaireProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_utilities_utilities__["a" /* UtilitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"]])
    ], SurveySummaryPage);
    return SurveySummaryPage;
}());

//# sourceMappingURL=survey-summary.js.map

/***/ })

});
//# sourceMappingURL=6.js.map