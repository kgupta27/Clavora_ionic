import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPasswordPage } from './forgot-password';
import { DefaultButtonModule } from '../../components/default-button/default-button.module';

@NgModule({
  declarations: [
    ForgotPasswordPage,
  ],
  imports: [
    DefaultButtonModule,
    IonicPageModule.forChild(ForgotPasswordPage),
  ],
})
export class ForgotPasswordPageModule { }
