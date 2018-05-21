
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ViewHeader} from "../Comp/viewHeader/viewHeader";
import {ViewBody} from "../Comp/viewBody/viewBody";
import {ZmSearchBox} from "../form/ZmSearchBox";
import {Ng2Echarts} from "ng2-echarts";
import {I18n, CustomDatepickerI18n} from "../zhcn/zhcn";
import {NgbDatepickerI18n} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    /*form*/
    ZmSearchBox,
    //主体
    ViewBody,
    ViewHeader,
    /*图标*/
    Ng2Echarts

  ],
  exports: [
    ViewBody,
    ViewHeader,
    ZmSearchBox,
    /*图标*/
    Ng2Echarts
  ],
  //日历
  providers: [
    I18n,
    {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})


export class SharedModule {}
