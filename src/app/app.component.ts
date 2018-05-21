import {
  AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit,
  ViewChild
} from '@angular/core';
import {Actor} from "./actor.model";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import * as Immutable from 'immutable';
import {error} from "util";

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>
  `
  ,
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  // public actorSubject: Subject<Actor> = new BehaviorSubject<Actor>(null)

  slogan = 'Just movie information';
  title = 'Terminator 1';
  actor = new Actor('Arnold', 'Schwarzenegger');
  actorSub: BehaviorSubject<Actor> = new BehaviorSubject<Actor>(null);
  public imutableActor = Immutable.fromJS({"firstName": "Arnold", "lastName": "Schwarzenegger"});


  constructor(private cdr: ChangeDetectorRef) {

  }

}






