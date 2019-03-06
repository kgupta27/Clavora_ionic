import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, NavController } from 'ionic-angular';
import { HttpProvider } from '../http/http';
import { ConstantsProvider } from './../constants/constants';
import { FacebookProvider } from './../facebook/facebook';
import { GoogleProvider } from './../google/google';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  private _userData;
  private _isFirstRunComplete: boolean;
  private _loginType: string;
  public registrationToken;
  public selectedProfile: number;


  constructor(
    private http: HttpProvider,
    private platform: Platform,
    private storage: Storage,
    private constants: ConstantsProvider,
    private facebook: FacebookProvider,
    private google: GoogleProvider
  ) {
    console.log('Hello UserProvider Provider');
  }

  set userData(data) {
    if (data != undefined)
      this.storage.set('userData', data);
    else
      this.storage.remove('userData');
    this._userData = data;
  }

  get userData() {
    return this._userData;
  }

  set loginType(data) {
    if (data != undefined)
      this.storage.set('loginType', data);
    else
      this.storage.remove('loginType');
    this._loginType = data;
  }

  get loginType() {
    return this._loginType;
  }

  set isFirstRunComplete(data: boolean) {
    this._isFirstRunComplete = data;
    this.storage.set('isFirstRunComplete', data).then((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

  get isFirstRunComplete() {
    return this._isFirstRunComplete;
  }

  getHomePage() {
    console.log(this.userData);
    return /* this.userData.isCourseCreated == 0 ? this.constants.PAGES.CHOOSE_CONSUMPTION :  */ this.userData.isFirstLogin && this.userData.isFirstLogin == "1" ? this.constants.PAGES.WELCOME : this.constants.PAGES.TABS;
  }

  fetchStoredDetails(callback) {
    this.storage.get('userData').then(
      data => {
        console.log(data);
        if (data) {
          this.userData = data;
          this.storage.get('loginType').then(
            data => {
              console.log(data)
              this._loginType = data;
            },
            error => {
              console.log("error", error)
            });
          callback();
        } else {
          this.storage.get('isFirstRunComplete').then(
            data => {
              console.log(data)
              this._isFirstRunComplete = data;
              callback();
            },
            error => {
              console.log("error", error)
              callback();
            });
        }
      },
      error => {
        console.log("error", error)
        callback();
      });

  }

  clearData() {
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
  }

  signUp(email, password) {
    let param = {
      "email": email,
      "password": password
    };
    return this.http.post(this.SIGN_UP, param);
  }

  login(email, password) {
    let param = {
      email: email,
      password: password,
      deviceType: this.platform.is('ios') ? "IPHONE" : "ANDROID",
      "deviceToken": this.registrationToken
    };
    return this.http.post(this.SIGN_IN, param).map((resp: any) => {
      console.log(resp);
      this.loginType = "email";
      this.userData = resp.result.user;
    });
  }

  socialLogin(socialInfo) {
    let param = {
      deviceType: this.platform.is('ios') ? "IPHONE" : "ANDROID",
      deviceToken: this.registrationToken,
      authProvider: socialInfo.source,
      socialId: socialInfo.sourceId,
      accessToken: socialInfo.socialToken
    };
    return this.http.post(this.SOCIAL_LOGIN, param).map((resp: any) => {
      console.log(resp);
      this.loginType = socialInfo.source;
      this.userData = resp.result.user;
    });
  }

  resetPassword(email) {
    return this.http.post(this.RESET_PASS, { email: email });
  }


  logout() {
    return this.http.post(this.LOGOUT);
  }

  toggleNotification(enable) {
    return this.http.post(this.TOGGLE_NOTIFICATION, {
      "status": enable ? 1 : 0
    });
  }


  getPrivacyPolicy() {
    return this.http.get(this.PRIVACY_POLICY);
  }

  getTerms() {
    return this.http.get(this.TERMS);
  }

  getArticle(page) {
    return this.http.get(this.ARTICLE + page, null, page > 1 ? false : true);
  }

  getNotification(pageNum, showLoader) {
    return this.http.get(this.NOTIFICATIONS + pageNum, null, showLoader);
  }

  handleNotification(page, data, navCtrl) {
    navCtrl.push(page, { notificationData: data });
  }

  getNotificationCount() {
    return this.http.get(this.NOTIFICATIONS_COUNT, null, true);
  }

  changePassword(oldPass, newPass, confirmPass) {
    return this.http.post(this.CHANGE_PASS, {
      oldPassword: oldPass,
      password: newPass,
      confirmPassword: confirmPass
    });
  }

  buyVitamin(vitaminId) {
    return this.http.post(this.BUY_VITAMIN + vitaminId);
  }

  acceptTerms() {
    return this.http.post(this.ACCEPT_TERMS);
  }

  relations() {
    return this.http.get(this.RELATIONS);
  }

  profiles() {
    return this.http.get(this.PROFILES);
  }

  //APIs
  private SIGN_UP = "/signup";
  private SIGN_IN = "/login";
  private SOCIAL_LOGIN = "/social-login";
  private RESET_PASS = "/forgot-password";
  public LOGOUT = "/logout";
  private CHANGE_PASS = "/change-password";
  private TOGGLE_NOTIFICATION = "/update-notification";
  private ARTICLE = "/article?page=";

  // private PRIVACY_POLICY = "https://dev.clavora.com/clavora/public/privacy-policy.html"; 
  // private TERMS = "https://dev.clavora.com/clavora/public/terms.html"; 
  private PRIVACY_POLICY = "/privacy-policy";
  private TERMS = "/terms";
  private NOTIFICATIONS = "/notifications?page=";
  private NOTIFICATIONS_COUNT = "/notification-count";
  private BUY_VITAMIN = "/buy-vitamin/";
  private ACCEPT_TERMS = "/update-term-status";
  private RELATIONS = "/relations";
  private PROFILES = "/profiles";
}
