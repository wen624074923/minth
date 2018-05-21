import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainLayoutComp} from "./main/layout/main.layout";



const mRoutes: Routes = [
  {
    path: "main",
    /*canActivateChild:[MainGuard],*/
    component: MainLayoutComp,
    children:[

      //首页
      { path:"buser",loadChildren:'enerWeb/view/buser/buser.module#BUserModule'},
      //设备监测 reportformModule
      { path:"equipment",loadChildren:'enerWeb/view/equipment/equMonitor.module#EquipmentModule'},
      //报表统计
      { path:"reportform",loadChildren:'enerWeb/view/reportform/reportform.module#ReportformModule'},
      //能耗分析   EneranalyzeModule   BoardModule
      { path:"eneranalyze",loadChildren:'enerWeb/view/eneranalyze/eneranalyze.module#EneranalyzeModule'},
      //看板展示   UserModule
      { path:"showboard",loadChildren:'enerWeb/view/showboard/showboard.module#ShowboardModule'},
      //用户管理
      { path:"user",loadChildren:'enerWeb/view/user/user.module#UserModule'},
      //{ path:"buserDevice",loadChildren:'zmWeb/views/showboard/showboard.module#BoardModule'},
      /*{ path:"mngDevice",loadChildren:'zmWeb/views/mngDevice/mngDevice.module#MngDeviceModule'},*/
     /* { path:"buser",loadChildren:'zmWeb/views/buser/buser.module#BUserModule'},*/

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class EnerMainRoutingModule { }
