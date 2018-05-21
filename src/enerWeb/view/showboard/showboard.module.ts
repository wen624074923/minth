/**
 * Created by 10022082 on 2018/5/16.
 */
import {NgModule} from '@angular/core';
import {SharedModule} from "../common/SharedModule/SharedModule";
import {BoardListPage} from "./boardList/boardList";
import {ShowboardRoutingModule} from "./showboard-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";




@NgModule({
  declarations: [

    BoardListPage,

  ],
  imports: [
    ShowboardRoutingModule,
    /*公共*/
    SharedModule,
    /*第三方*/
    NgbModule,


  ],

  providers: [

  ],
  exports: [],
  entryComponents: [

  ]
})
export class ShowboardModule {
}
