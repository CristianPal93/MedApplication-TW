import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  responseRegister: string;

  // tslint:disable-next-line:variable-name
  constructor(private register: AuthService, private _router: Router) { }


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  SignUp() {
    this.register.register(this.form).subscribe(data => {
      this.responseRegister = data.message;
      alert(this.responseRegister);
      this._router.navigate(['']);
    });
  }
}
