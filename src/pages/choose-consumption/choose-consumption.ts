import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { UtilitiesProvider } from './../../providers/utilities/utilities';
import { ConstantsProvider } from './../../providers/constants/constants';
import { QuestionnaireProvider } from './../../providers/questionnaire/questionnaire';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the ChooseConsumptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-consumption',
  templateUrl: 'choose-consumption.html',
})
export class ChooseConsumptionPage {
  vitamins: any = [];
  selectedVitamin: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public utility: UtilitiesProvider,
    public constants: ConstantsProvider,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    private questionnaire: QuestionnaireProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseConsumptionPage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Choose Vitamin" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    this.getVitaminsList();
  }

  getVitaminsList() {
    this.questionnaire.getVitamins().subscribe((resp: any) => {
      console.log(resp);
      this.vitamins = resp.result;
    }, err => {
      console.log(err);
    });
  }

  selectVitamin(value) {
    this.selectedVitamin = value;
  }

  showInfo() {
    this.utility.showInfoAlert({
      title: "",
      subTitle: this.constants.LANGS.PAGE_LABEL_CHOOSE_VITAMIN_DESC,
      buttons: []
    });
  }



  showVitInfo(desc) {
    this.utility.showInfoAlert({
      title: "",
      subTitle: desc|| this.constants.LANGS.PAGE_LABEL_VITAMIN_NO_DESC,
      buttons: []
    });
  }
  onNext() {
    this.navCtrl.push(this.constants.PAGES.CHOOSE_PROFILE, { selectedVitamin: this.selectedVitamin });
  }
}
