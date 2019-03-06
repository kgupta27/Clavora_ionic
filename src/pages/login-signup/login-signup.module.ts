import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSignupPage } from './login-signup';
import { DefaultButtonModule } from '../../components/default-button/default-button.module';

@NgModule({
  declarations: [
    LoginSignupPage],
  imports: [
   
    DefaultButtonModule, IonicPageModule.forChild(LoginSignupPage)
  ],
})
export class LoginSignupPageModule { }
