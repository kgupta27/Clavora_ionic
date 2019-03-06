webpackJsonp([25],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_env__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utilities_utilities__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = /** @class */ (function () {
    function HttpProvider(http, app, constant, utilitiesProvider) {
        this.http = http;
        this.app = app;
        this.constant = constant;
        this.utilitiesProvider = utilitiesProvider;
        this.isOnline = true;
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider.prototype.httpRequest = function (type, apiName, data, showSuccessLoader, showErrorInToast) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (showSuccessLoader === void 0) { showSuccessLoader = true; }
        if (showErrorInToast === void 0) { showErrorInToast = true; }
        if (showSuccessLoader)
            this.utilitiesProvider.showLoader();
        var request;
        console.log(apiName);
        if (apiName.indexOf("http://") == -1 && apiName.indexOf("https://") == -1) {
            apiName = __WEBPACK_IMPORTED_MODULE_7__app_env__["a" /* ENV */].baseUrl + __WEBPACK_IMPORTED_MODULE_7__app_env__["a" /* ENV */].apiPath + apiName;
        }
        console.log(apiName);
        console.log(data);
        switch (type) {
            case 'GET':
                if (data) {
                    var getArguments = '';
                    for (var key in data) {
                        if (key === 'length' || !data.hasOwnProperty(key))
                            continue;
                        if (getArguments)
                            getArguments = '&' + key + '=' + data[key];
                        else
                            getArguments = '?' + key + '=' + data[key];
                        apiName += getArguments;
                    }
                }
                request = this.http.get(apiName);
                break;
            case 'POST':
                request = this.http.post(apiName, data);
                break;
            case 'PUT':
                request = this.http.put(apiName, data);
                break;
            case 'DELETE':
                request = this.http.delete(apiName);
                break;
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Subject"]();
        var thisRequest = request;
        thisRequest.catch(function (err) {
            console.log(apiName);
            console.log(err);
            return _this.handleError(err);
        }).subscribe(function (data) {
            console.log(apiName);
            console.log(data);
            subject.next(data);
            if (showSuccessLoader)
                _this.utilitiesProvider.hideLoader();
        }, function (err) {
            console.log(apiName);
            console.log(err);
            if (showSuccessLoader)
                _this.utilitiesProvider.hideLoader();
            if (showErrorInToast)
                _this.utilitiesProvider.showToast({ message: err.error.message });
            if (err.status != 0) {
                subject.error(err);
            }
            if (err.status == 0) {
                if (_this.navCtrl.getActive().id == _this.constant.PAGES.NO_INTERNET) {
                }
                else {
                    _this.navCtrl.push(_this.constant.PAGES.NO_INTERNET, { request: thisRequest, subject: subject, path: apiName }, { animate: false });
                }
            }
        });
        return subject;
    };
    HttpProvider.prototype.handleError = function (error) {
        console.log("handleError");
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            console.error(error);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
    };
    ;
    HttpProvider.prototype.get = function (apiName, data, showSuccessLoader, showErrorInToast) {
        if (data === void 0) { data = {}; }
        if (showSuccessLoader === void 0) { showSuccessLoader = true; }
        if (showErrorInToast === void 0) { showErrorInToast = true; }
        return this.httpRequest('GET', apiName, data, showSuccessLoader, showErrorInToast);
    };
    HttpProvider.prototype.post = function (apiName, data, showSuccessLoader, showErrorInToast) {
        if (data === void 0) { data = {}; }
        if (showSuccessLoader === void 0) { showSuccessLoader = true; }
        if (showErrorInToast === void 0) { showErrorInToast = true; }
        return this.httpRequest('POST', apiName, data, showSuccessLoader, showErrorInToast);
    };
    HttpProvider.prototype.put = function (apiName, data, showSuccessLoader, showErrorInToast) {
        if (data === void 0) { data = {}; }
        if (showSuccessLoader === void 0) { showSuccessLoader = true; }
        if (showErrorInToast === void 0) { showErrorInToast = true; }
        return this.httpRequest('PUT', apiName, data, showSuccessLoader, showErrorInToast);
    };
    HttpProvider.prototype.delete = function (apiName, data, showSuccessLoader, showErrorInToast) {
        if (data === void 0) { data = {}; }
        if (showSuccessLoader === void 0) { showSuccessLoader = true; }
        if (showErrorInToast === void 0) { showErrorInToast = true; }
        return this.httpRequest('DELETE', apiName, data, showSuccessLoader, showErrorInToast);
    };
    Object.defineProperty(HttpProvider.prototype, "navCtrl", {
        get: function () {
            return this.app.getRootNav();
        },
        enumerable: true,
        configurable: true
    });
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_0__constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__utilities_utilities__["a" /* UtilitiesProvider */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return QUESTION_TYPE_TRUE_FALSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return QUESTION_TYPE_MULTI_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GOOGLE_WEB_CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PasswordRegExp; });
var QUESTION_TYPE_TRUE_FALSE = 2;
var QUESTION_TYPE_MULTI_OPTIONS = 1;
var GOOGLE_WEB_CLIENT_ID = "1013875668618-2ibft4hplqnct68rgjlv2l52msfkfrs8.apps.googleusercontent.com";
var EmailRegExp = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";
// export const PasswordRegExp = /^\S*$/;
var PasswordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/;
//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the FacebookProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var FacebookProvider = /** @class */ (function () {
    function FacebookProvider(fb, storage) {
        this.fb = fb;
        this.storage = storage;
        console.log('Hello FacebookProvider Provider');
    }
    // Used to login to the app via facebook
    FacebookProvider.prototype.doFacebookLogin = function () {
        var _this = this;
        console.log("doFacebookLogin");
        //    let env = this;
        return new Promise(function (resolve, reject) {
            console.log("doFacebookLogin Promise");
            //["public_profile"] is the array of permissions, you can add more if you need
            _this.fb.login(["public_profile", "email"]).then(function (response) {
                console.log("doFacebookLogin Promise login");
                console.log("doFacebookLogin Promise login response", response);
                //Getting name and gender properties
                //        env.fb.api("/me?fields=first_name,last_name,gender,email", [])
                _this.fb.api("/me?fields=first_name,last_name,gender,email", [])
                    .then(function (user) {
                    console.log("doFacebookLogin Promise login then");
                    user.token = response.authResponse.accessToken;
                    _this.setFacebookUser(user)
                        .then(function (res) { return resolve(res); });
                });
            }, function (error) { return reject(error); });
        });
    };
    // Used for facebook logout
    FacebookProvider.prototype.doFacebookLogout = function () {
        return this.fb.logout();
    };
    // get facebook user
    FacebookProvider.prototype.getFacebookUser = function () {
        return this.storage.get('facebookUser');
    };
    // remove facebook user
    FacebookProvider.prototype.removeFacebookUser = function () {
        return this.storage.remove('facebookUser');
    };
    // set the facebook user as app user
    FacebookProvider.prototype.setFacebookUser = function (user) {
        var _this = this;
        console.log("setFacebookUser");
        console.log(user);
        return new Promise(function (resolve, reject) {
            resolve(_this.storage.set('facebookUser', {
                source: 'facebook',
                sourceId: user.id,
                // firstName: user.first_name,
                // lastName: user.last_name,
                // profileImage: "https://graph.facebook.com/" + user.id + "/picture?type=large",
                email: user.email,
                socialToken: user.token
            }));
        });
    };
    FacebookProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], FacebookProvider);
    return FacebookProvider;
}());

//# sourceMappingURL=facebook.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constant__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the GoogleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GoogleProvider = /** @class */ (function () {
    function GoogleProvider(googlePlus, storage) {
        this.googlePlus = googlePlus;
        this.storage = storage;
        console.log('Hello GoogleProvider Provider');
    }
    GoogleProvider.prototype.trySilentLogin = function () {
        var _this = this;
        console.log("trySilentLogin");
        return new Promise(function (resolve, reject) {
            //checks if user is already signed in to the app and sign them in silently if they are.
            _this.googlePlus.trySilentLogin({
                'scopes': '',
                'webClientId': __WEBPACK_IMPORTED_MODULE_5__app_constant__["b" /* GOOGLE_WEB_CLIENT_ID */],
                'offline': true
            }).then(function (user) {
                _this.setGoogleUser(user)
                    .then(function (res) { return resolve(res); });
            }, function (error) { return reject(error); });
        });
    };
    // Used to login to google from the app
    GoogleProvider.prototype.doGoogleLogin = function () {
        var _this = this;
        console.log("doGoogleLogin");
        return new Promise(function (resolve, reject) {
            _this.googlePlus.login({
                'scopes': '',
                'webClientId': __WEBPACK_IMPORTED_MODULE_5__app_constant__["b" /* GOOGLE_WEB_CLIENT_ID */],
                'offline': true
            }).then(function (user) {
                _this.setGoogleUser(user)
                    .then(function (res) { return resolve(res); });
            }, function (error) { return reject(error); });
        });
    };
    // used for google logout
    // doGoogleLogout() {
    //   return this.googlePlus.logout()
    // }
    GoogleProvider.prototype.doGoogleLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.googlePlus.logout()
                .then(function (response) {
                _this.googlePlus.disconnect();
                //user logged out so we will remove him from the NativeStorage
                _this.removeGoogleUser();
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    // used to get the google user's information
    GoogleProvider.prototype.getGoogleUser = function () {
        return this.storage.get('googleUser');
    };
    // used to remove the google user's information
    GoogleProvider.prototype.removeGoogleUser = function () {
        return this.storage.remove('googleUser');
    };
    //Set the googleuser for the app using
    GoogleProvider.prototype.setGoogleUser = function (user) {
        var _this = this;
        console.log('setGoogleUser');
        console.log(user);
        return new Promise(function (resolve, reject) {
            resolve(_this.storage.set('googleUser', {
                source: 'google',
                sourceId: user.userId,
                // firstName: user.displayName.split(" ")[0],
                // lastName: user.displayName.split(" ").pop(),
                /*           firstName: user.givenName,
                          lastName: user.familyName,
                 */
                // profileImage: user.imageUrl,
                email: user.email,
                socialToken: user.accessToken
            }));
        });
    };
    GoogleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], GoogleProvider);
    return GoogleProvider;
}());

//# sourceMappingURL=google.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buy-vitamin/buy-vitamin.module": [
		821,
		24
	],
	"../pages/calendar/calendar.module": [
		822,
		0
	],
	"../pages/change-password/change-password.module": [
		823,
		12
	],
	"../pages/choose-consumption/choose-consumption.module": [
		824,
		11
	],
	"../pages/choose-profile/choose-profile.module": [
		825,
		3
	],
	"../pages/coming-soon/coming-soon.module": [
		826,
		23
	],
	"../pages/contact-admin/contact-admin.module": [
		827,
		22
	],
	"../pages/course-plan-management/course-plan-management.module": [
		828,
		14
	],
	"../pages/course-plan/course-plan.module": [
		829,
		2
	],
	"../pages/forgot-password/forgot-password.module": [
		830,
		10
	],
	"../pages/health-article-detail/health-article-detail.module": [
		831,
		21
	],
	"../pages/health-article/health-article.module": [
		832,
		20
	],
	"../pages/login-signup/login-signup.module": [
		833,
		9
	],
	"../pages/no-internet/no-internet.module": [
		834,
		8
	],
	"../pages/notification/notification.module": [
		835,
		19
	],
	"../pages/onboarding/onboarding.module": [
		836,
		7
	],
	"../pages/questionnaire/questionnaire.module": [
		837,
		13
	],
	"../pages/settings/settings.module": [
		838,
		18
	],
	"../pages/show-image/show-image.module": [
		839,
		17
	],
	"../pages/supplement-requirement/supplement-requirement.module": [
		840,
		1
	],
	"../pages/survey-summary/survey-summary.module": [
		841,
		6
	],
	"../pages/tabs/tabs.module": [
		842,
		16
	],
	"../pages/tnc/tnc.module": [
		843,
		5
	],
	"../pages/video-player/video-player.module": [
		844,
		15
	],
	"../pages/welcome/welcome.module": [
		845,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 220;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    name: "Dev",
    baseUrl: "https://dev.clavora.com/",
    apiPath: "api/v1"
};
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantsProvider; });
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

/*
  Generated class for the ConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConstantsProvider = /** @class */ (function () {
    function ConstantsProvider() {
        this.ERRORS = {
            INVALID_EMAIL: "Please enter a valid email address",
            INVALID_PASSWORD: "Password must contain at least 8 characters, 1 number, 1 upper case letter, and 1 symbol.",
            INVALID_PROFILE_NAME: "Two profiles cannot have same name",
            INVALID_CONFIRM_PASSWORD: "The passwords you entered do not match",
            NO_CONNECTION: "Unable to connect to server, please check your network connection and try again",
            SOCIAL_LOGIN_EMAIL_MISSING: "We are unable to get any email id from your social media account. Please try another medium to signup",
            OOPS: "Oops...Something went wrong, please try again later",
        };
        this.LANGS = {
            ADMIN_EMAIL: "Info@clavora.com",
            ADMIN_PHONE: "(628) 8678 8900",
            LABEL_SIGN_UP: "Sign Up",
            LABEL_FACEBOOK: "Facebook",
            LABEL_GOOGLE: "Google",
            LABEL_LOGIN: "Login",
            LABEL_YES: "Yes",
            LABEL_NO: "No",
            LABEL_OK: "Ok",
            LABEL_FORGOT_PASSWORD: "Forgot Password",
            LABEL_SUBMIT: "Submit",
            LABEL_SKIP: "SKIP",
            LABEL_NEXT: "NEXT",
            LABEL_RETRY: "RETRY",
            LABEL_GO_BACK: "GO BACK",
            LABEL_FINISH: "FINISH",
            LABEL_SET: "Set",
            LABEL_DONE: "DONE",
            LABEL_VITAMIN: "Vitamin",
            LABEL_DOSAGE: "Dosage",
            LABEL_APPROX_TIME: "Approx Time",
            LABEL_FREQUENCY: "Frequency",
            LABEL_INSTRUCTIONS: "Instructions",
            LABEL_PREV: "PREV",
            LABEL_BUY_NOW: "Buy Vitamin",
            LABEL_COMING_SOON: "Coming Soon",
            LABEL_ACCEPT_TERMS: "Accept Terms & Conditions",
            LABEL_DOSE_TAKEN: "Dose Taken",
            LABEL_MARK_TAKEN: "Mark when taken",
            LABEL_CURRENT_PASSWORD: "Current Password",
            LABEL_NEW_PASSWORD: "New Password",
            LABEL_CONFIRM_PASSWORD: "Confirm New Password",
            LABEL_DAYS: "Days",
            LABEL_IN_PROGRESS: "In progress",
            LABEL_COMPLETED_ON: "Completed on",
            LABEL_EMAIL_ADDRESS: "Email address",
            LABEL_PASSWORD: "Password",
            LABEL_A: "A",
            LABEL_B: "B",
            LABEL_SURVEY: "+ Start A Survey",
            LABEL_SURVEY_AGAIN: "+ Survey Again",
            LABEL_COURSE_PLAN: "Course Plan Management",
            PAGE_LABEL_COURSE_PLAN: "Course Plan",
            LABEL_NOTIFICATIONS: "Notifications",
            PAGE_LABEL_SIGN_UP_DETAIL: "Please enter your email and create a password below to create your account.",
            // PAGE_LABEL_ACCEPT_TNC_1: "By creating an account you are agreeing to our",
            PAGE_LABEL_ACCEPT_TNC_2: "Terms & Conditions",
            PAGE_LABEL_ACCEPT_TNC_3: "and",
            PAGE_LABEL_ACCEPT_TNC_4: "Privacy & Policy",
            PAGE_LABEL_ALREADY_HAVE_ACCOUNT: "Already have an account?",
            PAGE_LABEL_LOGOUT_SUBTITLE: "Are you sure you want to log out?",
            PAGE_LABEL_COMPLETE_TITLE: "Are you sure want to complete?",
            PAGE_LABEL_COMPLETE_SUBTITLE: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
            PAGE_TITLE_CHOOSE_CONSUMPTION_1: "Please select one of the vitamins below:",
            PAGE_TITLE_CHOOSE_CONSUMPTION_2: "A",
            PAGE_TITLE_CHOOSE_CONSUMPTION_3: "How many vitamins should I take?",
            PAGE_TITLE_DURATION: "Duration",
            PAGE_TITLE_ADD_COURSE_PLAN: "Add Course Plan",
            PAGE_LABEL_DONT_HAVE_ACCOUNT: "Don’t have an account? ",
            PAGE_LABEL_HEALTH_ARTICLE: "Health Article",
            PAGE_LABEL_GO_TO_DATE: "Go to Date",
            PAGE_LABEL_NO_ARTICLE: "No Article Found",
            PAGE_LABEL_NO_NOTIFICATIONS: "No Older Notifications",
            PAGE_LABEL_LOGIN: "Login Here",
            PAGE_LABEL_START_COURSE_AGAIN: "Course plan for same vitamin already exists for this user, do you really want to edit it?",
            PAGE_LABEL_START_COURSE_AGAIN_2: "Course plan for same vitamin already completed for this user, do you really want to start it again?",
            PAGE_LABEL_SUPP_REQ: "Supplements Required",
            PAGE_LABEL_NO_SUPP_REQ: "No Supplement Required",
            PAGE_LABEL_LOGIN_DETAIL: "Please enter your email and password to log into your account.",
            PAGE_LABEL_FORGOT_PASSWORD_DETAIL: "Please enter your email and we will send you a link to reset your password.",
            PAGE_LABEL_CONGRATS_0: "You have not taken any survey yet",
            PAGE_LABEL_CONGRATS_1: "Congratulations! You are doing great.",
            PAGE_LABEL_SETTINGS_ONBOARDING_TUTORIAL: "Onboarding Tutorial",
            PAGE_LABEL_SETTINGS_LOGOUT: "Logout",
            PAGE_LABEL_START_DATE: "Start Date",
            PAGE_LABEL_END_DATE: "End Date",
            PAGE_LABEL_DURATION: "Duration : ",
            PAGE_LABEL_SELF: "Create for Self ",
            PAGE_LABEL_OTHER: "Create for Other’s ",
            PAGE_LABEL_YOUR_NAME: "Enter Your Name",
            PAGE_LABEL_PERSON_NAME: "Enter Person name ",
            PAGE_LABEL_PERSON: "Select Person",
            PAGE_LABEL_RELATION: "Relation",
            PAGE_LABEL_WELCOME: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
            PAGE_LABEL_USER_DETAILS: "Please enter the user details for whom you creating new course plan .",
            PAGE_LABEL_MARK_COMPLETE: " Mark as complete",
            PAGE_LABEL_PARTIAL: "Incomplete daily supplement intake",
            PAGE_LABEL_INCOMPLETE: "Start the day with Supplements",
            PAGE_LABEL_NONE_SUPP: "Supplements taken/No Supplements required for the day",
            PAGE_TITLE_CHANGE_PASSWORD: "Change Password",
            PAGE_TITLE_CONTACT_ADMIN: "Contact Admin",
            PAGE_TITLE_BUY_VIT: "Buy Vitamin",
            PAGE_TITLE_SETTINGS: "Settings",
            PAGE_TITLE_NOTIFICATION: "Notifications",
            PAGE_TITLE_NO_INTERNET: "No Internet connection",
            PAGE_TITLE_WELCOME: "Welcome to Clavora",
            PAGE_SUB_TITLE_NO_INTERNET: "Could not connect to the network. Please check and try again",
            PAGE_TITLE_CHOOSE_CONSUMPTION: "Your Consumption",
            PAGE_LABEL_RESULT: "Your Result",
            PAGE_LABLE_COMING_VIT: "Vitamins are Coming soon",
            PAGE_LABEL_CHOOSE_VITAMIN_DESC: "Choose one of the vitamin and series of question will be presented to analyze how much consumption is required, if its required at all",
            PAGE_LABEL_VITAMIN_NO_DESC: "No Description Added"
        };
        this.PAGES = {
            FORGOT_PASSWORD: "ForgotPasswordPage",
            TERMS_N_CONDITION: "TncPage",
            LOGIN_SIGNUP: "LoginSignupPage",
            CHOOSE_CONSUMPTION: "ChooseConsumptionPage",
            ONBOARDING: "OnboardingPage",
            CHANGE_PASSWORD: "ChangePasswordPage",
            WELCOME: "WelcomePage",
            CONTACT_ADMIN: "ContactAdminPage",
            COURSE_PLAN: "CoursePlanPage",
            TABS: "TabsPage",
            COURSE_PLAN_MANAGEMENT: "CoursePlanManagementPage",
            SUPPLEMENT_REQUIREMENT: "SupplementRequirementPage",
            CALENDAR: "CalendarPage",
            HEALTH_ARTICLE: "HealthArticlePage",
            HEALTH_ARTICLE_DETAIL: "HealthArticleDetailPage",
            QUESTIONAIRE: "QuestionnairePage",
            SETTINGS: "SettingsPage",
            SUMMARY: "SurveySummaryPage",
            NOTIFICATIONS: "NotificationPage",
            COMING_SOON: "ComingSoonPage",
            BUY_VIT: "BuyVitaminPage",
            NO_INTERNET: "NoInternetPage",
            CHOOSE_PROFILE: "ChooseProfilePage"
        };
    }
    ConstantsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConstantsProvider);
    return ConstantsProvider;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';





var UtilitiesProvider = /** @class */ (function () {
    function UtilitiesProvider(alertCtrl, loadingCtrl, toastCtrl, actionSheetCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertOptions = {
            // title: 'Alert',
            subTitle: 'Alert is Here',
        };
        this.loader_count = 0;
        this.loading = {
            content: 'Please wait...'
        };
        this.toastOptions = {
            message: '',
            duration: 5000,
            position: 'top'
        };
        this.actionsheetOptions = {
            title: 'Actionsheet!!!',
        };
        console.log('Hello UtilitiesProvider Provider');
    }
    UtilitiesProvider.prototype.showAlert = function (alertOptions, onDismiss) {
        if (onDismiss === void 0) { onDismiss = function () { }; }
        this.alert = this.alertCtrl.create(Object.assign({}, this.alertOptions, alertOptions));
        this.alert.present();
        this.alert.onDidDismiss(function () { return onDismiss(); });
    };
    UtilitiesProvider.prototype.showInfoAlert = function (alertOptions, onDismiss) {
        if (onDismiss === void 0) { onDismiss = function () { }; }
        this.alert = this.alertCtrl.create(Object.assign({ cssClass: 'info-alert' }, this.alertOptions, alertOptions));
        this.alert.present();
        this.alert.onDidDismiss(function () { return onDismiss(); });
    };
    UtilitiesProvider.prototype.hideAlert = function () {
        this.alert.Dismiss();
    };
    UtilitiesProvider.prototype.showLoader = function (loading, onDismiss) {
        if (loading === void 0) { loading = {}; }
        if (onDismiss === void 0) { onDismiss = function () { }; }
        this.loader_count++;
        if (this.loader_count == 1) {
            this.loader = this.loadingCtrl.create(Object.assign({}, this.loading, loading));
            this.loader.present();
        }
    };
    UtilitiesProvider.prototype.hideLoader = function () {
        if (this.loader_count == 1)
            this.loader.dismiss();
        this.loader_count--;
    };
    UtilitiesProvider.prototype.showToast = function (toastOptions, onDismiss) {
        if (toastOptions === void 0) { toastOptions = {}; }
        if (onDismiss === void 0) { onDismiss = function () { }; }
        if (this.toast && (this.toast._state != 4))
            this.toast.dismiss();
        this.toast = this.toastCtrl.create(Object.assign({}, this.toastOptions, toastOptions));
        console.log(this.toast);
        this.toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        this.toast.present();
    };
    UtilitiesProvider.prototype.hideToast = function () {
        if (this.toast && (this.toast._state != 4))
            this.toast.dismiss();
    };
    UtilitiesProvider.prototype.showActionSheet = function (actionsheetOptions, onDismiss) {
        if (actionsheetOptions === void 0) { actionsheetOptions = {}; }
        if (onDismiss === void 0) { onDismiss = function () { }; }
        this.actionsheet = this.actionSheetCtrl.create(Object.assign({}, this.actionsheetOptions, actionsheetOptions));
        this.actionsheet.present();
    };
    UtilitiesProvider.prototype.hideActionSheet = function () {
        this.actionsheet.dismiss();
    };
    UtilitiesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"]])
    ], UtilitiesProvider);
    return UtilitiesProvider;
}());

//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__facebook_facebook__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__google_google__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http, platform, storage, constants, facebook, google) {
        this.http = http;
        this.platform = platform;
        this.storage = storage;
        this.constants = constants;
        this.facebook = facebook;
        this.google = google;
        //APIs
        this.SIGN_UP = "/signup";
        this.SIGN_IN = "/login";
        this.SOCIAL_LOGIN = "/social-login";
        this.RESET_PASS = "/forgot-password";
        this.LOGOUT = "/logout";
        this.CHANGE_PASS = "/change-password";
        this.TOGGLE_NOTIFICATION = "/update-notification";
        this.ARTICLE = "/article?page=";
        // private PRIVACY_POLICY = "https://dev.clavora.com/clavora/public/privacy-policy.html"; 
        // private TERMS = "https://dev.clavora.com/clavora/public/terms.html"; 
        this.PRIVACY_POLICY = "/privacy-policy";
        this.TERMS = "/terms";
        this.NOTIFICATIONS = "/notifications?page=";
        this.NOTIFICATIONS_COUNT = "/notification-count";
        this.BUY_VITAMIN = "/buy-vitamin/";
        this.ACCEPT_TERMS = "/update-term-status";
        this.RELATIONS = "/relations";
        this.PROFILES = "/profiles";
        console.log('Hello UserProvider Provider');
    }
    Object.defineProperty(UserProvider.prototype, "userData", {
        get: function () {
            return this._userData;
        },
        set: function (data) {
            if (data != undefined)
                this.storage.set('userData', data);
            else
                this.storage.remove('userData');
            this._userData = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "loginType", {
        get: function () {
            return this._loginType;
        },
        set: function (data) {
            if (data != undefined)
                this.storage.set('loginType', data);
            else
                this.storage.remove('loginType');
            this._loginType = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "isFirstRunComplete", {
        get: function () {
            return this._isFirstRunComplete;
        },
        set: function (data) {
            this._isFirstRunComplete = data;
            this.storage.set('isFirstRunComplete', data).then(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        },
        enumerable: true,
        configurable: true
    });
    UserProvider.prototype.getHomePage = function () {
        console.log(this.userData);
        return /* this.userData.isCourseCreated == 0 ? this.constants.PAGES.CHOOSE_CONSUMPTION :  */ this.userData.isFirstLogin && this.userData.isFirstLogin == "1" ? this.constants.PAGES.WELCOME : this.constants.PAGES.TABS;
    };
    UserProvider.prototype.fetchStoredDetails = function (callback) {
        var _this = this;
        this.storage.get('userData').then(function (data) {
            console.log(data);
            if (data) {
                _this.userData = data;
                _this.storage.get('loginType').then(function (data) {
                    console.log(data);
                    _this._loginType = data;
                }, function (error) {
                    console.log("error", error);
                });
                callback();
            }
            else {
                _this.storage.get('isFirstRunComplete').then(function (data) {
                    console.log(data);
                    _this._isFirstRunComplete = data;
                    callback();
                }, function (error) {
                    console.log("error", error);
                    callback();
                });
            }
        }, function (error) {
            console.log("error", error);
            callback();
        });
    };
    UserProvider.prototype.clearData = function () {
        switch (this.loginType) {
            case 'google':
                this.google.removeGoogleUser();
                this.google.doGoogleLogout();
                break;
            case 'facebook':
                this.facebook.removeFacebookUser();
                this.facebook.doFacebookLogout();
                break;
        }
        this.loginType = undefined;
        this.userData = undefined;
        this.storage.remove('userData');
        this.storage.remove('loginType');
    };
    UserProvider.prototype.signUp = function (email, password) {
        var param = {
            "email": email,
            "password": password
        };
        return this.http.post(this.SIGN_UP, param);
    };
    UserProvider.prototype.login = function (email, password) {
        var _this = this;
        var param = {
            email: email,
            password: password,
            deviceType: this.platform.is('ios') ? "IPHONE" : "ANDROID",
            "deviceToken": this.registrationToken
        };
        return this.http.post(this.SIGN_IN, param).map(function (resp) {
            console.log(resp);
            _this.loginType = "email";
            _this.userData = resp.result.user;
        });
    };
    UserProvider.prototype.socialLogin = function (socialInfo) {
        var _this = this;
        var param = {
            deviceType: this.platform.is('ios') ? "IPHONE" : "ANDROID",
            deviceToken: this.registrationToken,
            authProvider: socialInfo.source,
            socialId: socialInfo.sourceId,
            accessToken: socialInfo.socialToken
        };
        return this.http.post(this.SOCIAL_LOGIN, param).map(function (resp) {
            console.log(resp);
            _this.loginType = socialInfo.source;
            _this.userData = resp.result.user;
        });
    };
    UserProvider.prototype.resetPassword = function (email) {
        return this.http.post(this.RESET_PASS, { email: email });
    };
    UserProvider.prototype.logout = function () {
        return this.http.post(this.LOGOUT);
    };
    UserProvider.prototype.toggleNotification = function (enable) {
        return this.http.post(this.TOGGLE_NOTIFICATION, {
            "status": enable ? 1 : 0
        });
    };
    UserProvider.prototype.getPrivacyPolicy = function () {
        return this.http.get(this.PRIVACY_POLICY);
    };
    UserProvider.prototype.getTerms = function () {
        return this.http.get(this.TERMS);
    };
    UserProvider.prototype.getArticle = function (page) {
        return this.http.get(this.ARTICLE + page, null, page > 1 ? false : true);
    };
    UserProvider.prototype.getNotification = function (pageNum, showLoader) {
        return this.http.get(this.NOTIFICATIONS + pageNum, null, showLoader);
    };
    UserProvider.prototype.handleNotification = function (page, data, navCtrl) {
        navCtrl.push(page, { notificationData: data });
    };
    UserProvider.prototype.getNotificationCount = function () {
        return this.http.get(this.NOTIFICATIONS_COUNT, null, true);
    };
    UserProvider.prototype.changePassword = function (oldPass, newPass, confirmPass) {
        return this.http.post(this.CHANGE_PASS, {
            oldPassword: oldPass,
            password: newPass,
            confirmPassword: confirmPass
        });
    };
    UserProvider.prototype.buyVitamin = function (vitaminId) {
        return this.http.post(this.BUY_VITAMIN + vitaminId);
    };
    UserProvider.prototype.acceptTerms = function () {
        return this.http.post(this.ACCEPT_TERMS);
    };
    UserProvider.prototype.relations = function () {
        return this.http.get(this.RELATIONS);
    };
    UserProvider.prototype.profiles = function () {
        return this.http.get(this.PROFILES);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__facebook_facebook__["a" /* FacebookProvider */],
            __WEBPACK_IMPORTED_MODULE_6__google_google__["a" /* GoogleProvider */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePlanManagementPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProfilePopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_questionnaire_questionnaire__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the CoursePlanManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoursePlanManagementPage = /** @class */ (function () {
    function CoursePlanManagementPage(
        // public navCtrl: NavController,
        navParams, app, firebaseAnalytics, platform, user, constants, questionnaire, utilities, popoverCtrl) {
        this.navParams = navParams;
        this.app = app;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.user = user;
        this.constants = constants;
        this.questionnaire = questionnaire;
        this.utilities = utilities;
        this.popoverCtrl = popoverCtrl;
        this.courses = [];
        this.loaded = false;
        this.profiles = [];
    }
    CoursePlanManagementPage.prototype.avoidLastSlideIssue = function (ev) {
        console.log(ev);
        console.log(this.slide.getActiveIndex());
        if (this.slide.getActiveIndex() > this.courses.length - 1) {
            this.slide.slideTo(this.courses.length - 1);
        }
    };
    CoursePlanManagementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursePlanManagementPage');
    };
    CoursePlanManagementPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter CoursePlanManagementPage', this.firebaseAnalytics);
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Course Plan Management" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        this.getProfiles();
    };
    CoursePlanManagementPage.prototype.getProfiles = function () {
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
                _this.getCourses();
            }
            else
                _this.loaded = true;
        }, function (err) {
            console.log(err);
        });
    };
    CoursePlanManagementPage.prototype.getCourses = function () {
        var _this = this;
        this.courses = [];
        this.questionnaire.getCoursePlans(this.user.selectedProfile)
            .subscribe(function (resp) {
            _this.loaded = true;
            console.log(resp);
            _this.courses = resp.result;
            setTimeout(function () { _this.slide.slideTo(0); }, 500);
            var notificationData = _this.navParams.get('notificationData');
            if (notificationData && notificationData.courseId) {
                console.log(notificationData.courseId);
                var _loop_1 = function (i) {
                    var course = _this.courses[i];
                    console.log(course);
                    if (parseInt(course.id) == notificationData.courseId) {
                        console.log("found");
                        setTimeout(function () { _this.slide.slideTo(i); }, 1500);
                        return "break";
                    }
                };
                for (var i = 0; i < _this.courses.length; i++) {
                    var state_1 = _loop_1(i);
                    if (state_1 === "break")
                        break;
                }
            }
        }, function (err) {
            _this.loaded = true;
            console.log(err);
        });
    };
    CoursePlanManagementPage.prototype.onCourse = function (course) {
        this.navCtrl.push(this.constants.PAGES.COURSE_PLAN, course);
    };
    CoursePlanManagementPage.prototype.getDuration = function (startDate, endDate) {
        return Math.ceil(__WEBPACK_IMPORTED_MODULE_7_moment__["duration"](__WEBPACK_IMPORTED_MODULE_7_moment__(endDate).diff(__WEBPACK_IMPORTED_MODULE_7_moment__(startDate))).as('days'));
    };
    CoursePlanManagementPage.prototype.onComplete = function (event, course) {
        var _this = this;
        event.stopPropagation();
        if (this.checkComplete(course.isCompleted, course.endDate)) {
            this.utilities.showAlert({
                subTitle: this.constants.LANGS.PAGE_LABEL_COMPLETE_TITLE,
                message: this.constants.LANGS.PAGE_LABEL_COMPLETE_SUBTITLE,
                buttons: [
                    {
                        text: this.constants.LANGS.LABEL_YES,
                        handler: function (data) {
                            _this.markComplete(course, 1);
                        }
                    },
                    {
                        text: this.constants.LANGS.LABEL_NO,
                        // role: 'cancel',
                        handler: function (data) {
                            console.log('canceled');
                            _this.markComplete(course, 2);
                        }
                    }
                ]
            });
        }
    };
    CoursePlanManagementPage.prototype.markComplete = function (course, status) {
        var _this = this;
        this.questionnaire.markComplete(course.id, status)
            .subscribe(function (resp) {
            _this.utilities.showToast({ message: resp.message });
            _this.courses.forEach(function (element, index) {
                if (element.id == resp.result.id)
                    _this.courses[index] = resp.result;
            });
        }, function (err) {
            console.log(err);
        });
    };
    CoursePlanManagementPage.prototype.checkComplete = function (isCompleted, endDate) {
        return isCompleted == 0 && __WEBPACK_IMPORTED_MODULE_7_moment__().isSameOrAfter(__WEBPACK_IMPORTED_MODULE_7_moment__(endDate));
    };
    CoursePlanManagementPage.prototype.openQuestionnaire = function () {
        // this.app.getRootNav().setRoot(this.constants.PAGES.CHOOSE_CONSUMPTION);
        this.navCtrl.push(this.constants.PAGES.CHOOSE_CONSUMPTION);
    };
    CoursePlanManagementPage.prototype.onShare = function (url) {
        window.open("mailto:?subject=Course Plan Details&body=Hi, %0A %0A Please find the link to recommended  Course Plan from Clavora. %0A %0A " + url, "_system");
    };
    CoursePlanManagementPage.prototype.sharePlans = function () {
        var emailContent = "mailto:?subject=Course Plan Details&body=Hi, %0A %0A Please find the links to recommended Course Plans from Clavora.";
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var course = _a[_i];
            emailContent += " %0A %0A " + course.pdfLink;
        }
        window.open(emailContent, "_system");
    };
    CoursePlanManagementPage.prototype.getVitamin = function (vitamin) {
        return vitamin.replace("Vitamin ", "Vit ");
    };
    CoursePlanManagementPage.prototype.openProfilePopover = function (event) {
        var _this = this;
        console.log("openProfilePopover");
        var popover = this.popoverCtrl.create(ProfilePopover, { options: this.profiles, selectedProfile: this.user.selectedProfile }, { cssClass: "choose-my-plan" });
        popover.present();
        popover.onDidDismiss(function (data) {
            if (data) {
                console.log(data.selectedOption);
                _this.user.selectedProfile = data.selectedOption.id;
                _this.getCourses();
            }
        });
    };
    Object.defineProperty(CoursePlanManagementPage.prototype, "navCtrl", {
        get: function () {
            return this.app.getRootNav();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])("slides"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Slides"])
    ], CoursePlanManagementPage.prototype, "slide", void 0);
    CoursePlanManagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-course-plan-management',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/course-plan-management/course-plan-management.html"*/'<!--\n  Generated template for the CoursePlanManagementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{constants.LANGS.LABEL_COURSE_PLAN}}</ion-title>\n    <ion-buttons end>\n        <button ion-button clear tappable (click)="openProfilePopover()">\n          <img alt="" class="profile" src="assets/icon/profile.svg">\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="no-course" *ngIf="loaded && courses.length==0">\n    <div>\n      <img alt="" class="image-center" src="assets/imgs/course-plan-management/thumb.svg">\n    </div>\n    <div class="congrats-title">{{ user.userData.isCourseCreated == 0|| user.userData.isCourseCreated == "0" ? constants.LANGS.PAGE_LABEL_CONGRATS_0 : constants.LANGS.PAGE_LABEL_CONGRATS_1 }}</div>\n    <default-button class="survey-button" block [text]="constants.LANGS.LABEL_SURVEY" (click)="openQuestionnaire()">\n      </default-button>\n  </div>\n\n  <div class="container" *ngIf="loaded && courses.length > 0">\n    <div class="slide-container">\n      <ion-slides #slides pager (ionSlideDidChange)="avoidLastSlideIssue($event)">\n        <ion-slide *ngFor="let course of courses" [navPush]="constants.PAGES.COURSE_PLAN" [navParams]="course">\n          <img alt="" class="share" src="assets/imgs/course-plan-management/share.svg" tappable (click)="sharePlans()">\n          <div class="course-name">{{course.name}}</div>\n          <div class="corse-description">"{{course.description}}"</div>\n          <div class="vitamin-container">\n            <div class="vitamin-name" [ngStyle]="{\'background-color\':course.vitamin.backgroundColor}">{{getVitamin(course.vitamin.name)}}</div>\n          </div>\n          <div class="date-container">\n            <div class="start-date-container">\n              <div class="start-date">{{constants.LANGS.PAGE_LABEL_START_DATE}}</div>\n              <div class="start-date-value">{{course.startDate | amFromUtc | amLocal | amDateFormat:\'ll\' }}</div>\n            </div>\n            <div class="end-date-container">\n              <div class="end-date">{{constants.LANGS.PAGE_LABEL_END_DATE}}</div>\n              <div class="end-date-value">{{course.endDate | amFromUtc | amLocal | amDateFormat:\'ll\' }}</div>\n            </div>\n          </div>\n          <div class="duration-container">\n            <div class="duration">{{constants.LANGS.PAGE_LABEL_DURATION}}</div>\n            <div class="value">{{getDuration(course.startDate, course.endDate) + \' \' + constants.LANGS.LABEL_DAYS }}</div>\n          </div>\n          <div class="line"></div>\n          <div class="status-container">\n            <div class="status">{{course.isCompleted == 0? constants.LANGS.LABEL_IN_PROGRESS:constants.LANGS.LABEL_COMPLETED_ON}}</div>\n            <div class="value" *ngIf="course.isCompleted == 1">{{course.completedOn}}</div>\n          </div>\n          <div class="mark-complete-container">\n            <div class="mark-complete" [class.disabled]="!checkComplete(course.isCompleted, course.endDate)" tappable (click)="onComplete($event, course)">\n              <img alt="" src="assets/imgs/course-plan-management/tick.svg">{{constants.LANGS.PAGE_LABEL_MARK_COMPLETE}}\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class="bottom-container">\n      <default-button (click)="openQuestionnaire()" class="survey-button" block [text]="constants.LANGS.LABEL_SURVEY_AGAIN">\n      </default-button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/course-plan-management/course-plan-management.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_questionnaire_questionnaire__["a" /* QuestionnaireProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__["a" /* UtilitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["PopoverController"]])
    ], CoursePlanManagementPage);
    return CoursePlanManagementPage;
}());

var ProfilePopover = /** @class */ (function () {
    function ProfilePopover(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        console.log(navParams.data);
    }
    ProfilePopover.prototype.selectOption = function (option) {
        this.viewCtrl.dismiss({ selectedOption: option });
    };
    ProfilePopover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'profile-dropdown',
            template: "\n    <ion-list no-lines>\n      <button ion-item [ngClass]=\"{'active': navParams.data.selectedProfile == option.id}\" (click)=\"selectOption(option)\" *ngFor=\"let option of navParams.data.options\">{{ option.name }}</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"]])
    ], ProfilePopover);
    return ProfilePopover;
}());

//# sourceMappingURL=course-plan-management.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChooseProfilePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProfilePopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RelationPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_utilities_utilities__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_questionnaire_questionnaire__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the ChooseProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseProfilePage = /** @class */ (function () {
    function ChooseProfilePage(navCtrl, navParams, constants, user, popoverCtrl, firebaseAnalytics, platform, questionnaire, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.constants = constants;
        this.user = user;
        this.popoverCtrl = popoverCtrl;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.questionnaire = questionnaire;
        this.utility = utility;
        this.profiles = [];
        this.relations = [];
        this.personName = "";
        this.yourName = "";
        this.duplicateName = false;
    }
    ChooseProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseProfilePage');
    };
    ChooseProfilePage.prototype.ionViewWillEnter = function () {
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Choose Profile" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        this.getRelations();
        this.getProfiles();
        this.yourName = this.user.userData.name;
    };
    ChooseProfilePage.prototype.getRelations = function () {
        var _this = this;
        this.user.relations()
            .subscribe(function (resp) {
            console.log(resp);
            _this.relations = resp.result;
        }, function (err) {
            console.log(err);
        });
    };
    ChooseProfilePage.prototype.profileAlreadyExist = function (checkSelf) {
        var _this = this;
        this.duplicateName = false;
        if ((checkSelf && this.profiles.find(function (el) {
            console.log("self:", el);
            console.log("self:", _this.yourName);
            console.log("self:", el.name.toLowerCase() == _this.yourName.trim().toLowerCase());
            return el.name.toLowerCase() == _this.yourName.trim().toLowerCase();
        })) || (!checkSelf && ((this.yourName && this.personName.trim().toLowerCase() == this.yourName.trim().toLowerCase()) || this.profiles.find(function (el) {
            console.log(el);
            console.log("other:", el.name.toLowerCase() == _this.personName.trim().toLowerCase());
            return el.name.toLowerCase() == _this.personName.trim().toLowerCase();
        })))) {
            console.log("other:", this.personName.trim().toLowerCase() == this.yourName.trim().toLowerCase());
            this.duplicateName = true;
        }
        console.log(this.duplicateName);
        return this.duplicateName;
    };
    ChooseProfilePage.prototype.getProfiles = function () {
        var _this = this;
        this.user.profiles()
            .subscribe(function (resp) {
            console.log(resp);
            _this.selfProfile = resp.result.find(function (profile) { return profile.isSelf == 1; });
            _this.profiles = resp.result.filter(function (profile) { return profile.isSelf == 0; });
            // this.profiles;
            _this.profiles.unshift({
                id: 0,
                name: "+ Add New Person"
            });
        }, function (err) {
            console.log(err);
        });
    };
    ChooseProfilePage.prototype.selectOption = function (i) {
        this.selectedOption = i;
    };
    ChooseProfilePage.prototype.onNext = function () {
        var _this = this;
        this.questionnaire.resetAnswers();
        var params = {
            vitaminId: this.navParams.data.selectedVitamin,
            isOwner: 1,
            name: this.yourName,
            relation: "Self",
            profileId: 0
        };
        if (this.selfProfile)
            params.profileId = this.selfProfile.id;
        if (this.selectedOption == 2) {
            params.profileId = this.selectedProfile;
            params.name = this.personName;
            params.relation = this.selectedRelation;
            params.isOwner = 0;
        }
        this.questionnaire.getQuestions(params).subscribe(function (resp) {
            console.log(resp);
            var questions = resp.result[0].questions /* .splice(0,2) */;
            questions = _this.questionnaire.prepareAnswers(questions);
            if (Object.keys(_this.questionnaire.answers).length > 0) {
                _this.utility.showAlert({
                    title: "",
                    subTitle: _this.constants.LANGS.PAGE_LABEL_START_COURSE_AGAIN,
                    buttons: [
                        {
                            text: _this.constants.LANGS.LABEL_YES,
                            handler: function (data) {
                                _this.navCtrl.push(_this.constants.PAGES.QUESTIONAIRE, { questions: questions }, { animate: false });
                            }
                        },
                        {
                            text: _this.constants.LANGS.LABEL_NO,
                            role: 'cancel',
                            handler: function (data) {
                                _this.questionnaire.answers = {};
                                console.log('canceled');
                            }
                        }
                    ]
                });
            }
            else {
                _this.navCtrl.push(_this.constants.PAGES.QUESTIONAIRE, { questions: questions });
            }
            console.log(questions);
        }, function (err) {
            console.log(err);
            _this.navCtrl.pop();
        });
    };
    ChooseProfilePage.prototype.openProfilePopover = function (event) {
        var _this = this;
        console.log("openProfilePopover");
        var popover = this.popoverCtrl.create(AddProfilePopover, { options: this.profiles, selectedProfile: this.selectedProfile }, { cssClass: "choose-profile" });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            if (data) {
                console.log(data.selectedOption);
                _this.selectedProfile = data.selectedOption.id;
                if (_this.selectedProfile > 0) {
                    _this.personName = data.selectedOption.name;
                    _this.selectedRelation = data.selectedOption.relation;
                }
                else {
                    _this.personName = "";
                    _this.selectedRelation = "";
                }
            }
        });
    };
    ChooseProfilePage.prototype.openRelationPopover = function (event) {
        var _this = this;
        console.log("openRelationPopover");
        var popover = this.popoverCtrl.create(RelationPopover, { options: this.relations, selectedRelation: this.selectedRelation }, { cssClass: "choose-profile" });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            if (data) {
                console.log(data.selectedOption);
                _this.selectedRelation = data.selectedOption.relation;
            }
        });
    };
    ChooseProfilePage.prototype.getSelectedProfile = function () {
        var _this = this;
        // if(this.selectedProfile > 0)
        return this.profiles.find(function (profile) { return profile.id == _this.selectedProfile; }).name;
        // else
        //   return "";
    };
    ChooseProfilePage.prototype.getSelectedRelation = function () {
        return this.selectedRelation ? this.selectedRelation : "";
    };
    ChooseProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-choose-profile',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/choose-profile/choose-profile.html"*/'<!--\n  Generated template for the ChooseProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <img alt="" class="back-arrow-custom" navPop src="assets/icon/back-arrow.svg">\n  <div class="container">\n    <div class="title">\n      {{constants.LANGS.PAGE_TITLE_ADD_COURSE_PLAN}}\n    </div>\n    <ul class="options">\n      <li class="radio-option" (click)="selectOption(1);">\n        <img alt="" [hidden]="selectedOption == 1">\n        <img alt="" class="active" [hidden]="selectedOption != 1"> {{constants.LANGS.PAGE_LABEL_SELF}}\n      </li>\n      <li class="radio-option" (click)="selectOption(2);">\n        <img alt="" [hidden]="selectedOption == 2">\n        <img alt="" class="active" [hidden]="selectedOption != 2"> {{constants.LANGS.PAGE_LABEL_OTHER}}\n      </li>\n    </ul>\n    <div class="sub-title">\n      {{constants.LANGS.PAGE_LABEL_USER_DETAILS}}\n    </div>\n    <ion-item class="your-name" *ngIf="selectedOption == 1">\n      <ion-input type="text" [readonly]="user.userData?.name.length > 0" [(ngModel)]="yourName" autocorrect="on"\n        autocomplete="on" [placeholder]="constants.LANGS.PAGE_LABEL_YOUR_NAME"></ion-input>\n    </ion-item>\n    <div class="field-validation-error" style="position: relative; width: 100%;" *ngIf="selectedOption == 1 && profileAlreadyExist(true)">\n      {{constants.ERRORS.INVALID_PROFILE_NAME}}\n    </div>\n    <div *ngIf="selectedOption == 2">\n      <div class="drop-container">\n        <div class="option" (click)="openProfilePopover($event)">\n          <div class="placeholder" *ngIf="!selectedProfile">{{constants.LANGS.PAGE_LABEL_PERSON}}</div>\n          <div class="value" *ngIf="selectedProfile">{{getSelectedProfile()}}</div>\n          <img alt="" class="dropdown" src="assets/icon/dropdown.svg">\n        </div>\n      </div>\n      <ion-item class="person-name" *ngIf="selectedProfile == 0">\n        <ion-input type="text" [(ngModel)]="personName" autocorrect="on" autocomplete="on" [placeholder]="constants.LANGS.PAGE_LABEL_PERSON_NAME"></ion-input>\n      </ion-item>\n      <div class="field-validation-error" *ngIf="selectedProfile == 0 && profileAlreadyExist()">\n        {{constants.ERRORS.INVALID_PROFILE_NAME}}\n      </div>\n      <div class="drop-container" *ngIf="selectedProfile == 0">\n        <div class="option" (click)="openRelationPopover($event)">\n          <div class="placeholder" *ngIf="!selectedRelation">{{constants.LANGS.PAGE_LABEL_RELATION}}</div>\n          <div class="value" *ngIf="selectedRelation">{{getSelectedRelation()}}</div>\n          <img alt="" class="dropdown" src="assets/icon/dropdown.svg">\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <default-button [attr.disabled]="!selectedOption || duplicateName || (selectedOption == 1 && !yourName) || (selectedOption == 2 && (!selectedProfile || selectedProfile == 0) && (!selectedRelation || !personName))"\n    block class="buy-now" [text]="constants.LANGS.LABEL_NEXT" tappable (click)="onNext()"></default-button>\n</ion-footer>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/choose-profile/choose-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__providers_questionnaire_questionnaire__["a" /* QuestionnaireProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_utilities_utilities__["a" /* UtilitiesProvider */]])
    ], ChooseProfilePage);
    return ChooseProfilePage;
}());

var AddProfilePopover = /** @class */ (function () {
    function AddProfilePopover(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        console.log(navParams.data);
    }
    AddProfilePopover.prototype.selectOption = function (option) {
        this.viewCtrl.dismiss({ selectedOption: option });
    };
    AddProfilePopover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'add-profile-dropdown',
            template: "\n    <ion-list no-lines>\n      <button ion-item [ngClass]=\"{'active': navParams.data.selectedProfile == option.id}\" (click)=\"selectOption(option)\" *ngFor=\"let option of navParams.data.options\">{{ option.name }}</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"]])
    ], AddProfilePopover);
    return AddProfilePopover;
}());

var RelationPopover = /** @class */ (function () {
    function RelationPopover(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        console.log(navParams.data);
    }
    RelationPopover.prototype.selectOption = function (option) {
        this.viewCtrl.dismiss({ selectedOption: option });
    };
    RelationPopover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'relation-dropdown',
            template: "\n    <ion-list style=\"margin-bottom: 0;\">\n      <button ion-item [ngClass]=\"{'active': navParams.data.selectedRelation == option.relation}\" (click)=\"selectOption(option)\" *ngFor=\"let option of navParams.data.options\">{{ option.relation }}</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"]])
    ], RelationPopover);
    return RelationPopover;
}());

//# sourceMappingURL=choose-profile.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionnairePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiChoicePopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_utilities_utilities__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_questionnaire_questionnaire__ = __webpack_require__(69);
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
 * Generated class for the QuestionnairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionnairePage = /** @class */ (function () {
    function QuestionnairePage(navCtrl, navParams, questionnaire, firebaseAnalytics, platform, utility, constants, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questionnaire = questionnaire;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.utility = utility;
        this.constants = constants;
        this.popoverCtrl = popoverCtrl;
        this.currentQuestionIndex = 0;
        this.QUESTION_TYPE_TRUE_FALSE = __WEBPACK_IMPORTED_MODULE_4__app_constant__["e" /* QUESTION_TYPE_TRUE_FALSE */];
        this.QUESTION_TYPE_MULTI_OPTIONS = __WEBPACK_IMPORTED_MODULE_4__app_constant__["d" /* QUESTION_TYPE_MULTI_OPTIONS */];
        // questions = [];
        this.questions = [];
    }
    QuestionnairePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionnairePage');
        if (this.platform.is('cordova'))
            this.firebaseAnalytics.logEvent('page_view', { page: "Questionaire" })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.error(error); });
        this.questions = this.navParams.data.questions;
        if (Object.keys(this.questionnaire.answers).length > 0) {
            this.openSummary(true);
        }
    };
    QuestionnairePage.prototype.showInfo = function (ev, description) {
        ev.stopPropagation();
        this.utility.showInfoAlert({
            title: "",
            subTitle: description,
            buttons: []
        });
    };
    QuestionnairePage.prototype.addAnswer = function (question, isYes) {
        var yesAnswerIndex = question.questionAnswer[0].value.toLowerCase() == 'no' ? 1 : 0;
        var noAnswerIndex = yesAnswerIndex ? 0 : 1;
        console.log(question.questionAnswer[0].value.toLowerCase() == 'no' ? 1 : 0);
        console.log(yesAnswerIndex);
        console.log(noAnswerIndex);
        console.log(question.questionAnswer[0].value.toLowerCase() == 'no');
        this.questionnaire.addAnswer(question.id, question.questionAnswer[isYes ? yesAnswerIndex : noAnswerIndex]);
    };
    QuestionnairePage.prototype.openMultiChoicePopover = function (event, question) {
        var _this = this;
        var popover = this.popoverCtrl.create(MultiChoicePopover, { options: question.questionAnswer, selectedAnswer: this.questionnaire.answers[question.id] }, { cssClass: "questions" });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            if (data) {
                console.log(data.selectedOption);
                var nextQuestion = _this.questions[_this.currentQuestionIndex + 1];
                var lastChosenAnswer = _this.questionnaire.answers[data.selectedOption.questionId];
                if (data.selectedOption.relQuestions) {
                    console.log(lastChosenAnswer ? lastChosenAnswer.relatedQuestionId : "none");
                    _this.questions.splice(_this.currentQuestionIndex + 1, lastChosenAnswer && lastChosenAnswer.relatedQuestionId != "" ? 1 : 0, data.selectedOption.relQuestions);
                }
                else {
                    if (nextQuestion && lastChosenAnswer && nextQuestion.id == lastChosenAnswer.relatedQuestionId) {
                        console.log(lastChosenAnswer);
                        console.log(nextQuestion.id);
                        delete _this.questionnaire.answers[lastChosenAnswer.relatedQuestionId];
                        console.log(_this.questionnaire.answers);
                        _this.questions.splice(_this.currentQuestionIndex + 1, 1);
                    }
                }
                _this.questionnaire.addAnswer(data.selectedOption.questionId, data.selectedOption);
            }
        });
    };
    QuestionnairePage.prototype.changeQuestion = function (changedIndex) {
        // return if the index out of bound
        if (changedIndex == -1 || changedIndex == this.questions.length) {
            return;
        }
        this.currentQuestionIndex = changedIndex;
    };
    QuestionnairePage.prototype.openSummary = function (dontAnimate) {
        this.navCtrl.push(this.constants.PAGES.SUMMARY, { questions: this.questions }, { animate: !dontAnimate });
    };
    QuestionnairePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPage"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-Questionnaire',template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/questionnaire/Questionnaire.html"*/'<!--\n  Generated template for the QuestionnairePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{constants.LANGS.PAGE_TITLE_CHOOSE_CONSUMPTION}}</ion-title>\n    <ion-buttons end *ngIf="currentQuestionIndex==questions.length-1">\n      <default-button block [text]="constants.LANGS.LABEL_SUBMIT" [attr.disabled]="!questionnaire.answers[questions[currentQuestionIndex].id]"\n        text-uppercase (click)="openSummary()"></default-button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- {{ questions[currentQuestionIndex].title }} -->\n  <!-- TRUE FALSE QUESTION -->\n  <div *ngIf=" questions.length>0 && questions[currentQuestionIndex].type == QUESTION_TYPE_TRUE_FALSE" class="true-false-container">\n\n    <div class="question-1">{{ questions[currentQuestionIndex].question }} \n      <img alt="" class="info info-icon" *ngIf="questions[currentQuestionIndex].description" (click)="showInfo($event, questions[currentQuestionIndex].description)"\n        src="assets/icon/info.png">\n      </div>\n    <div class="true-false-option" (click)="addAnswer(questions[currentQuestionIndex], true)" [ngClass]="{\'gradient-option\': questionnaire.answers[questions[currentQuestionIndex].id] && questionnaire.answers[questions[currentQuestionIndex].id].value.toLowerCase() != \'no\' }">\n      <span>{{constants.LANGS.LABEL_A}}</span> {{constants.LANGS.LABEL_YES}}\n    </div>\n    <div (click)="addAnswer(questions[currentQuestionIndex], false)" [ngClass]="{\'gradient-option\': questionnaire.answers[questions[currentQuestionIndex].id] && questionnaire.answers[questions[currentQuestionIndex].id].value.toLowerCase() == \'no\'}"\n      class="true-false-option">\n      <span>{{constants.LANGS.LABEL_B}}</span> {{constants.LANGS.LABEL_NO}}\n    </div>\n  </div>\n\n  <!-- MULTI CHOICE QUESTION -->\n  <div *ngIf="questions.length>0 && questions[currentQuestionIndex].type == QUESTION_TYPE_MULTI_OPTIONS" class="drop-container">\n    <div class="gradient-option" (click)="openMultiChoicePopover($event, questions[currentQuestionIndex])">\n      <div class="label">{{constants.LANGS.LABEL_A}}</div>\n      <div class="question">{{questions[currentQuestionIndex].question}}</div>\n      <img alt="" class="info info-icon" [ngStyle]="{\'visibility\':(!questions[currentQuestionIndex].description?\'hidden\':\'visible\')}" (click)="showInfo($event, questions[currentQuestionIndex].description)" src="assets/icon/info.png">\n      <img alt="" class="dropdown" src="assets/icon/dropdown.svg">\n    </div>\n  </div>\n\n</ion-content>\n\n\n<ion-footer *ngIf="questions.length>0">\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button round (click)="changeQuestion(currentQuestionIndex-1)" [disabled]="currentQuestionIndex==0">\n        <img alt="" class="arrow" src="assets/icon/page-arrow.svg">\n      </button>\n      <!-- <button ion-button round>&lt;</button> -->\n    </ion-buttons>\n    <ion-title text-center>{{currentQuestionIndex+1}}/{{questions.length}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button round (click)="changeQuestion(currentQuestionIndex+1)" [disabled]="currentQuestionIndex==questions.length-1 || !questionnaire.answers[questions[currentQuestionIndex].id]">\n        <img alt="" class="arrow arrow-right" src="assets/icon/page-arrow.svg">\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/pages/questionnaire/Questionnaire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__providers_questionnaire_questionnaire__["a" /* QuestionnaireProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1__providers_utilities_utilities__["a" /* UtilitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["PopoverController"]])
    ], QuestionnairePage);
    return QuestionnairePage;
}());

var MultiChoicePopover = /** @class */ (function () {
    function MultiChoicePopover(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        console.log(navParams.data);
    }
    MultiChoicePopover.prototype.selectOption = function (option) {
        this.navParams.data.selectedAnswer = option;
        this.viewCtrl.dismiss({ selectedOption: option });
    };
    MultiChoicePopover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'answer-dropdown',
            template: "\n    <ion-list no-lines>\n      <button ion-item [ngClass]=\"{'gradient-option': navParams.data.selectedAnswer && navParams.data.selectedAnswer.id==option.id}\" (click)=\"selectOption(option)\" *ngFor=\"let option of navParams.data.options\">{{ option.value + ' ' + option.valueUnit }}</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], MultiChoicePopover);
    return MultiChoicePopover;
}());

//# sourceMappingURL=Questionnaire.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(494);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_choose_profile_choose_profile__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_course_plan_management_course_plan_management__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_facebook_facebook__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_google_google__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_SecureHttpInterceptor__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_push__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_questionnaire_Questionnaire__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_http_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_utilities_utilities__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_questionnaire_questionnaire__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_moment__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_fabric__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_1__pages_choose_profile_choose_profile__["a" /* AddProfilePopover */],
                __WEBPACK_IMPORTED_MODULE_16__pages_questionnaire_Questionnaire__["a" /* MultiChoicePopover */],
                __WEBPACK_IMPORTED_MODULE_2__pages_course_plan_management_course_plan_management__["b" /* ProfilePopover */],
                __WEBPACK_IMPORTED_MODULE_1__pages_choose_profile_choose_profile__["c" /* RelationPopover */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24_ngx_moment__["a" /* MomentModule */],
                __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {
                    mode: "ios",
                    backButtonText: "",
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/buy-vitamin/buy-vitamin.module#BuyVitaminPageModule', name: 'BuyVitaminPage', segment: 'buy-vitamin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-consumption/choose-consumption.module#ChooseConsumptionPageModule', name: 'ChooseConsumptionPage', segment: 'choose-consumption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-profile/choose-profile.module#ChooseProfilePageModule', name: 'ChooseProfilePage', segment: 'choose-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coming-soon/coming-soon.module#ComingSoonPageModule', name: 'ComingSoonPage', segment: 'coming-soon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-admin/contact-admin.module#ContactAdminPageModule', name: 'ContactAdminPage', segment: 'contact-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/course-plan-management/course-plan-management.module#CoursePlanManagementPageModule', name: 'CoursePlanManagementPage', segment: 'course-plan-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/course-plan/course-plan.module#CoursePlanPageModule', name: 'CoursePlanPage', segment: 'course-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/health-article-detail/health-article-detail.module#HealthArticleDetailPageModule', name: 'HealthArticleDetailPage', segment: 'health-article-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/health-article/health-article.module#HealthArticlePageModule', name: 'HealthArticlePage', segment: 'health-article', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-signup/login-signup.module#LoginSignupPageModule', name: 'LoginSignupPage', segment: 'login-signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/no-internet/no-internet.module#NoInternetPageModule', name: 'NoInternetPage', segment: 'no-internet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding/onboarding.module#OnboardingPageModule', name: 'OnboardingPage', segment: 'onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questionnaire/questionnaire.module#QuestionnairePageModule', name: 'QuestionnairePage', segment: 'questionnaire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-image/show-image.module#ShowImagePageModule', name: 'ShowImagePage', segment: 'show-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/supplement-requirement/supplement-requirement.module#SupplementRequirementPageModule', name: 'SupplementRequirementPage', segment: 'supplement-requirement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey-summary/survey-summary.module#SurveySummaryPageModule', name: 'SurveySummaryPage', segment: 'survey-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tnc/tnc.module#TncPageModule', name: 'TncPage', segment: 'tnc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-player/video-player.module#VideoPlayerPageModule', name: 'VideoPlayerPage', segment: 'video-player', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_1__pages_choose_profile_choose_profile__["a" /* AddProfilePopover */],
                __WEBPACK_IMPORTED_MODULE_16__pages_questionnaire_Questionnaire__["a" /* MultiChoicePopover */],
                __WEBPACK_IMPORTED_MODULE_2__pages_course_plan_management_course_plan_management__["b" /* ProfilePopover */],
                __WEBPACK_IMPORTED_MODULE_1__pages_choose_profile_choose_profile__["c" /* RelationPopover */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_fabric__["a" /* Crashlytics */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["IonicErrorHandler"] },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_7__providers_SecureHttpInterceptor__["a" /* SecureHttpInterceptor */],
                    multi: true
                }, __WEBPACK_IMPORTED_MODULE_18__providers_constants_constants__["a" /* ConstantsProvider */],
                __WEBPACK_IMPORTED_MODULE_3__providers_facebook_facebook__["a" /* FacebookProvider */],
                __WEBPACK_IMPORTED_MODULE_5__providers_google_google__["a" /* GoogleProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_utilities_utilities__["a" /* UtilitiesProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_questionnaire_questionnaire__["a" /* QuestionnaireProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the QuestionnaireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionnaireProvider = /** @class */ (function () {
    function QuestionnaireProvider(http) {
        this.http = http;
        this.answers = {};
        this.profile = {};
        //APIs
        this.VITAMINS = "/vitamins";
        this.QUESTIONS = "/vitamin/$$/question?profileId=";
        this.SUBMIT_QUESTION = "/create-course";
        this.COURSES = "/courses";
        this.DOSE_TAKEN = "/dose-taken";
        this.MARK_COMPLETE = "/mark-complete/";
        this.CALENDAR_ACTIVITY = "/course-activity?startDate=$$&endDate=$$";
        console.log('Hello QuestionnaireProvider Provider');
    }
    QuestionnaireProvider.prototype.prepareAnswers = function (questions) {
        for (var _i = 0, questions_1 = questions; _i < questions_1.length; _i++) {
            var question = questions_1[_i];
            console.log(question);
            console.log(questions.length);
            for (var _a = 0, _b = question.questionAnswer; _a < _b.length; _a++) {
                var answer = _b[_a];
                console.log(answer);
                if (answer.enabled != "0") {
                    this.answers[question.id] = answer;
                    if (answer.relQuestions && answer.relQuestions != "") {
                        questions.splice(questions.indexOf(question) + 1, 0, answer.relQuestions);
                    }
                    break;
                }
            }
        }
        return questions;
    };
    QuestionnaireProvider.prototype.resetAnswers = function () {
        this.answers = {};
        this.profile = {};
    };
    QuestionnaireProvider.prototype.addAnswer = function (questionId, answer) {
        this.answers[questionId] = answer;
        console.log(this.answers);
    };
    QuestionnaireProvider.prototype.getVitamins = function () {
        return this.http.get(this.VITAMINS);
    };
    QuestionnaireProvider.prototype.submitQuestions = function () {
        var submittedAnswers = [];
        for (var i in this.answers) {
            var answer = {
                "questionId": this.answers[i].questionId,
                "id": this.answers[i].id,
                "value": this.answers[i].value,
                "calculation": this.answers[i].calculation
            };
            submittedAnswers.push(answer);
        }
        return this.http.post(this.SUBMIT_QUESTION, Object.assign({ questions: submittedAnswers }, this.profile));
    };
    QuestionnaireProvider.prototype.getQuestions = function (data) {
        this.profile = data;
        return this.http.get(this.QUESTIONS.replace('$$', data.vitaminId) + data.profileId);
    };
    QuestionnaireProvider.prototype.getCalendarActivity = function (startDate, lastDate, profileId) {
        var startMonth = (startDate.getMonth() + 1) > 9 ? (startDate.getMonth() + 1) : '0' + (startDate.getMonth() + 1);
        var startMonthDate = startDate.getDate() > 9 ? startDate.getDate() : '0' + startDate.getDate();
        startDate = startDate.getFullYear() + "-" + startMonth + "-" + startMonthDate;
        var lastMonth = (lastDate.getMonth() + 1) > 9 ? (lastDate.getMonth() + 1) : '0' + (lastDate.getMonth() + 1);
        var lastMonthDate = lastDate.getDate() > 9 ? lastDate.getDate() : '0' + lastDate.getDate();
        lastDate = lastDate.getFullYear() + "-" + lastMonth + "-" + lastMonthDate;
        var url = this.CALENDAR_ACTIVITY.replace('$$', startDate).replace('$$', lastDate);
        if (profileId)
            url = url + "&profileId=" + profileId;
        return this.http.get(url);
    };
    QuestionnaireProvider.prototype.getCoursePlans = function (profileId) {
        return this.http.get(this.COURSES + "?profileId=" + profileId);
    };
    QuestionnaireProvider.prototype.getCoursePlansOfDate = function (profileId, date, page) {
        return this.http.get(this.COURSES + "?profileId=" + profileId + "&date=" + date + "&page=" + page);
    };
    QuestionnaireProvider.prototype.doseTaken = function (id, status, date) {
        var param = {
            coursePlanId: id,
            status: status ? 0 : 1,
            date: date
        };
        return this.http.post(this.DOSE_TAKEN, param);
    };
    QuestionnaireProvider.prototype.markComplete = function (id, status) {
        return this.http.post(this.MARK_COMPLETE + id, { status: status });
    };
    QuestionnaireProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__http_http__["a" /* HttpProvider */]])
    ], QuestionnaireProvider);
    return QuestionnaireProvider;
}());

//# sourceMappingURL=questionnaire.js.map

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 318,
	"./af.js": 318,
	"./ar": 319,
	"./ar-dz": 320,
	"./ar-dz.js": 320,
	"./ar-kw": 321,
	"./ar-kw.js": 321,
	"./ar-ly": 322,
	"./ar-ly.js": 322,
	"./ar-ma": 323,
	"./ar-ma.js": 323,
	"./ar-sa": 324,
	"./ar-sa.js": 324,
	"./ar-tn": 325,
	"./ar-tn.js": 325,
	"./ar.js": 319,
	"./az": 326,
	"./az.js": 326,
	"./be": 327,
	"./be.js": 327,
	"./bg": 328,
	"./bg.js": 328,
	"./bm": 329,
	"./bm.js": 329,
	"./bn": 330,
	"./bn.js": 330,
	"./bo": 331,
	"./bo.js": 331,
	"./br": 332,
	"./br.js": 332,
	"./bs": 333,
	"./bs.js": 333,
	"./ca": 334,
	"./ca.js": 334,
	"./cs": 335,
	"./cs.js": 335,
	"./cv": 336,
	"./cv.js": 336,
	"./cy": 337,
	"./cy.js": 337,
	"./da": 338,
	"./da.js": 338,
	"./de": 339,
	"./de-at": 340,
	"./de-at.js": 340,
	"./de-ch": 341,
	"./de-ch.js": 341,
	"./de.js": 339,
	"./dv": 342,
	"./dv.js": 342,
	"./el": 343,
	"./el.js": 343,
	"./en-au": 344,
	"./en-au.js": 344,
	"./en-ca": 345,
	"./en-ca.js": 345,
	"./en-gb": 346,
	"./en-gb.js": 346,
	"./en-ie": 347,
	"./en-ie.js": 347,
	"./en-il": 348,
	"./en-il.js": 348,
	"./en-nz": 349,
	"./en-nz.js": 349,
	"./eo": 350,
	"./eo.js": 350,
	"./es": 351,
	"./es-do": 352,
	"./es-do.js": 352,
	"./es-us": 353,
	"./es-us.js": 353,
	"./es.js": 351,
	"./et": 354,
	"./et.js": 354,
	"./eu": 355,
	"./eu.js": 355,
	"./fa": 356,
	"./fa.js": 356,
	"./fi": 357,
	"./fi.js": 357,
	"./fo": 358,
	"./fo.js": 358,
	"./fr": 359,
	"./fr-ca": 360,
	"./fr-ca.js": 360,
	"./fr-ch": 361,
	"./fr-ch.js": 361,
	"./fr.js": 359,
	"./fy": 362,
	"./fy.js": 362,
	"./gd": 363,
	"./gd.js": 363,
	"./gl": 364,
	"./gl.js": 364,
	"./gom-latn": 365,
	"./gom-latn.js": 365,
	"./gu": 366,
	"./gu.js": 366,
	"./he": 367,
	"./he.js": 367,
	"./hi": 368,
	"./hi.js": 368,
	"./hr": 369,
	"./hr.js": 369,
	"./hu": 370,
	"./hu.js": 370,
	"./hy-am": 371,
	"./hy-am.js": 371,
	"./id": 372,
	"./id.js": 372,
	"./is": 373,
	"./is.js": 373,
	"./it": 374,
	"./it.js": 374,
	"./ja": 375,
	"./ja.js": 375,
	"./jv": 376,
	"./jv.js": 376,
	"./ka": 377,
	"./ka.js": 377,
	"./kk": 378,
	"./kk.js": 378,
	"./km": 379,
	"./km.js": 379,
	"./kn": 380,
	"./kn.js": 380,
	"./ko": 381,
	"./ko.js": 381,
	"./ky": 382,
	"./ky.js": 382,
	"./lb": 383,
	"./lb.js": 383,
	"./lo": 384,
	"./lo.js": 384,
	"./lt": 385,
	"./lt.js": 385,
	"./lv": 386,
	"./lv.js": 386,
	"./me": 387,
	"./me.js": 387,
	"./mi": 388,
	"./mi.js": 388,
	"./mk": 389,
	"./mk.js": 389,
	"./ml": 390,
	"./ml.js": 390,
	"./mn": 391,
	"./mn.js": 391,
	"./mr": 392,
	"./mr.js": 392,
	"./ms": 393,
	"./ms-my": 394,
	"./ms-my.js": 394,
	"./ms.js": 393,
	"./mt": 395,
	"./mt.js": 395,
	"./my": 396,
	"./my.js": 396,
	"./nb": 397,
	"./nb.js": 397,
	"./ne": 398,
	"./ne.js": 398,
	"./nl": 399,
	"./nl-be": 400,
	"./nl-be.js": 400,
	"./nl.js": 399,
	"./nn": 401,
	"./nn.js": 401,
	"./pa-in": 402,
	"./pa-in.js": 402,
	"./pl": 403,
	"./pl.js": 403,
	"./pt": 404,
	"./pt-br": 405,
	"./pt-br.js": 405,
	"./pt.js": 404,
	"./ro": 406,
	"./ro.js": 406,
	"./ru": 407,
	"./ru.js": 407,
	"./sd": 408,
	"./sd.js": 408,
	"./se": 409,
	"./se.js": 409,
	"./si": 410,
	"./si.js": 410,
	"./sk": 411,
	"./sk.js": 411,
	"./sl": 412,
	"./sl.js": 412,
	"./sq": 413,
	"./sq.js": 413,
	"./sr": 414,
	"./sr-cyrl": 415,
	"./sr-cyrl.js": 415,
	"./sr.js": 414,
	"./ss": 416,
	"./ss.js": 416,
	"./sv": 417,
	"./sv.js": 417,
	"./sw": 418,
	"./sw.js": 418,
	"./ta": 419,
	"./ta.js": 419,
	"./te": 420,
	"./te.js": 420,
	"./tet": 421,
	"./tet.js": 421,
	"./tg": 422,
	"./tg.js": 422,
	"./th": 423,
	"./th.js": 423,
	"./tl-ph": 424,
	"./tl-ph.js": 424,
	"./tlh": 425,
	"./tlh.js": 425,
	"./tr": 426,
	"./tr.js": 426,
	"./tzl": 427,
	"./tzl.js": 427,
	"./tzm": 428,
	"./tzm-latn": 429,
	"./tzm-latn.js": 429,
	"./tzm.js": 428,
	"./ug-cn": 430,
	"./ug-cn.js": 430,
	"./uk": 431,
	"./uk.js": 431,
	"./ur": 432,
	"./ur.js": 432,
	"./uz": 433,
	"./uz-latn": 434,
	"./uz-latn.js": 434,
	"./uz.js": 433,
	"./vi": 435,
	"./vi.js": 435,
	"./x-pseudo": 436,
	"./x-pseudo.js": 436,
	"./yo": 437,
	"./yo.js": 437,
	"./zh-cn": 438,
	"./zh-cn.js": 438,
	"./zh-hk": 439,
	"./zh-hk.js": 439,
	"./zh-tw": 440,
	"./zh-tw.js": 440
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 801;

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureHttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/** Pass untouched request through to the next request handler. */
var SecureHttpInterceptor = /** @class */ (function () {
    function SecureHttpInterceptor(inj, events, constants) {
        var _this = this;
        this.inj = inj;
        this.events = events;
        this.constants = constants;
        setTimeout(function () {
            _this.user = inj.get(__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */]);
            console.log(_this.user);
        });
    }
    SecureHttpInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        console.log(this.user);
        if (!this.user) {
            this.user = this.inj.get(__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */]);
            console.log(this.user);
        }
        // IF TOKEN
        if (this.user.userData) {
            req = req.clone({
                setHeaders: {
                    token: this.user.userData.token,
                }
            });
        }
        return next.handle(req).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["e" /* HttpResponse */]) {
                // update the response
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 0) {
                    // Connection failed to server
                }
                else if (err.status === 401) {
                    // Un-authorized
                    _this.events.publish("user:unauthorizeLogout");
                    // return Observable.empty();
                }
                else if ([404, 500].indexOf(err.status) != -1) {
                    if (err.error) {
                        err.error.message = _this.constants.ERRORS.OOPS;
                    }
                    else {
                        err['error'] = { message: _this.constants.ERRORS.OOPS };
                    }
                    // Internal server error/Page not found, show something like oops something went wrong for user friendly behavior
                }
            }
        });
    };
    SecureHttpInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_0__constants_constants__["a" /* ConstantsProvider */]])
    ], SecureHttpInterceptor);
    return SecureHttpInterceptor;
}());

//# sourceMappingURL=SecureHttpInterceptor.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_utilities_utilities__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_env__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_constants_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fabric__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(device, platform, app, constants, push, crash, statusBar, splashScreen, events, utility, user) {
        var _this = this;
        this.app = app;
        this.constants = constants;
        this.push = push;
        this.crash = crash;
        this.events = events;
        this.utility = utility;
        this.user = user;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            splashScreen.hide();
            // crash.sendCrash();
            if (__WEBPACK_IMPORTED_MODULE_8__app_env__["a" /* ENV */].name == 'Dev' || __WEBPACK_IMPORTED_MODULE_8__app_env__["a" /* ENV */].name == 'QA')
                _this.buildTag();
            statusBar.styleLightContent();
            if (platform.is('cordova')) {
                _this.setupPush();
            }
            _this.events.subscribe("user:unauthorizeLogout", function () {
                _this.unauthorizeLogout();
            });
            if (device.model == "iPhone10,3" || device.model == "iPhone10,6") {
                var bodyClass = document.getElementsByTagName('ion-app')[0];
                bodyClass.classList.add('i-phone-x');
            }
            /*
            this.rootPage = "ChooseProfilePage";
            /*/
            _this.startApp();
            //*/
        });
    }
    MyApp.prototype.startApp = function () {
        var _this = this;
        this.user.fetchStoredDetails(function () {
            _this.rootPage = _this.constants.PAGES.ONBOARDING;
            // if (this.user.userData) {
            //   this.rootPage = this.user.getHomePage();
            // } else if (this.user.isFirstRunComplete) {
            //   this.rootPage = this.constants.PAGES.LOGIN_SIGNUP;
            // } else {
            //   this.rootPage = this.constants.PAGES.ONBOARDING;
            // }
        });
    };
    MyApp.prototype.unauthorizeLogout = function () {
        this.user.clearData();
        this.rootPage = this.constants.PAGES.LOGIN_SIGNUP;
    };
    MyApp.prototype.setupPush = function () {
        var _this = this;
        console.log("setupPush");
        // to check if we have permission
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        var options = {
            android: {
                senderID: "1013875668618",
                sound: true,
                vibrate: true,
                clearBadge: true
            },
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true',
                clearBadge: true
            },
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            console.log('Received a notification');
            console.log(JSON.stringify(notification));
            if (notification.additionalData.foreground) {
                _this.utility.showToast({ message: notification.message });
            }
            else {
                if (notification.additionalData.a_data.param) {
                    _this.user.handleNotification(notification.additionalData.a_data.page, { courseId: notification.additionalData.a_data.param, profileId: notification.additionalData.a_data.profileId }, _this.navCtrl);
                }
                else {
                    _this.user.handleNotification(notification.additionalData.a_data.page, { profileId: notification.additionalData.a_data.profileId }, _this.navCtrl);
                }
            }
        }, function (reason) {
            console.log(reason);
        });
        pushObject.on('registration').subscribe(function (registration) {
            console.log('Device registered', JSON.stringify(registration));
            _this.user.registrationToken = registration.registrationId;
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    Object.defineProperty(MyApp.prototype, "navCtrl", {
        get: function () {
            return this.app.getRootNav();
        },
        enumerable: true,
        configurable: true
    });
    /*
    * Put a tag on the app to show which environment is it running on
    * Doesn't show anything if the app is build with --prod
    */
    MyApp.prototype.buildTag = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["isDevMode"])()) {
            return;
        }
        var buildLabel = document.getElementById("testBuild");
        buildLabel.style.display = "inline-block";
        buildLabel.innerHTML = __WEBPACK_IMPORTED_MODULE_8__app_env__["a" /* ENV */].name.toUpperCase();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/Users/kanikagupta/Documents/clavora-hybrid/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/clavora-hybrid/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_9__providers_constants_constants__["a" /* ConstantsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_fabric__["a" /* Crashlytics */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_0__providers_utilities_utilities__["a" /* UtilitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_user__["a" /* UserProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[489]);
//# sourceMappingURL=main.js.map