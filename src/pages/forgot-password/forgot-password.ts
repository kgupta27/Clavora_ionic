import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { EmailRegExp } from './../../app/constant';
import { UtilitiesProvider } from './../../providers/utilities/utilities';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants';
import { UserProvider } from './../../providers/user/user';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  resetPasswordForm: FormGroup;

  constructor(public navCtrl: NavController,
    public constants: ConstantsProvider,
    private user: UserProvider,
    private utility: UtilitiesProvider,
    private firebaseAnalytics: FirebaseAnalytics,
    private platform: Platform,
    private formBuilder: FormBuilder,
    public navParams: NavParams) {
    this.resetPasswordForm = this.formBuilder.group({
      email: [this.navParams.get('email'), [Validators.required, Validators.email, Validators.pattern(EmailRegExp)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Forgot Password" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }

  resetPassword() {
    this.user.resetPassword(this.email.value).subscribe((resp: any) => {
      console.log(resp);
      this.utility.showToast({ message: resp.message });
      this.navCtrl.setRoot(this.constants.PAGES.LOGIN_SIGNUP, { isLogin: true, email: this.email.value });
    }, err => {
      console.log(err);
    });
  }


  get email() {
    return this.resetPasswordForm.get('email');
  }
}
