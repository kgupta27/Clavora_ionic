import { MomentModule } from 'ngx-moment';
import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursePlanManagementPage } from './course-plan-management';

@NgModule({
  declarations: [
    CoursePlanManagementPage,
  ],
  imports: [
    DefaultButtonModule,
    IonicPageModule.forChild(CoursePlanManagementPage),
    MomentModule
  ],
})
export class CoursePlanManagementPageModule { }
