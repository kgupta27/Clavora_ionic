webpackJsonp([23],{

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageModule", function() { return ComingSoonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coming_soon__ = __webpack_require__(868);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComingSoonPageModule = /** @class */ (function () {
    function ComingSoonPageModule() {
    }
    ComingSoonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coming_soon__["a" /* ComingSoonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__coming_soon__["a" /* ComingSoonPage */]),
            ],
        })
    ], ComingSoonPageModule);
    return ComingSoonPageModule;
}());

//# sourceMappingURL=coming-soon.module.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user__ = __webpack_require__(48);
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
 * Generated class for the ComingSoonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComingSoonPage = /** @class */ (function () {
    function ComingSoonPage(navCtrl, navParams, constants, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.constants = constants;
        this.user = user;
    }
    ComingSoonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComingSoonPage');
    };
    ComingSoonPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ComingSoonPage', this.navParams.data);
        this.user.buyVitamin(this.navParams.data);
    };
    ComingSoonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-coming-soon',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/coming-soon/coming-soon.html"*/'<!--\n  Generated template for the ComingSoonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <img alt="" class="back-arrow-custom" navPop src="assets/icon/back-arrow.svg">\n  <div class="container">\n    <div>\n      {{constants.LANGS.LABEL_COMING_SOON}}\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/coming-soon/coming-soon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* UserProvider */]])
    ], ComingSoonPage);
    return ComingSoonPage;
}());

//# sourceMappingURL=coming-soon.js.map

/***/ })

});
//# sourceMappingURL=23.js.map