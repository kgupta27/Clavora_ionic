import { UtilitiesProvider } from './../../providers/utilities/utilities';
import { ConstantsProvider } from './../../providers/constants/constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-no-internet',
  templateUrl: 'no-internet.html',
})
export class NoInternetPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public utility: UtilitiesProvider,
    public constants: ConstantsProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoInternetPage');
  }

  retry() {
    console.log(this.navParams.data);
    this.utility.showLoader();
    this.navParams.data.request.retry(0).subscribe((data) => {
      this.utility.hideLoader();
      this.navCtrl.pop({ animate: false });
      this.navParams.data.subject.next(data);
    }, (err) => {
      this.utility.hideLoader();

      if (err.status != 0) {
        this.utility.showToast({ message: err.error.message });
        this.navParams.data.subject.error(err);
        this.navCtrl.pop({ animate: false });
      }
    });
  }
}
