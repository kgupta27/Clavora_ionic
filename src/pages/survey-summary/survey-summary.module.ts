import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { SurveySummaryPage } from './survey-summary';

@NgModule({
  declarations: [
    SurveySummaryPage,
  ],
  imports: [
    DefaultButtonModule,
    IonicPageModule.forChild(SurveySummaryPage),
  ],
})
export class SurveySummaryPageModule { }
