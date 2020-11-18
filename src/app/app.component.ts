import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import {InterantionService} from './_services/interantion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MedSoft';
  component: string;
  subComponent: string;
  show = true;
  register = false;
  forgot = false;
  // tslint:disable-next-line:variable-name
  @ViewChild(LoginComponent) log: LoginComponent;

  // tslint:disable-next-line:variable-name
  constructor(private _interactionService: InterantionService) {
  }
  ngOnInit(): void {
    this._interactionService.navBarComponentStatus$.subscribe(x => {
      this.component = x;
      console.log(x);
    });
    this._interactionService.subComponent$.subscribe(y => {
      this.subComponent = y;
    });
    this._interactionService.registerComponentStatus$.subscribe(z => {
      this.register = z;

    });
    this._interactionService.loginComponentStatus$.subscribe(a => {
      this.show = a;
    });
    this._interactionService.forgotComponentStatus$.subscribe(c => {
      this.forgot = c;
      this.show = false;
    });
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterContentChecked(): void {
    console.log(this.subComponent);

    if (this.component === 'home'){
      this.register = false;
      this.forgot = false;
    }
    if (this.component === 'login'){
      this.register = false;
      this.forgot = false;
      this.show = true;
    }
    if (this.subComponent === 'forgotPassword'){
      this.forgot = true;
      this.show = false;
    }
    else if (this.subComponent === 'register'){
      this.register = true;
      this.show = false;
    }
  }
  // tslint:disable-next-line:typedef
  reload(){
    this._interactionService.component$.subscribe(x => {
      this.component = x;
    });
  }
}
