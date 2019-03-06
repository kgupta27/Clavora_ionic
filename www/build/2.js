webpackJsonp([2],{

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePlanPageModule", function() { return CoursePlanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_default_button_default_button_module__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_course_plan_course_plan_module__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__course_plan__ = __webpack_require__(870);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoursePlanPageModule = /** @class */ (function () {
    function CoursePlanPageModule() {
    }
    CoursePlanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__course_plan__["a" /* CoursePlanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__components_course_plan_course_plan_module__["a" /* CoursePlanModule */],
                __WEBPACK_IMPORTED_MODULE_0__components_default_button_default_button_module__["a" /* DefaultButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__course_plan__["a" /* CoursePlanPage */]),
            ],
        })
    ], CoursePlanPageModule);
    return CoursePlanPageModule;
}());

//# sourceMappingURL=course-plan.module.js.map

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

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePlanModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_plan__ = __webpack_require__(853);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoursePlanModule = /** @class */ (function () {
    function CoursePlanModule() {
    }
    CoursePlanModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__course_plan__["a" /* CoursePlanComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__course_plan__["a" /* CoursePlanComponent */]]
        })
    ], CoursePlanModule);
    return CoursePlanModule;
}());

//# sourceMappingURL=course-plan.module.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_questionnaire_questionnaire__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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
 * Generated class for the CoursePlanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CoursePlanComponent = /** @class */ (function () {
    function CoursePlanComponent(constants, questionnaire) {
        this.constants = constants;
        this.questionnaire = questionnaire;
        this.checkBox = false;
        this.value = false;
        console.log('Hello CoursePlanComponent Component');
    }
    CoursePlanComponent.prototype.ngOnInit = function () {
        console.log('CoursePlanComponent initialized', this.data);
        this.value = this.data.doseTaken == 0 ? false : true;
    };
    CoursePlanComponent.prototype.onCheck = function (event) {
        var _this = this;
        event.stopPropagation();
        console.log(this.date);
        console.log(__WEBPACK_IMPORTED_MODULE_3_moment__(this.date).utc().format('YYYY-MM-DD'));
        this.questionnaire.doseTaken(this.data.id, this.value, this.date)
            .subscribe(function (resp) {
            console.log(resp);
            _this.value = !_this.value;
        }, function (err) {
            console.log(err);
        });
    };
    CoursePlanComponent.prototype.getVitamin = function () {
        return this.data ? this.data.vitamin.name.replace("Vitamin ", "") : "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CoursePlanComponent.prototype, "checkBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CoursePlanComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CoursePlanComponent.prototype, "date", void 0);
    CoursePlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'course-plan',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/components/course-plan/course-plan.html"*/'<div class="course-content" [ngStyle]="{\'background-color\':data?.vitamin.backgroundColor}">\n  <ul>\n    <li>{{getVitamin()}}</li>\n    <li>{{data?.userCoursePlanDetail?.dosage}}</li>\n    <li>{{data?.userCoursePlanDetail?.timing}}</li>\n    <li>{{data?.userCoursePlanDetail?.frequency}}</li>\n    <li>{{data?.userCoursePlanDetail?.instructions}}</li>\n  </ul>\n  <div class="check-box-container">\n    <div class="check-box" *ngIf="checkBox" tappable (click)="onCheck($event)">\n      <img alt="" [hidden]="value">\n      <img alt="" class="active" [hidden]="!value"> {{value ? constants.LANGS.LABEL_DOSE_TAKEN : constants.LANGS.LABEL_MARK_TAKEN}}\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/components/course-plan/course-plan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_questionnaire_questionnaire__["a" /* QuestionnaireProvider */]])
    ], CoursePlanComponent);
    return CoursePlanComponent;
}());

//# sourceMappingURL=course-plan.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePlanPage; });
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
 * Generated class for the CoursePlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoursePlanPage = /** @class */ (function () {
    function CoursePlanPage(navCtrl, navParams, firebaseAnalytics, platform, constants) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.constants = constants;
    }
    CoursePlanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursePlanPage', this.navParams.data);
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Course Plan" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
    };
    CoursePlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-course-plan',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/course-plan/course-plan.html"*/'<!--\n  Generated template for the CoursePlanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{navParams.data?.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="container">\n    <ul class="course-header">\n      <li>{{constants.LANGS.LABEL_VITAMIN}}</li>\n      <li>{{constants.LANGS.LABEL_DOSAGE}}</li>\n      <li>{{constants.LANGS.LABEL_APPROX_TIME}}</li>\n      <li>{{constants.LANGS.LABEL_FREQUENCY}}</li>\n      <li>{{constants.LANGS.LABEL_INSTRUCTIONS}}</li>\n    </ul>\n    <course-plan [data]="navParams.data"></course-plan>\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf="navParams.data.vitaminId">\n  <default-button block class="buy-now" [text]="constants.LANGS.LABEL_BUY_NOW" tappable [navPush]="constants.PAGES.BUY_VIT" [navParams]="navParams.data?.vitamin?.id"></default-button>\n</ion-footer>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/course-plan/course-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1__providers_constants_constants__["a" /* ConstantsProvider */]])
    ], CoursePlanPage);
    return CoursePlanPage;
}());

//# sourceMappingURL=course-plan.js.map

/***/ })

});
//# sourceMappingURL=2.js.map