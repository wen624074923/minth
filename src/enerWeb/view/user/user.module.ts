/**
 * Created by 10022082 on 2018/5/17.
 */
/**
 * Created by 10022082 on 2018/5/14.
 */

import {NgModule} from '@angular/core';
import {SharedModule} from "../common/SharedModule/SharedModule";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UserAdminPage} from "./userAdmin/userAdmin";
import {UserRoutingModule} from "./user-routing.module";



@NgModule({
  declarations: [
    UserAdminPage,
  ],
  imports: [
    /*公共*/
    SharedModule,
    /*第三方*/
    NgbModule,
    UserRoutingModule
    /*ReportformRoutingModule*/
  ],

  providers: [

  ],
  exports: [],
  entryComponents: [

  ]
})
export class UserModule{
}
