import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { DirectivesModule } from './../../directives/directives.module';
import { ChooseProfilePage } from './choose-profile';

@NgModule({
  declarations: [
    ChooseProfilePage,
  ],
  imports: [
    DefaultButtonModule,
    IonicPageModule.forChild(ChooseProfilePage),
    DirectivesModule
  ],
})
export class ChooseProfilePageModule {}
