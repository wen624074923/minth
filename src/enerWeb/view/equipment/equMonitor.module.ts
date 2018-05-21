/**
 * Created by 10022082 on 2018/5/11.
 */
import {NgModule} from '@angular/core';


import {EquMonitorPage} from "./equMonitor/equMonitor";
import {SharedModule} from "../common/SharedModule/SharedModule";
import {EquDetailPage} from "./equDetail/equDetail";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {EquMonitorRoutingModule} from "./equMonitor-routing.module";


@NgModule({
  declarations: [
    EquMonitorPage,
    EquDetailPage,
  ],
  imports: [

    CommonModule,
    FormsModule,
    //路由模块
    EquMonitorRoutingModule,
    /*公共模块*/
    SharedModule
  ],

  providers: [
  ],
  exports: [],
  entryComponents: [
  ]
})
export class EquipmentModule {}
