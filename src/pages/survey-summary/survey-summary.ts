import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { UtilitiesProvider } from './../../providers/utilities/utilities';
import { UserProvider } from './../../providers/user/user';
import { QUESTION_TYPE_MULTI_OPTIONS, QUESTION_TYPE_TRUE_FALSE } from './../../app/constant';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ConstantsProvider } from './../../providers/constants/constants';
import { QuestionnaireProvider } from './../../providers/questionnaire/questionnaire';

/**
 * Generated class for the SurveySummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey-summary',
  templateUrl: 'survey-summary.html',
})
export class SurveySummaryPage {

  readonly QUESTION_TYPE_TRUE_FALSE = QUESTION_TYPE_TRUE_FALSE;
  readonly QUESTION_TYPE_MULTI_OPTIONS = QUESTION_TYPE_MULTI_OPTIONS;
  constructor(
    public navCtrl: NavController,
    public questionnaire: QuestionnaireProvider,
    public constants: ConstantsProvider,
    private utilities: UtilitiesProvider,
    public user: UserProvider,
    public firebaseAnalytics: FirebaseAnalytics,     public platform: Platform,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveySummaryPage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Questionaire Summary" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }

  openTabs() {
    this.questionnaire.submitQuestions().subscribe((resp: any) => {
      this.navCtrl.setRoot(this.constants.PAGES.TABS);
      if (resp.result.length > 0)
        this.user.userData = Object.assign({}, this.user.userData, { isCourseCreated: "1" });
      else
        this.utilities.showToast({ message: resp.message });
      if (this.questionnaire.profile["isOwner"] == 1)
        this.user.userData = Object.assign({}, this.user.userData, { name: this.questionnaire.profile["name"] });
      }, (err) => {
      console.log(err);
    });
  }

}
