import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { UserProvider } from './../../providers/user/user';
import { UtilitiesProvider } from './../../providers/utilities/utilities';
import { QuestionnaireProvider } from './../../providers/questionnaire/questionnaire';
import { ConstantsProvider } from '../../providers/constants/constants';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, PopoverController, ViewController, App, Platform } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the CoursePlanManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-plan-management',
  templateUrl: 'course-plan-management.html',
})
export class CoursePlanManagementPage {
  courses = [];
  loaded = false;
  profiles: any = []
  // selectedProfile: number;
  @ViewChild("slides") slide: Slides;

  constructor(
    // public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    public firebaseAnalytics: FirebaseAnalytics,
    public platform: Platform,
    public user: UserProvider,
    public constants: ConstantsProvider,
    private questionnaire: QuestionnaireProvider,
    private utilities: UtilitiesProvider,
    public popoverCtrl: PopoverController
  ) {
  }
  avoidLastSlideIssue(ev) {
    console.log(ev);
    console.log(this.slide.getActiveIndex());
    if (this.slide.getActiveIndex() > this.courses.length - 1) {
      this.slide.slideTo(this.courses.length - 1);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePlanManagementPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CoursePlanManagementPage', this.firebaseAnalytics);
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Course Plan Management" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    this.getProfiles();
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
          this.getCourses();
        }
        else
          this.loaded = true;
      }, err => {
        console.log(err);
      });
  }

  getCourses() {
    this.courses = [];
    this.questionnaire.getCoursePlans(this.user.selectedProfile)
      .subscribe((resp: any) => {
        this.loaded = true;
        console.log(resp);
        this.courses = resp.result;
        setTimeout(() => { this.slide.slideTo(0); }, 500);
        let notificationData = this.navParams.get('notificationData');
        if (notificationData && notificationData.courseId) {
          console.log(notificationData.courseId);
          for (let i = 0; i < this.courses.length; i++) {
            let course = this.courses[i];
            console.log(course);
            if (parseInt(course.id) == notificationData.courseId) {
              console.log("found");
              setTimeout(() => { this.slide.slideTo(i); }, 1500);
              break;
            }
          }
        }
      }, err => {
        this.loaded = true;
        console.log(err);
      });
  }

  onCourse(course) {
    this.navCtrl.push(this.constants.PAGES.COURSE_PLAN, course);
  }

  getDuration(startDate, endDate) {
    return Math.ceil(moment.duration(moment(endDate).diff(moment(startDate))).as('days'));
  }

  onComplete(event, course) {
    event.stopPropagation();
    if (this.checkComplete(course.isCompleted, course.endDate)) {
      this.utilities.showAlert({
        subTitle: this.constants.LANGS.PAGE_LABEL_COMPLETE_TITLE,
        message: this.constants.LANGS.PAGE_LABEL_COMPLETE_SUBTITLE,
        buttons: [
          {
            text: this.constants.LANGS.LABEL_YES,
            handler: data => {
              this.markComplete(course, 1)
            }
          },
          {
            text: this.constants.LANGS.LABEL_NO,
            // role: 'cancel',
            handler: data => {
              console.log('canceled');
              this.markComplete(course, 2)
            }
          }
        ]
      });
    }
  }

  markComplete(course, status) {
    this.questionnaire.markComplete(course.id, status)
      .subscribe((resp: any) => {
        this.utilities.showToast({ message: resp.message });
        this.courses.forEach((element, index) => {
          if (element.id == resp.result.id)
            this.courses[index] = resp.result;
        });
      }, err => {
        console.log(err);
      });
  }

  checkComplete(isCompleted, endDate) {
    return isCompleted == 0 && moment().isSameOrAfter(moment(endDate));
  }

  openQuestionnaire() {
    // this.app.getRootNav().setRoot(this.constants.PAGES.CHOOSE_CONSUMPTION);
    this.navCtrl.push(this.constants.PAGES.CHOOSE_CONSUMPTION);
  }

  onShare(url) {
    window.open("mailto:?subject=Course Plan Details&body=Hi, %0A %0A Please find the link to recommended  Course Plan from Clavora. %0A %0A " + url, "_system");
  }

  sharePlans() {
    let emailContent = "mailto:?subject=Course Plan Details&body=Hi, %0A %0A Please find the links to recommended Course Plans from Clavora.";
    for (let course of this.courses) {
      emailContent += " %0A %0A " + course.pdfLink;
    }
    window.open(emailContent, "_system");
  }

  getVitamin(vitamin) {
    return vitamin.replace("Vitamin ", "Vit ");
  }

  openProfilePopover(event) {
    console.log("openProfilePopover");
    let popover = this.popoverCtrl.create(ProfilePopover, { options: this.profiles, selectedProfile: this.user.selectedProfile }, { cssClass: "choose-my-plan" });
    popover.present();
    popover.onDidDismiss((data) => {
      if (data) {
        console.log(data.selectedOption);
        this.user.selectedProfile = data.selectedOption.id;
        this.getCourses();
      }
    });
  }

  get navCtrl(): NavController {
    return this.app.getRootNav();
  }

}

@Component({
  selector: 'profile-dropdown',
  template: `
    <ion-list no-lines>
      <button ion-item [ngClass]="{'active': navParams.data.selectedProfile == option.id}" (click)="selectOption(option)" *ngFor="let option of navParams.data.options">{{ option.name }}</button>
    </ion-list>
  `
})
export class ProfilePopover {
  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    console.log(navParams.data);
  }

  selectOption(option) {
    this.viewCtrl.dismiss({ selectedOption: option });
  }
}
