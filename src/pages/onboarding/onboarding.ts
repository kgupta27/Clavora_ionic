import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { UserProvider } from './../../providers/user/user';
import { ConstantsProvider } from './../../providers/constants/constants';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Platform } from 'ionic-angular';

/**
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {
  @ViewChild(Slides) slides: Slides;
  slidesData: any = [
    {
      image: 'assets/imgs/onboarding/slide1-img.png',
      title: 'Welcome to Clavora',
      description: `Thanks for using Clavora.
      The app that builds your personally programmed supplement guide.
      `
    },
    {
      image: 'assets/imgs/onboarding/slide2-img.png',
      title: 'Select Your Supplements',
      description: `Start boosting your nutritional health in just a few minutes…
      Simply select our easy-to-follow supplement surveys.
      `
    },
    {
      image: 'assets/imgs/onboarding/slide3-img.png',
      title: 'Follow the Course',
      description: `Create personalized course plans with ease. Our daily supplement notifications keep you on course.`
    },
    {
      image: 'assets/imgs/onboarding/slide4-img.png',
      title: 'Update Your Health',
      description: `Stay informed on current health topics, trends, new supplements and more. We believe educating yourself is the path to unlocking your health.`
    },
    {
      image: 'assets/imgs/onboarding/slide5-img.png',
      title: 'A Healthier You!',
      description: `That path to a healthier life for you and your family is waiting…
      Start your Clavora journey here and now!`
    },
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public constants: ConstantsProvider,
    public firebaseAnalytics: FirebaseAnalytics, public platform: Platform,
    private user: UserProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
    if (this.platform.is('cordova')) this.firebaseAnalytics.logEvent('page_view', { page: "Onboarding" })
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }

  onNext() {
    if (this.slides.isEnd())
      this.onSkip()
    else
      this.slides.slideNext();
  }

  onSkip() {
    // if(this.navCtrl.canGoBack())
    //   this.navCtrl.pop()
    // else{
    this.user.isFirstRunComplete = true;
    this.navCtrl.setRoot(this.constants.PAGES.LOGIN_SIGNUP);
    // }
  }
}
