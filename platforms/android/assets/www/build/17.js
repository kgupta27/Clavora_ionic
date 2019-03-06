webpackJsonp([17],{

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowImagePageModule", function() { return ShowImagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_image__ = __webpack_require__(879);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowImagePageModule = /** @class */ (function () {
    function ShowImagePageModule() {
    }
    ShowImagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_image__["a" /* ShowImagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__show_image__["a" /* ShowImagePage */]),
            ],
        })
    ], ShowImagePageModule);
    return ShowImagePageModule;
}());

//# sourceMappingURL=show-image.module.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the ShowImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowImagePage = /** @class */ (function () {
    function ShowImagePage(viewCtrl, navParams, firebaseAnalytics, platform) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
    }
    ShowImagePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ShowImagePage');
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Image full view" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        this.imageUrl = this.navParams.data.image;
    };
    ShowImagePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ShowImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-show-image',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/show-image/show-image.html"*/'<!--\n  Generated template for the ShowImagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <img alt="" class="back-arrow-custom" navPop src="assets/icon/back-arrow.svg">\n  <ion-img [src]="imageUrl"></ion-img>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/show-image/show-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"]])
    ], ShowImagePage);
    return ShowImagePage;
}());

//# sourceMappingURL=show-image.js.map

/***/ })

});
//# sourceMappingURL=17.js.map