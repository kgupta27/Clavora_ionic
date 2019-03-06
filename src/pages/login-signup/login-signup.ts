import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { EmailRegExp, PasswordRegExp } from './../../app/constant';
import { FacebookProvider } from './../../providers/facebook/facebook';
import { GoogleProvider } from './../../providers/google/google';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantsProvider } from '../../providers/constants/constants';
import { UserProvider } from '../../providers/user/user';
import { UtilitiesProvider } from '../../providers/utilities/utilities';

/**
 * Generated class for the LoginSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-signup',
  templateUrl: 'login-signup.html',
})
export class LoginSignupPage {

  connectForm: FormGroup;
  isLogin = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private user: UserProvider,
    private utility: UtilitiesProvider,
    private formBuilder: FormBuilder,
    public constants: ConstantsProvider,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    private facebook: FacebookProvider,
    private google: GoogleProvider
  ) {
    //check if the page is opening to login rather than sign up(default)
    this.isLogin = navParams.get("isLogin");

    this.connectForm = this.formBuilder.group({
      email: [this.navParams.get('email'), [Validators.required, Validators.email, Validators.pattern(EmailRegExp)]],
      password: ["", [Validators.required, Validators.pattern(PasswordRegExp), /* Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/
      ), */ Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginSignupPage');
  }

  // Used for facebook login
  doFacebookLogin() {
    console.log('doFacebookLogin');
    this.facebook.getFacebookUser()
      .then(data => {
        console.log('doFacebookLogin data', data)
        if (data != null)
          this.socialLoginSuccess(data)
        else
          this.facebook.doFacebookLogin()
            .then(data => this.socialLoginSuccess(data),
              err => console.log("Facebook Login error", err));
      });
  }

  ionViewWillEnter() {
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: this.isLogin ? "Login" : "Sign Up" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    if (!this.isLogin) {
      this.connectForm.reset();
    } else {
      this.connectForm.reset();
      this.connectForm = this.formBuilder.group({
        email: [this.navParams.get('email'), [Validators.required, Validators.email, Validators.pattern(EmailRegExp)]],
        password: ["", [Validators.required, /* Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/
        ), */ Validators.minLength(6), Validators.maxLength(15)]]
      });
    }
  }

  // Used for google login
  doGoogleLogin() {
    console.log('doGoogleLogin')
    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
    this.google.getGoogleUser().then(data => {
      console.log('doGoogleLogin data', data)
      if (data != null)
        this.google.doGoogleLogin()
          .then(data => this.socialLoginSuccess(data),
            err => console.log("Google Login error", err));
      else
        this.google.trySilentLogin()
          .then(data => this.socialLoginSuccess(data),
            error => {
              console.log('doGoogleLogin error')
              //we don't have the user data so we will ask him to log in
              this.google.doGoogleLogin()
                .then(data => this.socialLoginSuccess(data),
                  err => console.log("Google Login error", err));
            });
    });
  }

  connect() {
    if (!this.isLogin) {
      this.navCtrl.push(this.constants.PAGES.TERMS_N_CONDITION, { isTerms: true, isSignup: true, email: this.email.value, password: this.password.value });
      // this.user.signUp(this.email.value, this.password.value).subscribe((resp: any) => {
      //   console.log(resp);
      //   this.utility.showToast({ message: resp.message });
      //   this.navCtrl.push(this.constants.PAGES.LOGIN_SIGNUP, { isLogin: !this.isLogin, email: this.email.value });
      //   this.connectForm.reset()
      // }, err => {
      //   console.log(err);
      // });
    } else {
      this.user.login(this.email.value, this.password.value).subscribe((resp: any) => {
        console.log(resp);
        this.navCtrl.setRoot(this.user.getHomePage());
      }, err => {
        console.log(err);
      });
    }
  }

  openTnC(isTerms) {
    this.navCtrl.push(this.constants.PAGES.TERMS_N_CONDITION, { isTerms: isTerms });
  }

  openForgetPassword() {
    this.navCtrl.push(this.constants.PAGES.FORGOT_PASSWORD, { email: this.email.valid ? this.email.value : '' });
  }

  togglePage() {
    this.navCtrl.setRoot(this.constants.PAGES.LOGIN_SIGNUP, { isLogin: !this.isLogin });
  }


  get email() {
    return this.connectForm.get('email');
  }

  get password() {
    return this.connectForm.get('password');
  }

  socialLoginSuccess(socialInfo) {
    console.log("socialLoginSuccess", JSON.stringify(socialInfo));
    if (socialInfo.email) {
      this.user.socialLogin(socialInfo)
        .subscribe((resp: any) => {
          console.log("socialLoginSuccess response");
          console.log(resp);
          if (this.user.userData.isTermAccepted == 0)
            this.navCtrl.setRoot(this.constants.PAGES.TERMS_N_CONDITION, { isTerms: true, isSocial: true });
          else
            this.navCtrl.setRoot(this.user.getHomePage());
        }, err => {
          console.log(err);
        });
    }
    else {
      this.utility.showAlert({
        // title: "Alert!",
        subTitle: this.constants.ERRORS.SOCIAL_LOGIN_EMAIL_MISSING,
        buttons: ['Ok']
      });
      switch (socialInfo.source) {
        case 'google':
          this.google.doGoogleLogout();
          this.google.removeGoogleUser();
          break;
        case 'facebook':
          this.facebook.doFacebookLogout();
          this.facebook.removeFacebookUser();
          break;
      }
    }
  }

}
