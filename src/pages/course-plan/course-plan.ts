import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { ConstantsProvider } from './../../providers/constants/constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the CoursePlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-plan',
  templateUrl: 'course-plan.html',
})
export class CoursePlanPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    public constants: ConstantsProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePlanPage', this.navParams.data);
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Course Plan" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }

}
