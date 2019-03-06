import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { UserProvider } from './../../providers/user/user';
import { ConstantsProvider } from './../../providers/constants/constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  isLoaded = false;
  pageNum = 1;

  notifications = [];

  constructor(public navCtrl: NavController,
    public constants: ConstantsProvider,
    public user: UserProvider,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.loadNotifications();
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Notification Center" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    console.log('ionViewDidLoad NotificationPage');
  }

  loadNotifications(callback?) {
    this.user.getNotification(this.pageNum, callback ? false : true).subscribe((resp: any) => {
      console.log(resp);
      this.isLoaded = true;
      if (resp.result.data.length > 0) {
        this.pageNum++;
        this.notifications = this.notifications.concat(resp.result.data);
      }
      if (callback) callback();
    }, (err) => {
      console.log(err);
      this.isLoaded = true;
    })
  }

  loadMore(infiniteScroll) {
    console.log('Begin async operation');
    if (this.isLoaded) {
      this.loadNotifications(() => {
        infiniteScroll.complete();
      });
    } else {
      console.log("Async operation has ended");
      infiniteScroll.complete();
    }
  }

  actionNotification(notification) {
    console.log(notification);
    if (notification.courseId) {
      this.user.handleNotification(notification.page, {courseId: notification.courseId, profileId: notification.profileId}, this.navCtrl);
    } else {
      this.user.handleNotification(notification.page, {profileId: notification.profileId}, this.navCtrl);
    }
  }

}
