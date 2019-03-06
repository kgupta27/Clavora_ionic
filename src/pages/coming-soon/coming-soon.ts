import { UserProvider } from './../../providers/user/user';
import { ConstantsProvider } from './../../providers/constants/constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComingSoonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coming-soon',
  templateUrl: 'coming-soon.html',
})
export class ComingSoonPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public constants: ConstantsProvider,
    private user: UserProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComingSoonPage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter ComingSoonPage', this.navParams.data);
    this.user.buyVitamin(this.navParams.data)
  }
}
