import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardingPage } from './onboarding';

@NgModule({
  declarations: [
    OnboardingPage,
  ],
  imports: [
    DefaultButtonModule,
    IonicPageModule.forChild(OnboardingPage),
  ],
})
export class OnboardingPageModule {}
