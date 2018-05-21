import {Component, OnDestroy, Renderer, Output, EventEmitter, Input} from '@angular/core';


// TODO: move layouts into the framework
@Component({
  selector: 'zmt-main-layout',
  template: `
    <ener-main-header></ener-main-header>
    <ener-side-bar ></ener-side-bar>
    <div class="main-content">
       <router-outlet></router-outlet>
   </div>
  `,
  styleUrls: ['main.layout.scss'],
})
export class MainLayoutComp {}

