webpackJsonp([20],{

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthArticlePageModule", function() { return HealthArticlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_moment__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__health_article__ = __webpack_require__(873);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HealthArticlePageModule = /** @class */ (function () {
    function HealthArticlePageModule() {
    }
    HealthArticlePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__health_article__["a" /* HealthArticlePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__health_article__["a" /* HealthArticlePage */]),
                __WEBPACK_IMPORTED_MODULE_0_ngx_moment__["a" /* MomentModule */]
            ],
        })
    ], HealthArticlePageModule);
    return HealthArticlePageModule;
}());

//# sourceMappingURL=health-article.module.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the HealthArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HealthArticlePage = /** @class */ (function () {
    function HealthArticlePage(navCtrl, firebaseAnalytics, platform, constants, user, navParams) {
        this.navCtrl = navCtrl;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.constants = constants;
        this.user = user;
        this.navParams = navParams;
        this.isLoaded = false;
        this.articles = [];
        this.pageNum = 1;
        this.notificationCounts = 0;
    }
    HealthArticlePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.resetPage();
        this.loadArticle(function () {
            console.log('Async operation has ended');
            refresher.complete();
        });
    };
    HealthArticlePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad HealthArticlePage');
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Health Article List" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        this.resetPage();
        this.user.getNotificationCount().subscribe(function (resp) {
            console.log(resp);
            _this.notificationCounts = resp.result.count;
            _this.loadArticle();
        }, function (err) {
            console.log(err);
        });
        // this.loadArticle();
    };
    HealthArticlePage.prototype.resetPage = function () {
        this.pageNum = 1;
        this.articles = [];
        this.isLoaded = false;
    };
    HealthArticlePage.prototype.loadArticle = function (callback) {
        var _this = this;
        this.user.getArticle(this.pageNum).subscribe(function (resp) {
            _this.isLoaded = true;
            if (resp.result.data.length > 0) {
                _this.pageNum++;
                _this.articles = _this.articles.concat(resp.result.data);
            }
            if (callback)
                callback();
        }, function (err) {
            console.log(err);
            _this.isLoaded = true;
        });
    };
    HealthArticlePage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        if (this.isLoaded) {
            this.onScrollLoading = true;
            this.loadArticle(function () {
                _this.onScrollLoading = false;
                infiniteScroll.complete();
            });
        }
        else {
            console.log("Async operation has ended");
            infiniteScroll.complete();
        }
    };
    HealthArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-health-article',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/health-article/health-article.html"*/'<!--\n  Generated template for the HealthArticlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{constants.LANGS.PAGE_LABEL_HEALTH_ARTICLE}}</ion-title>\n    <ion-buttons end>\n      <button ion-button clear class="relative" [navPush]="constants.PAGES.NOTIFICATIONS">\n        <img alt="" src="assets/imgs/health-article/bell.svg">\n        <div *ngIf="notificationCounts>0" class="absolute absolute-top absolute-right count">{{notificationCounts}}</div>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher [enabled]="!onScrollLoading" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="no-data" *ngIf="isLoaded && articles.length==0">{{constants.LANGS.PAGE_LABEL_NO_ARTICLE}}</div>\n  <div class="container" *ngIf="isLoaded && articles.length!=0">\n    <div class="article" *ngFor="let article of articles" [navPush]="constants.PAGES.HEALTH_ARTICLE_DETAIL" [navParams]="article">\n      <img alt="" class="article-img" [src]="article.image">\n      <div class="icon-container" *ngIf="article.videoUrl != \'\'">\n        <img alt="" src="assets/icon/play.svg">\n      </div>\n      <div class="title">{{article.title}}</div>\n      <div class="subtitle">{{article.content}}</div>\n      <div class="date">{{ article.createdAt | amDateFormat:\'ll\' }}</div>\n    </div>\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/health-article/health-article.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], HealthArticlePage);
    return HealthArticlePage;
}());

//# sourceMappingURL=health-article.js.map

/***/ })

});
//# sourceMappingURL=20.js.map