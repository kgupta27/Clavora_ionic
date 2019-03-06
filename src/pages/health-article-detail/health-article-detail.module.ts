import { MomentModule } from 'ngx-moment';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthArticleDetailPage } from './health-article-detail';

@NgModule({
  declarations: [
    HealthArticleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthArticleDetailPage),
    MomentModule
  ],
})
export class HealthArticleDetailPageModule {}
