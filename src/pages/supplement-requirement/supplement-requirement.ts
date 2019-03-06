import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { ProfilePopover } from './../course-plan-management/course-plan-management';
import { UserProvider } from './../../providers/user/user';
import { QuestionnaireProvider } from './../../providers/questionnaire/questionnaire';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController, Platform } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants';
import * as moment from 'moment';

/**
 * Generated class for the SupplementRequirementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supplement-requirement',
  templateUrl: 'supplement-requirement.html',
})
export class SupplementRequirementPage {

  currentPage: number;
  totalPage: number;
  pages: any;
  courses = [];
  // date: string = "2018-09-05";
  date: any;
  profiles: any = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public constants: ConstantsProvider,
    public user: UserProvider,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    public popoverCtrl: PopoverController,
    private questionnaire: QuestionnaireProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupplementRequirementPage');
  }

  ionViewWillEnter() {
    this.currentPage = 1;
    this.totalPage = 1;
    this.reset();
    this.date = moment().format('YYYY-MM-DD');
    this.getProfiles();
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Supplement Required" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }

  getProfiles() {
    this.user.profiles()
      .subscribe((resp: any) => {
        console.log(resp);
        this.profiles = resp.result;
        if (this.profiles.length > 0) {
          let notificationData = this.navParams.get('notificationData');
          if (notificationData && notificationData.profileId) {
            this.user.selectedProfile = notificationData.profileId;
          } else if (!this.user.selectedProfile) {
            let temp = resp.result.find(profile => profile.isSelf == 1);
            if (!temp)
              temp = this.profiles[0];
            this.user.selectedProfile = temp.id;
          }
          this.getCoursePlansOfDate(this.date);
        }
      }, err => {
        console.log(err);
      });
  }

  reset() {
    this.pages = []
    for (let i = 1; i <= this.totalPage; i++) {
      this.pages.push(i);
    }
  }

  getCoursePlansOfDate(date) {
    console.log(date);

    if (this.user.selectedProfile) {
      this.questionnaire.getCoursePlansOfDate(this.user.selectedProfile, moment(date).set({ hour: moment().hours(), minute: moment().minutes(), second: moment().seconds(), millisecond: 0 }).utc().format('YYYY-MM-DD'), this.currentPage)
        .subscribe((resp: any) => {
          console.log(resp);
          this.courses = resp.result.data;
          this.currentPage = resp.result.currentPage;
          this.totalPage = resp.result.lastPage;
          this.reset();
        }, err => {
          console.log(err);
        });
    }
  }

  onPrev() {
    if (this.currentPage > 1) {
      this.currentPage = --this.currentPage;
      this.getCoursePlansOfDate(this.date);
    }
  }

  onNext() {
    if (this.currentPage < this.totalPage) {
      this.currentPage = ++this.currentPage;
      this.getCoursePlansOfDate(this.date);
    }
  }

  onPage(page) {
    if (this.currentPage != page) {
      this.currentPage = page;
      this.getCoursePlansOfDate(this.date);
    }
  }

  openCalendar() {
    console.log("openCalendar");
    let modal = this.modalCtrl.create(this.constants.PAGES.CALENDAR, { currentDate: this.date, profileId: this.user.selectedProfile });
    modal.present();
    modal.onDidDismiss(data => {
      console.log("data", data);
      if (data) {
        this.date = moment(data).format('YYYY-MM-DD');
        this.getCoursePlansOfDate(this.date);
      }
    });
  }

  openProfilePopover(event) {
    console.log("openProfilePopover");
    let popover = this.popoverCtrl.create(ProfilePopover, { options: this.profiles, selectedProfile: this.user.selectedProfile }, { cssClass: "choose-my-plan" });
    popover.present();
    popover.onDidDismiss((data) => {
      if (data) {
        console.log(data.selectedOption);
        this.currentPage = 1;
        this.totalPage = 1;
        this.reset();
        this.user.selectedProfile = data.selectedOption.id;
        this.getCoursePlansOfDate(this.date);
      }
    });
  }

}
