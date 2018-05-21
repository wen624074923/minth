/**
 * Created by 10022082 on 2018/5/16.
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";


import {BoardListPage} from "./boardList/boardList";



const mRoutes: Routes = [
  {
    path: 'boardList',
    component: BoardListPage,
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
export class ShowboardRoutingModule {
}
