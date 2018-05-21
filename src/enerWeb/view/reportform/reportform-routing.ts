/**
 * Created by 10022082 on 2018/5/14.
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {RepStatisticsPage} from "./repStatistics/repStatistics";



const mRoutes: Routes = [
  {
    path: 'repstatistics',
    component: RepStatisticsPage,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class ReportformRoutingModule {
}
