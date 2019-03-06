import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { CoursePlanModule } from './../../components/course-plan/course-plan.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursePlanPage } from './course-plan';

@NgModule({
  declarations: [
    CoursePlanPage,
  ],
  imports: [
    CoursePlanModule,
    DefaultButtonModule,
    IonicPageModule.forChild(CoursePlanPage),
  ],
})
export class CoursePlanPageModule {}
