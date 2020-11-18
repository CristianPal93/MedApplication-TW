import { registerLocaleData } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InterantionService } from '../_services/interantion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  component ='home' ;

  constructor(private _interationService: InterantionService) { }

  ngOnInit(): void {
    this.component = 'home';
  }
  // tslint:disable-next-line:typedef
  onClickEvent($event) {
    this._interationService.sendSubComponent($event);
    this._interationService.registerStatus(false);
  }
  // tslint:disable-next-line:typedef
  onClickEventForgot($event) {
    this._interationService.sendSubComponent($event);
    this._interationService.forgotStatus(true);
  }

}
