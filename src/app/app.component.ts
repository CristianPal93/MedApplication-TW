import {Component, OnInit, ViewChild} from '@angular/core';
import { LoginComponent } from './login/login.component';
import {InterantionService} from './_services/interantion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedSoft';

  constructor() {
  }
  ngOnInit(): void {
  }
}
