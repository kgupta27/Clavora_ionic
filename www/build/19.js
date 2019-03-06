webpackJsonp([19],{

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_moment__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification__ = __webpack_require__(876);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__notification__["a" /* NotificationPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ngx_moment__["a" /* MomentModule */]
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, constants, user, firebaseAnalytics, platform, navParams) {
        this.navCtrl = navCtrl;
        this.constants = constants;
        this.user = user;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.navParams = navParams;
        this.isLoaded = false;
        this.pageNum = 1;
        this.notifications = [];
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        this.loadNotifications();
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Notification Center" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.loadNotifications = function (callback) {
        var _this = this;
        this.user.getNotification(this.pageNum, callback ? false : true).subscribe(function (resp) {
            console.log(resp);
            _this.isLoaded = true;
            if (resp.result.data.length > 0) {
                _this.pageNum++;
                _this.notifications = _this.notifications.concat(resp.result.data);
            }
            if (callback)
                callback();
        }, function (err) {
            console.log(err);
            _this.isLoaded = true;
        });
    };
    NotificationPage.prototype.loadMore = function (infiniteScroll) {
        console.log('Begin async operation');
        if (this.isLoaded) {
            this.loadNotifications(function () {
                infiniteScroll.complete();
            });
        }
        else {
            console.log("Async operation has ended");
            infiniteScroll.complete();
        }
    };
    NotificationPage.prototype.actionNotification = function (notification) {
        console.log(notification);
        if (notification.courseId) {
            this.user.handleNotification(notification.page, { courseId: notification.courseId, profileId: notification.profileId }, this.navCtrl);
        }
        else {
            this.user.handleNotification(notification.page, { profileId: notification.profileId }, this.navCtrl);
        }
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{constants.LANGS.LABEL_NOTIFICATIONS}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="no-data" *ngIf="isLoaded && notifications.length==0">{{constants.LANGS.PAGE_LABEL_NO_NOTIFICATIONS}}</div>\n  <div (click)="actionNotification(notification)" class="container" *ngFor="let notification of notifications">\n    <div class="notification" [ngClass]="{seen: notification.isRead==\'1\'}">\n      <div class="title">{{notification.title}}</div>\n      <div class="subtitle">{{notification.message}}</div>\n      <div class="date">{{notification.createdAt | amFromUtc | amLocal | amTimeAgo}}</div>\n    </div>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=19.js.map