import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseConsumptionPage } from './choose-consumption';

@NgModule({
  declarations: [
    ChooseConsumptionPage,
  ],
  imports: [
    DefaultButtonModule,
    IonicPageModule.forChild(ChooseConsumptionPage),
  ],
})
export class ChooseConsumptionPageModule {}
