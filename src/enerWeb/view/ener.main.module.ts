import { NgModule } from '@angular/core';
import {EnerMainRoutingModule} from "./ener.main-routing.module";

import {MainLayoutComp} from "./main/layout/main.layout";
import {MainHeaderComp} from "./main/head/main.header";
import {SideBarComp} from "./main/sideBar/sideBar";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";






@NgModule({
  declarations: [
    MainLayoutComp,
    MainHeaderComp,
    SideBarComp,

   /* Ng2Echarts,*/
  ],
  imports: [
    CommonModule,
    NgbModule,
    EnerMainRoutingModule,
  ],
  providers: [
  ]
})
export class EnerMainModule {}
