import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Facebook } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';

/*
  Generated class for the FacebookProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FacebookProvider {

  constructor(
    public fb: Facebook,
    private storage: Storage
  ) {
    console.log('Hello FacebookProvider Provider');
  }

  // Used to login to the app via facebook
  doFacebookLogin() {
    console.log("doFacebookLogin");
    //    let env = this;

    return new Promise((resolve, reject) => {
      console.log("doFacebookLogin Promise");
      //["public_profile"] is the array of permissions, you can add more if you need
      this.fb.login(["public_profile", "email"]).then(response => {

        console.log("doFacebookLogin Promise login");
        console.log("doFacebookLogin Promise login response", response);
        //Getting name and gender properties
        //        env.fb.api("/me?fields=first_name,last_name,gender,email", [])
        this.fb.api("/me?fields=first_name,last_name,gender,email", [])
          .then(user => {
            console.log("doFacebookLogin Promise login then");
            user.token = response.authResponse.accessToken;
            this.setFacebookUser(user)
              .then(res => resolve(res));
          })
      }, error => reject(error));
    });
  }

  // Used for facebook logout
  doFacebookLogout() {
    return this.fb.logout()
  }

  // get facebook user
  getFacebookUser() {
    return this.storage.get('facebookUser');
  }

  // remove facebook user
  removeFacebookUser() {
    return this.storage.remove('facebookUser');
  }

  // set the facebook user as app user
  setFacebookUser(user: any) {
    console.log("setFacebookUser");
    console.log(user);
    return new Promise((resolve, reject) => {
      resolve(this.storage.set('facebookUser',
        {
          source: 'facebook',
          sourceId: user.id,
          // firstName: user.first_name,
          // lastName: user.last_name,
          // profileImage: "https://graph.facebook.com/" + user.id + "/picture?type=large",
          email: user.email,
          socialToken: user.token
        })
      );
    });
  }

}
