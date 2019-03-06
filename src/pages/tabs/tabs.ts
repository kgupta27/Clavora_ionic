import { ConstantsProvider } from './../../providers/constants/constants';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabIndex: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public constants: ConstantsProvider
  ) {
    if (this.navParams.data.tabIndex)
      this.tabIndex = this.navParams.data.tabIndex;
  }

}
