
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {enerItemPage} from "./enerItem/enerItem";



const mRoutes: Routes = [
  {
    path: 'enerItem',
    component: enerItemPage,
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
export class EneranalyzeRoutingModule {
}
