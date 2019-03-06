import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { AddProfilePopover, RelationPopover } from './../pages/choose-profile/choose-profile';
import { ProfilePopover } from './../pages/course-plan-management/course-plan-management';
import { FacebookProvider } from './../providers/facebook/facebook';
import { Facebook } from '@ionic-native/facebook';
import { GoogleProvider } from './../providers/google/google';
import { GooglePlus } from '@ionic-native/google-plus';
import { SecureHttpInterceptor } from './../providers/SecureHttpInterceptor';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Device } from '@ionic-native/device';
import { Push } from '@ionic-native/push';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MultiChoicePopover } from '../pages/questionnaire/Questionnaire';
import { MyApp } from './app.component';
import { ConstantsProvider } from '../providers/constants/constants';
import { UserProvider } from '../providers/user/user';
import { HttpProvider } from '../providers/http/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilitiesProvider } from '../providers/utilities/utilities';
import { QuestionnaireProvider } from '../providers/questionnaire/questionnaire';
import { MomentModule } from 'ngx-moment';
import { Crashlytics } from '@ionic-native/fabric';


@NgModule({
  declarations: [
    MyApp,
    AddProfilePopover,
    MultiChoicePopover,
    ProfilePopover,
    RelationPopover
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    MomentModule,
    IonicModule.forRoot(MyApp, {
      mode: "ios",
      backButtonText: "",
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddProfilePopover,
    MultiChoicePopover,
    ProfilePopover,
    RelationPopover
  ],
  providers: [
    Device,
    Facebook,
    FirebaseAnalytics,
    GooglePlus,
    Push,
    StatusBar,
    SplashScreen,
    Crashlytics,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecureHttpInterceptor,
      multi: true
    }, ConstantsProvider,
    FacebookProvider,
    GoogleProvider,
    HttpProvider,
    UserProvider,
    UtilitiesProvider,
    QuestionnaireProvider
  ]
})
export class AppModule { }
