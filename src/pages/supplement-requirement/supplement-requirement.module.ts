import { MomentModule } from 'ngx-moment';
import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { CoursePlanModule } from './../../components/course-plan/course-plan.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupplementRequirementPage } from './Supplement-requirement';

@NgModule({
  declarations: [
    SupplementRequirementPage,
  ],
  imports: [
    CoursePlanModule,
    DefaultButtonModule,
    IonicPageModule.forChild(SupplementRequirementPage),
    MomentModule
  ],
})
export class SupplementRequirementPageModule {}
