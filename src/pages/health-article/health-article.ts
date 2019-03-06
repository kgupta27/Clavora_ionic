import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { UserProvider } from './../../providers/user/user';
import { ConstantsProvider } from './../../providers/constants/constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the HealthArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health-article',
  templateUrl: 'health-article.html',
})
export class HealthArticlePage {
  isLoaded = false;
  articles = [];
  pageNum = 1;
  notificationCounts = 0;
  onScrollLoading;

  constructor(public navCtrl: NavController,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    public constants: ConstantsProvider,
    private user: UserProvider,
    public navParams: NavParams) {
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.resetPage();
    this.loadArticle(() => {
      console.log('Async operation has ended');
      refresher.complete();
    });
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad HealthArticlePage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Health Article List" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    this.resetPage();
    this.user.getNotificationCount().subscribe((resp: any) => {
      console.log(resp);
      this.notificationCounts = resp.result.count;
      this.loadArticle();
    }, (err) => {
      console.log(err);
    })
    // this.loadArticle();
  }

  resetPage() {
    this.pageNum = 1;
    this.articles = [];
    this.isLoaded = false;
  }

  loadArticle(callback?) {
    this.user.getArticle(this.pageNum).subscribe((resp: any) => {
      this.isLoaded = true;
      if (resp.result.data.length > 0) {
        this.pageNum++;
        this.articles = this.articles.concat(resp.result.data);
      }
      if (callback) callback();
    }, (err) => {
      console.log(err);
      this.isLoaded = true;
    });
  }


  loadMore(infiniteScroll) {
    console.log('Begin async operation');
    if (this.isLoaded) {
      this.onScrollLoading = true;
      this.loadArticle(() => {
        this.onScrollLoading = false;
        infiniteScroll.complete();
      });
    } else {
      console.log("Async operation has ended");
      infiniteScroll.complete();
    }
  }

}
