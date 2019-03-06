import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { ConstantsProvider } from './../../providers/constants/constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the ContactAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-admin',
  templateUrl: 'contact-admin.html',
})
export class ContactAdminPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    public constants: ConstantsProvider
  ) {
  }

  ionViewDidLoad() {
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Contact Admin" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    console.log('ionViewDidLoad ContactAdminPage');
  }

  onEmail() {
    window.open(`mailto:${this.constants.LANGS.ADMIN_EMAIL}`, "_system");
  }

  onCall() {
    window.open("tel:" + this.constants.LANGS.ADMIN_PHONE.replace(/ /g,''), "_system");
  }

}
