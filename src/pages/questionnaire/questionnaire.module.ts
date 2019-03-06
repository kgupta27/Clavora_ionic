import { DefaultButtonModule } from './../../components/default-button/default-button.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionnairePage } from './Questionnaire';

@NgModule({
  declarations: [
    QuestionnairePage,
  ],
  imports: [
    DefaultButtonModule,
    IonicPageModule.forChild(QuestionnairePage),
  ],
})
export class QuestionnairePageModule { }
