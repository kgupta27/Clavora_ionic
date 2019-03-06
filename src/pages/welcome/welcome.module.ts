import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePage } from './welcome';

@NgModule({
  declarations: [
    WelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage),
    DefaultButtonModule
  ],
})
export class WelcomePageModule {}
