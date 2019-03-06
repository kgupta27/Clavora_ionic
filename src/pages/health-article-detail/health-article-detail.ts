import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';

/**
 * Generated class for the HealthArticleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health-article-detail',
  templateUrl: 'health-article-detail.html',
})
export class HealthArticleDetailPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    private modalCtrl: ModalController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthArticleDetailPage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Health Article Detail" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    console.log(this.navParams.data);
    let video: any = document.getElementById('articleVideo');
    video.play();
  }

  showImage(image) {
    let modal = this.modalCtrl.create('ShowImagePage', { image: image });
    modal.present();
  }

  showVideo(url) {
    let modal = this.modalCtrl.create('VideoPlayerPage', { url: url });
    modal.present();
  }

}
