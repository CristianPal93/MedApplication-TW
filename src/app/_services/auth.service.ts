import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:5000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        username : credentials.username,
        password : credentials.password
      })
    };
    return this.http.post(AUTH_API + 'login', null, httpOptions);
  }

  register(user): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        fullname: user.fullname,
        cnp: user.CNP,
        email: user.email,
        password: user.password,
        passwordConfirmation: user.passwordconfirm
      })
    };
    return this.http.post(AUTH_API + 'register-client', null, httpOptions);
  }

  reset(email) :Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        email: email.email,
      })
    };
    return this.http.post(AUTH_API + 'forgot-password', null, httpOptions);
  }
}
