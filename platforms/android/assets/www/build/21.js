webpackJsonp([21],{

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthArticleDetailPageModule", function() { return HealthArticleDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_moment__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__health_article_detail__ = __webpack_require__(872);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HealthArticleDetailPageModule = /** @class */ (function () {
    function HealthArticleDetailPageModule() {
    }
    HealthArticleDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__health_article_detail__["a" /* HealthArticleDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__health_article_detail__["a" /* HealthArticleDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ngx_moment__["a" /* MomentModule */]
            ],
        })
    ], HealthArticleDetailPageModule);
    return HealthArticleDetailPageModule;
}());

//# sourceMappingURL=health-article-detail.module.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthArticleDetailPage; });
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
 * Generated class for the HealthArticleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HealthArticleDetailPage = /** @class */ (function () {
    function HealthArticleDetailPage(navCtrl, navParams, firebaseAnalytics, platform, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
    }
    HealthArticleDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HealthArticleDetailPage');
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Health Article Detail" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        console.log(this.navParams.data);
        var video = document.getElementById('articleVideo');
        video.play();
    };
    HealthArticleDetailPage.prototype.showImage = function (image) {
        var modal = this.modalCtrl.create('ShowImagePage', { image: image });
        modal.present();
    };
    HealthArticleDetailPage.prototype.showVideo = function (url) {
        var modal = this.modalCtrl.create('VideoPlayerPage', { url: url });
        modal.present();
    };
    HealthArticleDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-health-article-detail',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/health-article-detail/health-article-detail.html"*/'<!--\n  Generated template for the HealthArticleDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <img alt="" class="back-arrow-custom" navPop src="assets/icon/back-arrow-shadow.svg">\n  <div class="image-container" *ngIf="navParams.data.videoUrl == \'\'">\n    <img alt="" class="article-image" [src]="navParams.data.image">\n    <img alt="" class="full-screen-button" src="assets/icon/full-screen-button.svg" tappable (click)="showImage(navParams.data.image)">\n  </div>\n  <div class="video-container" *ngIf="navParams.data.videoUrl != \'\'">\n    <video [poster]="navParams.data.image" preload="auto" muted controls="" controlsList="nodownload" id="articleVideo">\n      <source [src]="navParams.data.videoUrl" type="video/mp4">\n    </video>\n    <img alt="" class="full-screen-button" src="assets/icon/full-screen-button.svg" tappable (click)="showVideo(navParams.data.videoUrl)">\n  </div>\n  <div class="title">\n    {{navParams.data.title}}\n  </div>\n  <div class="date-container">\n    <div class="date">{{ navParams.data.createdAt | amDateFormat:\'ll\' }}</div>\n  </div>\n  <div class="description">{{navParams.data.content}}</div>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/health-article-detail/health-article-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"]])
    ], HealthArticleDetailPage);
    return HealthArticleDetailPage;
}());

//# sourceMappingURL=health-article-detail.js.map

/***/ })

});
//# sourceMappingURL=21.js.map