import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { PasswordRegExp } from './../../app/constant';
import { UtilitiesProvider } from './../../providers/utilities/utilities';
import { UserProvider } from './../../providers/user/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantsProvider } from './../../providers/constants/constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  resetPasswordForm: FormGroup

  constructor(public navCtrl: NavController,
    public constants: ConstantsProvider,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    public formBuilder: FormBuilder,
    public user: UserProvider,
    public utility: UtilitiesProvider,
    public navParams: NavParams) {

    this.resetPasswordForm = formBuilder.group(
      {
        oldPassword: ["", [Validators.required
          , Validators.pattern(PasswordRegExp), Validators.minLength(6), Validators.maxLength(15)]],
        newPassword: ["", [Validators.required, Validators.pattern(PasswordRegExp),/*  Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/
        ), */ Validators.minLength(6), Validators.maxLength(15)]],
        confirmPassword: ["", [Validators.required,/*  Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/
        ), */ Validators.minLength(6), Validators.maxLength(15)]]
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Password Change" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }

  setPassword() {
    this.user.changePassword(this.oldPassword.value, this.newPassword.value, this.confirmPassword.value).subscribe((resp: any) => {
      this.utility.showToast({
        message: resp.message
      });
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });

  }
  get oldPassword() {
    return this.resetPasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.resetPasswordForm.get('newPassword');
  }
  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }
}
