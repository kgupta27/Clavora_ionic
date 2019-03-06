import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
})
export class VideoPlayerPage {
  public unregisterBackButtonAction: any;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public firebaseAnalytics: FirebaseAnalytics,
    private platform: Platform
  ) {

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ShowImagePage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Video Player" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPlayerPage');
    document.getElementsByTagName('ion-modal')[0].classList.add('modal-with-light-bg');

    let video: any = document.getElementById('modalVideo');
    video.play();
  }

}
