import { UserProvider } from './../../providers/user/user';
import { ConstantsProvider } from './../../providers/constants/constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController,
    public constants: ConstantsProvider,
    public user: UserProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.user.userData.isFirstLogin = "0";
    this.user.userData = this.user.userData;
    console.log('ionViewDidLoad WelcomePage');
  }

  onNext() {
    this.navCtrl.setRoot(this.constants.PAGES.TABS);
  }

}
