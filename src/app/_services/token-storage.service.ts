import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

const TOKEN_KEY = 'access_token';
const USER_KEY = 'token_type';
const USER_ROLE = 'USER_ROLE';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router: Router) { }

  signOut(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public checkForToken(): boolean{
    return window.sessionStorage.getItem(TOKEN_KEY) !== null;
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user[`USER_KEY`]));
  }

  public getUser(): string {
    return JSON.parse(window.sessionStorage.getItem(USER_KEY));
  }

  public getRole(): string {
    return JSON.parse(window.sessionStorage.getItem(USER_ROLE));
  }

  public saveRole(user): void {
    window.sessionStorage.setItem(USER_ROLE, JSON.stringify(user[`USER_ROLE`]));
  }
}
