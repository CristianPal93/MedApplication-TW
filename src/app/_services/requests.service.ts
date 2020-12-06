import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:5000/';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'home', { responseType: 'text' });
  }

  getStaff(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        staff : 'doctor'
      })
    };
    return this.http.post(API_URL + 'get-all-staff', {responseType: 'text'}, httpOptions )
  }
  PostMessage(user): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        subject: user.subject
      })
    };
    return this.http.post(API_URL + 'contact', null, httpOptions);
  }

}
