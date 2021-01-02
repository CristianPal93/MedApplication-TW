import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterantionService implements OnInit {

  constructor() { }
  private component  = new BehaviorSubject<string>('home');
  component$ = this.component.asObservable();

  private subComponent = new BehaviorSubject<string>('');
  subComponent$ = this.subComponent.asObservable();

  private registerComponentStatus = new BehaviorSubject<boolean>(false);
  registerComponentStatus$ = this.registerComponentStatus.asObservable();

  private loginComponentStatus = new BehaviorSubject<boolean>(false);
  loginComponentStatus$ = this.loginComponentStatus.asObservable();

  private navBarComponentStatus = new BehaviorSubject<string>('home');
  navBarComponentStatus$ = this.navBarComponentStatus.asObservable();

  private forgotComponentStatus = new BehaviorSubject<boolean>(false);
  forgotComponentStatus$ = this.forgotComponentStatus.asObservable();

  private getUserRightStats = new BehaviorSubject<string>('');
  getUserRightsStats$ = this.getUserRightStats.asObservable();

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  sendComponent(nameOfComponent){
    this.component.next(nameOfComponent);
  }
  // tslint:disable-next-line:typedef
  sendSubComponent(nameOfSubComponent){
    this.subComponent.next(nameOfSubComponent);
  }
  // tslint:disable-next-line:typedef
  registerStatus(status){
    this.registerComponentStatus.next(status);
  }
  // tslint:disable-next-line:typedef
  loginStatus(status){
    this.loginComponentStatus.next(status);
  }
  // tslint:disable-next-line:typedef
  navBarComponent(name){
    this.navBarComponentStatus.next(name);
  }
  // tslint:disable-next-line:typedef
  forgotStatus(status){
    this.forgotComponentStatus.next(status);
  }

  passUserRights(rights){
    this.getUserRightStats.next(rights);
  }

}
