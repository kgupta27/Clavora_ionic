import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { GOOGLE_WEB_CLIENT_ID } from './../../app/constant';

/*
  Generated class for the GoogleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class GoogleProvider {

  constructor(
    public googlePlus: GooglePlus,
    private storage: Storage
  ) {
    console.log('Hello GoogleProvider Provider');
  }
  trySilentLogin() {
    console.log("trySilentLogin");
    return new Promise((resolve, reject) => {
      //checks if user is already signed in to the app and sign them in silently if they are.
      this.googlePlus.trySilentLogin({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': GOOGLE_WEB_CLIENT_ID, // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true
      }).then(user => {
        this.setGoogleUser(user)
          .then(res => resolve(res));
      }, error => reject(error));
    });
  }
  // Used to login to google from the app
  doGoogleLogin() {
    console.log("doGoogleLogin");
    return new Promise((resolve, reject) => {
      this.googlePlus.login({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': GOOGLE_WEB_CLIENT_ID, // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true
      }).then(user => {
        this.setGoogleUser(user)
          .then(res => resolve(res))
      },
        error => reject(error)
        );
    });
  }

  // used for google logout
  // doGoogleLogout() {
  //   return this.googlePlus.logout()
  // }

  doGoogleLogout() {
    return new Promise((resolve, reject) => {
      this.googlePlus.logout()
        .then(response => {
          this.googlePlus.disconnect();
          //user logged out so we will remove him from the NativeStorage
          this.removeGoogleUser();
          resolve();
        }, function (error) {
          reject(error);
        });
    });
  }

  // used to get the google user's information
  getGoogleUser() {
    return this.storage.get('googleUser');
  }

  // used to remove the google user's information
  removeGoogleUser() {
    return this.storage.remove('googleUser');
  }

  //Set the googleuser for the app using
  setGoogleUser(user: any) {
    console.log('setGoogleUser');
    console.log(user);

    return new Promise((resolve, reject) => {
      resolve(this.storage.set('googleUser',
        {
          source: 'google',
          sourceId: user.userId,
          // firstName: user.displayName.split(" ")[0],
          // lastName: user.displayName.split(" ").pop(),
          /*           firstName: user.givenName,
                    lastName: user.familyName,
           */
          // profileImage: user.imageUrl,
          email: user.email,
          socialToken: user.accessToken
        })
      );
    });
  }

}
