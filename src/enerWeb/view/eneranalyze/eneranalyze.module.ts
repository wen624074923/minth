import {NgModule} from '@angular/core';


import {SharedModule} from "../common/SharedModule/SharedModule";

import {EneranalyzeRoutingModule} from "./eneranalyze-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {enerItemPage} from "./enerItem/enerItem";



@NgModule({
  declarations: [

    enerItemPage,

  ],
  imports: [
    CommonModule,
    FormsModule,
    EneranalyzeRoutingModule,
    /*公共*/
    SharedModule


  ],

  providers: [

  ],
  exports: [],
  entryComponents: [

  ]
})
export class EneranalyzeModule {
}






