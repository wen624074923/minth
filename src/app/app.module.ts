import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {HighlightDirective} from "./hightlight.direct";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {Popup} from "../enerWeb/view/common/popup/popup";
import {LoginPage} from "../enerWeb/view/buser/login/login";


/*import {NgxEchartsModule} from "ngx-echarts";*/



@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoginPage




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    //初始化弹窗
    Popup.getInstance().init();

  }
}
