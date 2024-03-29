import { MomentModule } from 'ngx-moment';
import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    MomentModule,
    IonicPageModule.forChild(CalendarPage),
    DefaultButtonModule,
    CalendarModule
  ],
})
export class CalendarPageModule {}
