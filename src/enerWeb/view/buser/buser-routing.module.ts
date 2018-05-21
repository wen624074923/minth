
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {BUserListPage} from "./buserList/buserList";
import {LoginPage} from "./login/login";



const mRoutes: Routes = [
  {
    path: 'buserList',
    component: BUserListPage,
  },
 /* {
    path: 'login',
    component: LoginPage,
  }*/
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
export class BUserRoutingModule {
}
