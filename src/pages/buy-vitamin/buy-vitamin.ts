import { ConstantsProvider } from './../../providers/constants/constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from './../../providers/user/user';
/**
 * Generated class for the BuyVitaminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy-vitamin',
  templateUrl: 'buy-vitamin.html',
})
export class BuyVitaminPage {

  constructor(public navCtrl: NavController,
    public constants: ConstantsProvider,
    public user: UserProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyVitaminPage',this.navParams.data);
  }

  ionViewWillEnter(){
    this.user.buyVitamin(this.navParams.data.vitamin.id).subscribe((resp: any) => {
        console.log(resp);
      }, err => {
        console.log(err);
      }
    );
  }
}
