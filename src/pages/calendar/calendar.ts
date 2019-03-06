import { QuestionnaireProvider } from './../../providers/questionnaire/questionnaire';
import { ConstantsProvider } from './../../providers/constants/constants';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, ViewController, NavParams, Platform } from 'ionic-angular';
import { CalendarComponentOptions, CalendarComponent } from 'ion2-calendar';
import * as moment from 'moment';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  loaded = false;
  @ViewChild('calendar') cal: CalendarComponent;

  selectedProfile: number;
  date;
  // dateMulti: string[] = [];
  type: 'js-date'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    from: new Date(1),
    pickMode: 'single',
    daysConfig: [],
    showAdjacentMonthDay: false
  };
  constructor(
    private viewCtrl: ViewController,
    public questionnaire: QuestionnaireProvider,
    public constants: ConstantsProvider,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    public navParams: NavParams
  ) {
  }

  ionViewWillEnter() {
    this.selectedProfile = this.navParams.data.profileId;
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Calendar" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    console.log('ionViewWillEnter CalendarPage');
    let date = new Date();
    this.getDosageStats(date);
    // this.date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    this.date = moment().format('YYYY-MM-DD');
  }

  dateSelect() {
    console.log(this.date);
  }

  getDosageStats(firstDate) {
    firstDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), 1);
    let lastDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 0);
    this.questionnaire.getCalendarActivity(firstDate, lastDate, this.selectedProfile).subscribe((resp: any) => {
      console.log(resp);
      this.optionsMulti.daysConfig = []
      for (let dose of resp.result) {
        this.date = dose.dosageTakenDate;
        let doseRemaining = dose.totalDose - dose.doseTaken;

        this.optionsMulti.daysConfig.push({
          date: new Date(dose.dosageTakenDate),
          cssClass: (doseRemaining < dose.totalDose && dose.doseTaken != 0 ? dose.totalDose == dose.doseTaken ? '' : 'partial' : dose.totalDose > 0 && doseRemaining == dose.totalDose ? 'incomplete' : '') + (this.date != moment().format('YYYY-MM-DD') ? '' : ' on-selected')
        });
        console.log(this.optionsMulti.daysConfig);
        // this.date = dose.dosageTakenDate;
      }

      // let date = new Date();
      // this.date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      this.date = moment().format('YYYY-MM-DD');
      this.cal.options = this.optionsMulti;
      this.loaded = true;
    }, (err) => {
      console.log(err);
      this.loaded = true;
    });
  }


  monthChange(data) {
    console.log(data);
    this.loaded = false;
    let firstDate: Date = data.newMonth.dateObj;
    // let lastDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 0);
    this.getDosageStats(firstDate);
  }

  done() {
    console.log(this.date);
    this.viewCtrl.dismiss(this.date);
  }

}
