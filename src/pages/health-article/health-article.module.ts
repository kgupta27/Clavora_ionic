import { MomentModule } from 'ngx-moment';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthArticlePage } from './health-article';

@NgModule({
  declarations: [
    HealthArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(HealthArticlePage),
    MomentModule
  ],
})
export class HealthArticlePageModule {}
