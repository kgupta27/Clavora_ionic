import { UtilitiesProvider } from './../providers/utilities/utilities';
import { UserProvider } from './../providers/user/user';
import { Component, isDevMode } from '@angular/core';
import { Platform, Events, NavController, App } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ENV } from "@app/env";
import { ConstantsProvider } from '../providers/constants/constants';
import { Crashlytics } from '@ionic-native/fabric';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    device: Device,
    platform: Platform,
    private app: App,
    public constants: ConstantsProvider,
    private push: Push,
    private crash: Crashlytics,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private events: Events,
    private utility: UtilitiesProvider,
    private user: UserProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      splashScreen.hide();
      // crash.sendCrash();
      if (ENV.name == 'Dev' || ENV.name == 'QA')
        this.buildTag();
      statusBar.styleLightContent();
      if (platform.is('cordova')) {
        this.setupPush();
      }
      this.events.subscribe("user:unauthorizeLogout", () => {
        this.unauthorizeLogout();
      });
      if (device.model == "iPhone10,3" || device.model == "iPhone10,6") {
        let bodyClass = document.getElementsByTagName('ion-app')[0];
        bodyClass.classList.add('i-phone-x');
      }
      /*
      this.rootPage = "ChooseProfilePage";
      /*/
      this.startApp();
      //*/

    });
  }

  startApp() {
    this.user.fetchStoredDetails(
      () => {
        this.rootPage = this.constants.PAGES.ONBOARDING;
        // if (this.user.userData) {
        //   this.rootPage = this.user.getHomePage();
        // } else if (this.user.isFirstRunComplete) {
        //   this.rootPage = this.constants.PAGES.LOGIN_SIGNUP;
        // } else {
        //   this.rootPage = this.constants.PAGES.ONBOARDING;
        // }
      }
    );
  }

  unauthorizeLogout() {

    this.user.clearData();
    this.rootPage = this.constants.PAGES.LOGIN_SIGNUP;
  }

  setupPush() {
    console.log("setupPush");
    // to check if we have permission
    this.push.hasPermission()
      .then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }
      });

    const options: PushOptions = {
      android: {
        senderID: "1013875668618",
        sound: true,
        vibrate: true,
        clearBadge: true
      },
      ios: {
        alert: 'true',
        badge: false,
        sound: 'true',
        clearBadge: true
      },
    };
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => {
      console.log('Received a notification')
      console.log(JSON.stringify(notification));
      if (notification.additionalData.foreground) {
        this.utility.showToast({ message: notification.message });
      } else {
        if (notification.additionalData.a_data.param) {
          this.user.handleNotification(notification.additionalData.a_data.page, { courseId: notification.additionalData.a_data.param, profileId: notification.additionalData.a_data.profileId }, this.navCtrl);
        } else {
          this.user.handleNotification(notification.additionalData.a_data.page, { profileId: notification.additionalData.a_data.profileId }, this.navCtrl);
        }
      }
    }, reason => {
      console.log(reason);
    });

    pushObject.on('registration').subscribe((registration: any) => {
      console.log('Device registered', JSON.stringify(registration));
      this.user.registrationToken = registration.registrationId;
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }

  get navCtrl(): NavController {
    return this.app.getRootNav();
  }

  /*
  * Put a tag on the app to show which environment is it running on
  * Doesn't show anything if the app is build with --prod
  */
  private buildTag() {
    if (!isDevMode()) {
      return;
    }
    let buildLabel = document.getElementById("testBuild");
    buildLabel.style.display = "inline-block";
    buildLabel.innerHTML = ENV.name.toUpperCase();
  }
}
