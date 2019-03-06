import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { UtilitiesProvider } from './../../providers/utilities/utilities';
import { QuestionnaireProvider } from './../../providers/questionnaire/questionnaire';
import { UserProvider } from './../../providers/user/user';
import { ConstantsProvider } from './../../providers/constants/constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController, Platform } from 'ionic-angular';

/**
 * Generated class for the ChooseProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-profile',
  templateUrl: 'choose-profile.html',
})
export class ChooseProfilePage {
  selectedOption: number;
  profiles: any = [];
  relations: any = [];
  selectedProfile: number;
  selectedRelation: string;
  personName: string = "";
  yourName: string = "";
  selfProfile: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public constants: ConstantsProvider,
    public user: UserProvider,
    public popoverCtrl: PopoverController,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    private questionnaire: QuestionnaireProvider,
    public utility: UtilitiesProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseProfilePage');
  }

  ionViewWillEnter() {
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Choose Profile" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    this.getRelations();
    this.getProfiles();
    this.yourName = this.user.userData.name;
  }

  getRelations() {
    this.user.relations()
      .subscribe((resp: any) => {
        console.log(resp);
        this.relations = resp.result;
      }, err => {
        console.log(err);
      });
  }


  duplicateName = false;


  profileAlreadyExist(checkSelf?) {
    this.duplicateName = false;
    if ((checkSelf && this.profiles.find((el) => {
      console.log("self:", el);
      console.log("self:", this.yourName);
      console.log("self:", el.name.toLowerCase() == this.yourName.trim().toLowerCase());
      return el.name.toLowerCase() == this.yourName.trim().toLowerCase();
    })) || (!checkSelf && ((this.yourName && this.personName.trim().toLowerCase() == this.yourName.trim().toLowerCase()) || this.profiles.find((el) => {
      console.log(el);
      console.log("other:", el.name.toLowerCase() == this.personName.trim().toLowerCase());
      return el.name.toLowerCase() == this.personName.trim().toLowerCase();
    })))) {
      console.log("other:", this.personName.trim().toLowerCase() == this.yourName.trim().toLowerCase());
      this.duplicateName = true;
    }
    console.log(this.duplicateName)
    return this.duplicateName;
  }

  getProfiles() {
    this.user.profiles()
      .subscribe((resp: any) => {
        console.log(resp);
        this.selfProfile = resp.result.find(profile => profile.isSelf == 1);
        this.profiles = resp.result.filter(profile => profile.isSelf == 0);
        // this.profiles;
        this.profiles.unshift({
          id: 0,
          name: "+ Add New Person"
        })
      }, err => {
        console.log(err);
      });
  }

  selectOption(i) {
    this.selectedOption = i;
  }

  onNext() {
    this.questionnaire.resetAnswers();
    let params = {
      vitaminId: this.navParams.data.selectedVitamin,
      isOwner: 1,
      name: this.yourName,
      relation: "Self",
      profileId: 0
    };
    if (this.selfProfile)
      params.profileId = this.selfProfile.id;
    if (this.selectedOption == 2) {
      params.profileId = this.selectedProfile;
      params.name = this.personName;
      params.relation = this.selectedRelation;
      params.isOwner = 0;
    }
    this.questionnaire.getQuestions(params).subscribe((resp: any) => {
      console.log(resp);
      let questions = resp.result[0].questions/* .splice(0,2) */;
      questions = this.questionnaire.prepareAnswers(questions);
      if (Object.keys(this.questionnaire.answers).length > 0) {
        this.utility.showAlert({
          title: "",
          subTitle: this.constants.LANGS.PAGE_LABEL_START_COURSE_AGAIN,
          buttons: [
            {
              text: this.constants.LANGS.LABEL_YES,
              handler: data => {
                this.navCtrl.push(this.constants.PAGES.QUESTIONAIRE, { questions: questions }, { animate: false });
              }
            },
            {
              text: this.constants.LANGS.LABEL_NO,
              role: 'cancel',
              handler: data => {
                this.questionnaire.answers = {};
                console.log('canceled');
              }
            }
          ]
        });
      } else {
        this.navCtrl.push(this.constants.PAGES.QUESTIONAIRE, { questions: questions });
      }

      console.log(questions);
    }, (err) => {
      console.log(err);
      this.navCtrl.pop();
    });
  }

  openProfilePopover(event) {
    console.log("openProfilePopover");
    let popover = this.popoverCtrl.create(AddProfilePopover, { options: this.profiles, selectedProfile: this.selectedProfile }, { cssClass: "choose-profile" });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((data) => {
      if (data) {
        console.log(data.selectedOption);
        this.selectedProfile = data.selectedOption.id;
        if (this.selectedProfile > 0) {
          this.personName = data.selectedOption.name;
          this.selectedRelation = data.selectedOption.relation;
        }
        else {
          this.personName = "";
          this.selectedRelation = "";
        }
      }
    });
  }

  openRelationPopover(event) {
    console.log("openRelationPopover");
    let popover = this.popoverCtrl.create(RelationPopover, { options: this.relations, selectedRelation: this.selectedRelation }, { cssClass: "choose-profile" });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((data) => {
      if (data) {
        console.log(data.selectedOption);
        this.selectedRelation = data.selectedOption.relation;
      }
    });
  }

  getSelectedProfile() {
    // if(this.selectedProfile > 0)
    return this.profiles.find(profile => profile.id == this.selectedProfile).name;
    // else
    //   return "";
  }

  getSelectedRelation() {
    return this.selectedRelation ? this.selectedRelation : "";
  }

}

@Component({
  selector: 'add-profile-dropdown',
  template: `
    <ion-list no-lines>
      <button ion-item [ngClass]="{'active': navParams.data.selectedProfile == option.id}" (click)="selectOption(option)" *ngFor="let option of navParams.data.options">{{ option.name }}</button>
    </ion-list>
  `
})
export class AddProfilePopover {
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

@Component({
  selector: 'relation-dropdown',
  template: `
    <ion-list style="margin-bottom: 0;">
      <button ion-item [ngClass]="{'active': navParams.data.selectedRelation == option.relation}" (click)="selectOption(option)" *ngFor="let option of navParams.data.options">{{ option.relation }}</button>
    </ion-list>
  `
})
export class RelationPopover {
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
