/**
 * Created by 10022082 on 2018/5/11.
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";


import {EquMonitorPage} from "./equMonitor/equMonitor";
import {EquDetailPage} from "./equDetail/equDetail";



const mRoutes: Routes = [
  {
    path: 'equMonitor',
    component: EquMonitorPage,
  },
  {
    path: 'equDetail',
    component: EquDetailPage,
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
export class EquMonitorRoutingModule {
}
