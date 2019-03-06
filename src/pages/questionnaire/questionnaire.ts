import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { UtilitiesProvider } from './../../providers/utilities/utilities';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController, Platform } from 'ionic-angular';
import { QUESTION_TYPE_MULTI_OPTIONS, QUESTION_TYPE_TRUE_FALSE } from '../../app/constant';
import { ConstantsProvider } from '../../providers/constants/constants';
import { QuestionnaireProvider } from './../../providers/questionnaire/questionnaire';


/**
 * Generated class for the QuestionnairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Questionnaire',
  templateUrl: 'Questionnaire.html',
})
export class QuestionnairePage {
  currentQuestionIndex = 0;
  readonly QUESTION_TYPE_TRUE_FALSE = QUESTION_TYPE_TRUE_FALSE;
  readonly QUESTION_TYPE_MULTI_OPTIONS = QUESTION_TYPE_MULTI_OPTIONS;

  // questions = [];
  questions = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private questionnaire: QuestionnaireProvider,
    private firebaseAnalytics: FirebaseAnalytics,
    private platform: Platform,
    private utility: UtilitiesProvider,
    public constants: ConstantsProvider,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionnairePage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Questionaire" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    this.questions = this.navParams.data.questions;
    if (Object.keys(this.questionnaire.answers).length > 0) {
      this.openSummary(true);
    }
  }

  showInfo(ev, description) {
    ev.stopPropagation();
    this.utility.showInfoAlert({
      title: "",
      subTitle: description,
      buttons: []
    });
  }

  addAnswer(question, isYes) {
    let yesAnswerIndex = question.questionAnswer[0].value.toLowerCase() == 'no' ? 1 : 0;
    let noAnswerIndex = yesAnswerIndex ? 0 : 1;
    console.log(question.questionAnswer[0].value.toLowerCase() == 'no' ? 1 : 0);
    console.log(yesAnswerIndex);
    console.log(noAnswerIndex);

    console.log(question.questionAnswer[0].value.toLowerCase() == 'no');
    this.questionnaire.addAnswer(question.id, question.questionAnswer[isYes ? yesAnswerIndex : noAnswerIndex]);
  }

  openMultiChoicePopover(event, question) {
    let popover = this.popoverCtrl.create(MultiChoicePopover, { options: question.questionAnswer, selectedAnswer: this.questionnaire.answers[question.id] }, { cssClass: "questions" });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((data) => {
      if (data) {
        console.log(data.selectedOption);
        let nextQuestion = this.questions[this.currentQuestionIndex + 1];
        let lastChosenAnswer = this.questionnaire.answers[data.selectedOption.questionId];
        if (data.selectedOption.relQuestions) {
          console.log(lastChosenAnswer?lastChosenAnswer.relatedQuestionId:"none");
          this.questions.splice(this.currentQuestionIndex + 1,
            lastChosenAnswer && lastChosenAnswer.relatedQuestionId!=""?1:0,
            data.selectedOption.relQuestions);
        } else {
          if (nextQuestion && lastChosenAnswer && nextQuestion.id == lastChosenAnswer.relatedQuestionId) {
            console.log(lastChosenAnswer);
            console.log(nextQuestion.id);
            delete this.questionnaire.answers[lastChosenAnswer.relatedQuestionId];
            console.log(this.questionnaire.answers);
            this.questions.splice(this.currentQuestionIndex + 1, 1);
          }
        }
        this.questionnaire.addAnswer(data.selectedOption.questionId, data.selectedOption);
      }
    });
  }


  changeQuestion(changedIndex) {
    // return if the index out of bound
    if (changedIndex == -1 || changedIndex == this.questions.length) {
      return;
    }

    this.currentQuestionIndex = changedIndex;

  }

  openSummary(dontAnimate?) {
    this.navCtrl.push(this.constants.PAGES.SUMMARY, { questions: this.questions }, { animate: !dontAnimate });
  }
}


@Component({
  selector: 'answer-dropdown',
  template: `
    <ion-list no-lines>
      <button ion-item [ngClass]="{'gradient-option': navParams.data.selectedAnswer && navParams.data.selectedAnswer.id==option.id}" (click)="selectOption(option)" *ngFor="let option of navParams.data.options">{{ option.value + ' ' + option.valueUnit }}</button>
    </ion-list>
  `
})
export class MultiChoicePopover {
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    console.log(navParams.data);
  }

  selectOption(option) {
    this.navParams.data.selectedAnswer = option;
    this.viewCtrl.dismiss({ selectedOption: option });
  }
}
