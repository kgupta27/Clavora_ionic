import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangePasswordPage } from './change-password';

@NgModule({
  declarations: [
    ChangePasswordPage,
  ],
  imports: [
    DefaultButtonModule,
    IonicPageModule.forChild(ChangePasswordPage),
  ],
})
export class ChangePasswordPageModule { }
