/**
 * Created by 10022082 on 2018/5/9.
 */
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginPage} from "../enerWeb/view/buser/login/login";


const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '', loadChildren: 'enerWeb/view/ener.main.module#EnerMainModule' },

];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  /*imports: [RouterModule.forChild(routes)],*/

  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
