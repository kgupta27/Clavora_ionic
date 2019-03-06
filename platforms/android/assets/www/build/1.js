webpackJsonp([1],{

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplementRequirementPageModule", function() { return SupplementRequirementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_moment__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_default_button_default_button_module__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_course_plan_course_plan_module__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Supplement_requirement__ = __webpack_require__(880);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SupplementRequirementPageModule = /** @class */ (function () {
    function SupplementRequirementPageModule() {
    }
    SupplementRequirementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__Supplement_requirement__["a" /* SupplementRequirementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__components_course_plan_course_plan_module__["a" /* CoursePlanModule */],
                __WEBPACK_IMPORTED_MODULE_1__components_default_button_default_button_module__["a" /* DefaultButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__Supplement_requirement__["a" /* SupplementRequirementPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ngx_moment__["a" /* MomentModule */]
            ],
        })
    ], SupplementRequirementPageModule);
    return SupplementRequirementPageModule;
}());

//# sourceMappingURL=supplement-requirement.module.js.map

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

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplementRequirementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_plan_management_course_plan_management__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_questionnaire_questionnaire__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
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
 * Generated class for the SupplementRequirementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupplementRequirementPage = /** @class */ (function () {
    function SupplementRequirementPage(navCtrl, navParams, modalCtrl, constants, user, firebaseAnalytics, platform, popoverCtrl, questionnaire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.constants = constants;
        this.user = user;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.popoverCtrl = popoverCtrl;
        this.questionnaire = questionnaire;
        this.courses = [];
        this.profiles = [];
    }
    SupplementRequirementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupplementRequirementPage');
    };
    SupplementRequirementPage.prototype.ionViewWillEnter = function () {
        this.currentPage = 1;
        this.totalPage = 1;
        this.reset();
        this.date = __WEBPACK_IMPORTED_MODULE_7_moment__().format('YYYY-MM-DD');
        this.getProfiles();
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Supplement Required" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
    };
    SupplementRequirementPage.prototype.getProfiles = function () {
        var _this = this;
        this.user.profiles()
            .subscribe(function (resp) {
            console.log(resp);
            _this.profiles = resp.result;
            if (_this.profiles.length > 0) {
                var notificationData = _this.navParams.get('notificationData');
                if (notificationData && notificationData.profileId) {
                    _this.user.selectedProfile = notificationData.profileId;
                }
                else if (!_this.user.selectedProfile) {
                    var temp = resp.result.find(function (profile) { return profile.isSelf == 1; });
                    if (!temp)
                        temp = _this.profiles[0];
                    _this.user.selectedProfile = temp.id;
                }
                _this.getCoursePlansOfDate(_this.date);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SupplementRequirementPage.prototype.reset = function () {
        this.pages = [];
        for (var i = 1; i <= this.totalPage; i++) {
            this.pages.push(i);
        }
    };
    SupplementRequirementPage.prototype.getCoursePlansOfDate = function (date) {
        var _this = this;
        console.log(date);
        if (this.user.selectedProfile) {
            this.questionnaire.getCoursePlansOfDate(this.user.selectedProfile, __WEBPACK_IMPORTED_MODULE_7_moment__(date).set({ hour: __WEBPACK_IMPORTED_MODULE_7_moment__().hours(), minute: __WEBPACK_IMPORTED_MODULE_7_moment__().minutes(), second: __WEBPACK_IMPORTED_MODULE_7_moment__().seconds(), millisecond: 0 }).utc().format('YYYY-MM-DD'), this.currentPage)
                .subscribe(function (resp) {
                console.log(resp);
                _this.courses = resp.result.data;
                _this.currentPage = resp.result.currentPage;
                _this.totalPage = resp.result.lastPage;
                _this.reset();
            }, function (err) {
                console.log(err);
            });
        }
    };
    SupplementRequirementPage.prototype.onPrev = function () {
        if (this.currentPage > 1) {
            this.currentPage = --this.currentPage;
            this.getCoursePlansOfDate(this.date);
        }
    };
    SupplementRequirementPage.prototype.onNext = function () {
        if (this.currentPage < this.totalPage) {
            this.currentPage = ++this.currentPage;
            this.getCoursePlansOfDate(this.date);
        }
    };
    SupplementRequirementPage.prototype.onPage = function (page) {
        if (this.currentPage != page) {
            this.currentPage = page;
            this.getCoursePlansOfDate(this.date);
        }
    };
    SupplementRequirementPage.prototype.openCalendar = function () {
        var _this = this;
        console.log("openCalendar");
        var modal = this.modalCtrl.create(this.constants.PAGES.CALENDAR, { currentDate: this.date, profileId: this.user.selectedProfile });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log("data", data);
            if (data) {
                _this.date = __WEBPACK_IMPORTED_MODULE_7_moment__(data).format('YYYY-MM-DD');
                _this.getCoursePlansOfDate(_this.date);
            }
        });
    };
    SupplementRequirementPage.prototype.openProfilePopover = function (event) {
        var _this = this;
        console.log("openProfilePopover");
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_1__course_plan_management_course_plan_management__["b" /* ProfilePopover */], { options: this.profiles, selectedProfile: this.user.selectedProfile }, { cssClass: "choose-my-plan" });
        popover.present();
        popover.onDidDismiss(function (data) {
            if (data) {
                console.log(data.selectedOption);
                _this.currentPage = 1;
                _this.totalPage = 1;
                _this.reset();
                _this.user.selectedProfile = data.selectedOption.id;
                _this.getCoursePlansOfDate(_this.date);
            }
        });
    };
    SupplementRequirementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["IonicPage"])(),
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-supplement-requirement',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/supplement-requirement/supplement-requirement.html"*/'<!--\n  Generated template for the SupplementRequirementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{constants.LANGS.PAGE_LABEL_SUPP_REQ}}</ion-title>\n    <ion-buttons end>\n      <button ion-button clear tappable (click)="openProfilePopover()">\n        <img alt="" class="profile" src="assets/icon/profile.svg">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="container">\n    <div class="date-container">\n      <div class="date">{{ date | amDateFormat:\'ll\' }}</div>\n      <img alt="" class="calendar-icon" src="assets/imgs/supplement-requirement/calendar.svg" tappable (click)="openCalendar()">\n    </div>\n    <div class="no-data" *ngIf="courses.length == 0">\n      {{constants.LANGS.PAGE_LABEL_NO_SUPP_REQ}}\n    </div>\n    <div class="data-container" *ngIf="courses.length > 0">\n      <ul class="course-header">\n        <li>{{constants.LANGS.LABEL_VITAMIN}}</li>\n        <li>{{constants.LANGS.LABEL_DOSAGE}}</li>\n        <li>{{constants.LANGS.LABEL_APPROX_TIME}}</li>\n        <li>{{constants.LANGS.LABEL_FREQUENCY}}</li>\n        <li>{{constants.LANGS.LABEL_INSTRUCTIONS}}</li>\n      </ul>\n      <!-- <course-plan [data]="navParams.data"></course-plan> -->\n      <course-plan *ngFor="let course of courses" [data]="course" [checkBox]="true" [date]="date"></course-plan>\n    </div>\n    <div class="button-container" *ngIf="courses.length > 0">\n      <default-button class="prev-button" [class.disabled]="currentPage == 1" [text]="constants.LANGS.LABEL_PREV"\n        tappable (click)="onPrev()"></default-button>\n      <ul>\n        <li *ngFor="let page of pages" [class.active]="page == currentPage" (click)="onPage(page)">{{page}}</li>\n      </ul>\n      <default-button class="next-button" [class.disabled]="currentPage == totalPage" [text]="constants.LANGS.LABEL_NEXT"\n        tappable (click)="onNext()"></default-button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/supplement-requirement/supplement-requirement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_questionnaire_questionnaire__["a" /* QuestionnaireProvider */]])
    ], SupplementRequirementPage);
    return SupplementRequirementPage;
}());

//# sourceMappingURL=Supplement-requirement.js.map

/***/ })

});
//# sourceMappingURL=1.js.map