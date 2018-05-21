/**
 * Created by 10022082 on 2018/5/17.
 */
/**
 * Created by 10022082 on 2018/5/14.
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserAdminPage} from "./userAdmin/userAdmin";



const mRoutes: Routes = [
  {
    path: 'useradmin',
    component: UserAdminPage,
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
export class UserRoutingModule {
}
