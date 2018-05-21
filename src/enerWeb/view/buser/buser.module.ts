import {NgModule} from '@angular/core';

import {BUserListPage} from "./buserList/buserList";
import {BUserRoutingModule} from "./buser-routing.module";
import {SharedModule} from "../common/SharedModule/SharedModule";




@NgModule({
  declarations: [
    BUserListPage,
    /*LoginPage*/

  ],
  imports: [
    BUserRoutingModule,
    /*公共*/
    SharedModule
  ],

  providers: [

  ],
  exports: [],
  entryComponents: [

  ]
})
export class BUserModule {
}
