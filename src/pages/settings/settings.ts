import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Platform } from 'ionic-angular';
import { ConstantsProvider } from './../../providers/constants/constants';
import { UserProvider } from './../../providers/user/user';
import { UtilitiesProvider } from './../../providers/utilities/utilities';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  isNotification: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    public user: UserProvider,
    public utility: UtilitiesProvider,
    public constants: ConstantsProvider
  ) {
    this.isNotification = this.user.userData.isNotificationActive == "1" ? true : false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Settings" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));

  }

  onTerms(isTerms) {
    console.log("onTerms", isTerms);
    this.navCtrl.push(this.constants.PAGES.TERMS_N_CONDITION, { isTerms: isTerms });
  }

  onBoardingTutorial() {
    console.log("onBoardingTutorial");
    this.navCtrl.push(this.constants.PAGES.ONBOARDING);
  }

  onNotification() {
    console.log("onNotification");
    this.user.toggleNotification(this.isNotification).subscribe((resp: any) => {
      console.log(resp);
      this.utility.showToast({ message: resp.message });
      this.user.userData.isNotificationActive = this.isNotification ? 1 : 0;
      this.user.userData = this.user.userData; //to re-save it to localstorage
    }, (error: any) => {
      console.log(error);
    });
  }

  onContactAdmin() {
    console.log("onContactAdmin");
    this.navCtrl.push(this.constants.PAGES.CONTACT_ADMIN)
  }

  onChangePassword() {
    console.log("onChangePassword");
    this.navCtrl.push(this.constants.PAGES.CHANGE_PASSWORD);
  }

  onLogout() {
    console.log("onLogout");
    this.utility.showAlert({
      title: "",
      subTitle: this.constants.LANGS.PAGE_LABEL_LOGOUT_SUBTITLE,
      buttons: [
        {
          text: this.constants.LANGS.LABEL_YES,
          handler: data => {
            this.user.logout().subscribe((resp: any) => {
              console.log(resp);
              this.user.clearData();
              this.app.getRootNav().setRoot(this.constants.PAGES.LOGIN_SIGNUP, { isLogin: true });
            }, (error: any) => {
              console.log(error);
            });
          }
        },
        {
          text: this.constants.LANGS.LABEL_NO,
          role: 'cancel',
          handler: data => {
            console.log('canceled');
          }
        }
      ]
    });
  }

}
