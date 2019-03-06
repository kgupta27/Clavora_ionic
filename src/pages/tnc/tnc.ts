import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { UtilitiesProvider } from './../../providers/utilities/utilities';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the TncPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare function unescape(s: string): string;
@IonicPage()
@Component({
  selector: 'page-tnc',
  templateUrl: 'tnc.html',
})
export class TncPage {

  data;
  value: boolean = false;
  constructor(
    public navCtrl: NavController,
    public constants: ConstantsProvider,
    public user: UserProvider,
    public firebaseAnalytics: FirebaseAnalytics,     public platform: Platform,
    private utility: UtilitiesProvider,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TncPage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: this.navParams.data.isTerms ? "Terms and Conditions" : "Privacy Policy" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    if (this.navParams.data.isTerms) {
      this.user.getTerms().subscribe((resp: any) => {
        console.log(resp);
        this.data = resp.result[0];
        // this.data = this.data.substring(this.data.indexOf("<body>") + 6, this.data.indexOf("</body>"));
        console.log(this.data);
        this.setData();
      }, err => {
        this.navCtrl.pop();
      });
    } else {
      this.user.getPrivacyPolicy().subscribe((resp: any) => {
        console.log(resp);
        this.data = resp.result[0];
        // this.data = this.data.substring(this.data.indexOf("&lt;body&gt;") + 12, this.data.indexOf("&lt;/body&gt;"));
        console.log(this.data);
        this.setData();
      }, err => {
        this.navCtrl.pop();
      });
    }
  }

  setData() {
    let tempData = document.getElementById("tempData");
    tempData.innerHTML = this.data;
    this.data = tempData.textContent;
    this.data = this.data.substring(this.data.indexOf("<body>") + 6, this.data.indexOf("</body>"));
    let content = document.querySelector("ion-scroll .scroll-zoom-wrapper");
    console.log(this.data);
    content.innerHTML = this.data;
  }

  onCheck() {
    this.value = !this.value;
  }

  done() {
    if (this.navParams.data.isSignup) {
      this.user.signUp(this.navParams.data.email, this.navParams.data.password).subscribe((resp: any) => {
        console.log(resp);
        this.utility.showToast({ message: resp.message });
        this.navCtrl.setRoot(this.constants.PAGES.LOGIN_SIGNUP, { isLogin: true, email: this.navParams.data.email });
        // this.connectForm.reset()
      }, err => {
        this.navCtrl.pop();
      });
    }
    else if (this.navParams.data.isSocial) {
      this.user.acceptTerms().subscribe((resp: any) => {
        console.log(resp);
        this.user.userData = Object.assign({}, this.user.userData, { isTermAccepted: "1" });
        this.navCtrl.push(this.user.getHomePage());
      }, err => {
        this.navCtrl.pop();
      });
    }
  }
}
