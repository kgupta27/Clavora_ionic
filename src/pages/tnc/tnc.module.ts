import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TncPage } from './tnc';

@NgModule({
  declarations: [
    TncPage,
  ],
  imports: [
    DefaultButtonModule,
    IonicPageModule.forChild(TncPage),
  ],
})
export class TncPageModule {}
