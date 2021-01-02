import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { InterantionService } from '../_services/interantion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private auth: AuthenticationService, private _route: Router, private _interactionServices: InterantionService ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.auth.setLoggedIn(true);
      this.roles = this.tokenStorage.getUser().toUpperCase();
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.tokenStorage.saveRole(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.auth.setLoggedIn(true);
        this._interactionServices.passUserRights(this.tokenStorage.getRole());
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
