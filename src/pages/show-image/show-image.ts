import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { Component } from '@angular/core';
import { IonicPage, Platform, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ShowImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-image',
  templateUrl: 'show-image.html',
})
export class ShowImagePage {
  imageUrl: string;
  public unregisterBackButtonAction: any;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public firebaseAnalytics: FirebaseAnalytics,
    private platform: Platform,
  ) {

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ShowImagePage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Image full view" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    this.imageUrl = this.navParams.data.image;
  }

  cancel() {
    this.viewCtrl.dismiss();
  }
}
