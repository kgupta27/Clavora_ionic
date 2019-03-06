import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoInternetPage } from './no-internet';
import { DefaultButtonModule } from '../../components/default-button/default-button.module';

@NgModule({
  declarations: [
    NoInternetPage,
  ],
  imports: [
    IonicPageModule.forChild(NoInternetPage),
    DefaultButtonModule
  ],
})
export class NoInternetPageModule {}
