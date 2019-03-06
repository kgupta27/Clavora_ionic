webpackJsonp([15],{

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerPageModule", function() { return VideoPlayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_player__ = __webpack_require__(884);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VideoPlayerPageModule = /** @class */ (function () {
    function VideoPlayerPageModule() {
    }
    VideoPlayerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video_player__["a" /* VideoPlayerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__video_player__["a" /* VideoPlayerPage */]),
            ],
        })
    ], VideoPlayerPageModule);
    return VideoPlayerPageModule;
}());

//# sourceMappingURL=video-player.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayerPage; });
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



var VideoPlayerPage = /** @class */ (function () {
    function VideoPlayerPage(viewCtrl, navParams, firebaseAnalytics, platform) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
    }
    VideoPlayerPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ShowImagePage');
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Video Player" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
    };
    VideoPlayerPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    VideoPlayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPlayerPage');
        document.getElementsByTagName('ion-modal')[0].classList.add('modal-with-light-bg');
        var video = document.getElementById('modalVideo');
        video.play();
    };
    VideoPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-video-player',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/video-player/video-player.html"*/'<ion-content>\n    <img alt="" class="back-arrow-custom" navPop src="assets/icon/back-arrow-shadow.svg">\n    <video preload="auto" muted controls="" id="modalVideo" controlsList="nodownload">\n      <source [src]="navParams?.data?.url" type="video/mp4">\n    </video>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/video-player/video-player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"]])
    ], VideoPlayerPage);
    return VideoPlayerPage;
}());

//# sourceMappingURL=video-player.js.map

/***/ })

});
//# sourceMappingURL=15.js.map