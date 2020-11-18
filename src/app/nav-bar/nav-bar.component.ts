import { Component, OnInit } from '@angular/core';
import {InterantionService} from '../_services/interantion.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  component: string;
  // tslint:disable-next-line:variable-name
  constructor(private _interactionService: InterantionService) { }

  ngOnInit(): void {
    this.component = 'home';
  }
  // tslint:disable-next-line:typedef
  public sendComponentName($event){
    this._interactionService.navBarComponent($event);
    this._interactionService.sendSubComponent('false');

  }
  // tslint:disable-next-line:typedef
  sendLogin(){
    this._interactionService.loginStatus(true);
    this.component = 'login';
  }
}
