/**
 * Created by 10022082 on 2018/5/14.
 */

import {NgModule} from '@angular/core';
import {SharedModule} from "../common/SharedModule/SharedModule";
import {ReportformRoutingModule} from "./reportform-routing";
import {RepStatisticsPage} from "./repStatistics/repStatistics";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    RepStatisticsPage,
  ],
  imports: [
    /*公共*/
    SharedModule,
    /*第三方*/
    NgbModule,

    ReportformRoutingModule
  ],

  providers: [

  ],
  exports: [],
  entryComponents: [

  ]
})
export class ReportformModule{
}
