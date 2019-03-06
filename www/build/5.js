webpackJsonp([5],{

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncPageModule", function() { return TncPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_default_button_default_button_module__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tnc__ = __webpack_require__(883);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TncPageModule = /** @class */ (function () {
    function TncPageModule() {
    }
    TncPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tnc__["a" /* TncPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__components_default_button_default_button_module__["a" /* DefaultButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__tnc__["a" /* TncPage */]),
            ],
        })
    ], TncPageModule);
    return TncPageModule;
}());

//# sourceMappingURL=tnc.module.js.map

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

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TncPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_utilities_utilities__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TncPage = /** @class */ (function () {
    function TncPage(navCtrl, constants, user, firebaseAnalytics, platform, utility, navParams) {
        this.navCtrl = navCtrl;
        this.constants = constants;
        this.user = user;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.utility = utility;
        this.navParams = navParams;
        this.value = false;
    }
    TncPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TncPage');
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: this.navParams.data.isTerms ? "Terms and Conditions" : "Privacy Policy" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        if (this.navParams.data.isTerms) {
            this.user.getTerms().subscribe(function (resp) {
                console.log(resp);
                _this.data = resp.result[0];
                // this.data = this.data.substring(this.data.indexOf("<body>") + 6, this.data.indexOf("</body>"));
                console.log(_this.data);
                _this.setData();
            }, function (err) {
                _this.navCtrl.pop();
            });
        }
        else {
            this.user.getPrivacyPolicy().subscribe(function (resp) {
                console.log(resp);
                _this.data = resp.result[0];
                // this.data = this.data.substring(this.data.indexOf("&lt;body&gt;") + 12, this.data.indexOf("&lt;/body&gt;"));
                console.log(_this.data);
                _this.setData();
            }, function (err) {
                _this.navCtrl.pop();
            });
        }
    };
    TncPage.prototype.setData = function () {
        var tempData = document.getElementById("tempData");
        tempData.innerHTML = this.data;
        this.data = tempData.textContent;
        this.data = this.data.substring(this.data.indexOf("<body>") + 6, this.data.indexOf("</body>"));
        var content = document.querySelector("ion-scroll .scroll-zoom-wrapper");
        console.log(this.data);
        content.innerHTML = this.data;
    };
    TncPage.prototype.onCheck = function () {
        this.value = !this.value;
    };
    TncPage.prototype.done = function () {
        var _this = this;
        if (this.navParams.data.isSignup) {
            this.user.signUp(this.navParams.data.email, this.navParams.data.password).subscribe(function (resp) {
                console.log(resp);
                _this.utility.showToast({ message: resp.message });
                _this.navCtrl.setRoot(_this.constants.PAGES.LOGIN_SIGNUP, { isLogin: true, email: _this.navParams.data.email });
                // this.connectForm.reset()
            }, function (err) {
                _this.navCtrl.pop();
            });
        }
        else if (this.navParams.data.isSocial) {
            this.user.acceptTerms().subscribe(function (resp) {
                console.log(resp);
                _this.user.userData = Object.assign({}, _this.user.userData, { isTermAccepted: "1" });
                _this.navCtrl.push(_this.user.getHomePage());
            }, function (err) {
                _this.navCtrl.pop();
            });
        }
    };
    TncPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-tnc',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/tnc/tnc.html"*/'<!--\n  Generated template for the TncPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <div class="title relative">{{navParams.data.isTerms?constants.LANGS.PAGE_LABEL_ACCEPT_TNC_2:constants.LANGS.PAGE_LABEL_ACCEPT_TNC_4}}\n    <div class="close" navPop>\n      <img alt="" src="assets/icon/x-mark.svg">\n    </div>\n  </div>\n\n  <div style="display:none" id="tempData"></div>\n  <ion-scroll scrollY="true" margin padding-right></ion-scroll>\n</ion-content>\n\n<ion-footer *ngIf="navParams.data.isSignup || navParams.data.isSocial">\n    <div class="check-box-container">\n        <div class="check-box" (click)="onCheck()">\n            <img alt="" [hidden]="value">\n    <img alt="" class="active" [hidden]="!value">{{constants.LANGS.LABEL_ACCEPT_TERMS}}\n  </div>\n  <default-button [attr.disabled]="!value" block [text]="constants.LANGS.LABEL_OK" (click)="done()"></default-button>\n</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/tnc/tnc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1__providers_utilities_utilities__["a" /* UtilitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], TncPage);
    return TncPage;
}());

//# sourceMappingURL=tnc.js.map

/***/ })

});
//# sourceMappingURL=5.js.map