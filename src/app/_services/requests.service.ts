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
  getPersonalDetails(email): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
        email: email,
      })
    };
    return this.http.post(API_URL + 'load-personal-details',null, httpOptions);
  }
  getDocSpec(cnpd: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        cnp: cnpd,
      })
    };
    return this.http.post(API_URL + 'get-spec',{responseType: 'text'}, httpOptions);
  }
  addConsult(cnpp : string, numep: string, add: string, sim: string, diag: string, fd: string, ld: string, pret: string, servicii:string ,ora:string,data:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        cnp: cnpp,
        nume: numep,
        addp: add,
        sp: sim,
        dp: diag,
        fdoc: fd,
        ldoc: ld,
        p: pret,
        service:servicii,
        ora:ora,
        data:data,
      })
    };
    return this.http.post(API_URL + 'add-foaie-consult',{responseType: 'text'}, httpOptions);
  }
  getMedicDetails(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.http.post(API_URL + 'get-doctors-secretary',null, httpOptions);
  }
  getMedicName(d_spec: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        spec: d_spec
      })
    };
    return this.http.post(API_URL + 'get-doctor-spec',{responseType: 'text'}, httpOptions);
  }
  getRights(email): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
        email: email,
      })
    };
    return this.http.post(API_URL + 'check-rights',{responseType: 'text'}, httpOptions);
  }

  getSpecialization(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.http.post(API_URL + 'get-specializations', null, httpOptions);
  }

  changePersonalDetails(firstName, lastName, email, address, phone, cnp): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      first_name: firstName,
      last_name: lastName,
      email: email,
      address: address,
      phone: phone,
      cnp: cnp,
      })
    };
    return this.http.post(API_URL + 'change-personal-details',{responseType: 'text'}, httpOptions);
  }
  // tslint:disable-next-line:variable-name
  register_secretary(firstName: string ,
                     lastName: string ,
                     e_email: string,
                     e_cnp: string,
                     c_cellphone: string,
                     p_password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        first_name: firstName,
        last_name: lastName,
        email: e_email,
        cnp: e_cnp,
        cellphone : c_cellphone,
        password: p_password,

      })
    };
    return this.http.post(API_URL + 'register-secretary', null, httpOptions);
  }
  register_doctor(firstName: string ,
                  lastName: string ,
                  email: string,
                  cnp: string,
                  spec: string,
                  cellphone: string,
                  password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        first_name: firstName,
        last_name: lastName,
        email: email,
        cnp: cnp,
        spec: spec,
        cellphone : cellphone,
        password: password,

      })
    };
    return this.http.post(API_URL + 'create-doctor', null, httpOptions);
  }
  creazaProgramare(
    firstName: string ,
    lastName: string ,
    specializarea: string,
    date: string,
    ora: string,
    details: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      first_name: firstName,
      last_name: lastName,
      spec: specializarea,
      ziua: date,
      time: ora,
      details: details,
      })
    };
    return this.http.post(API_URL + 'personal-schedule',{responseType: 'text'}, httpOptions);
  }
  // tslint:disable-next-line:variable-name
  modifyProgramare(cnp_pacient: string, specializare: string, ora_p: string, data_p: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        cnp: cnp_pacient,
        spec: specializare,
        ora: ora_p,
        data: data_p
      })
    };
    return this.http.post(API_URL + 'modify-scheduled',{responseType: 'text'}, httpOptions);
  }
  // tslint:disable-next-line:variable-name
  stergerProgramarea(cnp_pacient: string, specializare: string, ora_p: string, data_p: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        cnp: cnp_pacient,
        spec: specializare,
        ora: ora_p,
        data: data_p
      })
      };
    return this.http.post(API_URL + 'remove-scheduled',{responseType: 'text'}, httpOptions);
  }


  // tslint:disable-next-line:variable-name
  creazaProgramareSecretarele(
    firstName:string ,
    lastName:string ,
    specializarea:string,
    date: string,
    ora:string,
    cnp: string,
    doctorName: string,
    details: string,
    cerere_v : string
  ): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
        first_name: firstName,
        last_name: lastName,
        pacient_cnp: cnp,
        doctor_spec: specializarea,
        doctor_fullname: doctorName,
        date_for_consult: date,
        time_for_consult: ora,
        details: details,
        cerere:cerere_v,
      })
    };
    return this.http.post(API_URL + 'write-schedule',{responseType: 'text'}, httpOptions);
  }

  getProgramari() {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.http.post(API_URL + 'get-schedule',{responseType: 'text'}, httpOptions);
  }
  getPersonalSchedule() {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.http.post(API_URL + 'get-personal-schedule',{responseType: 'text'}, httpOptions);
  }
  getSchedulePerDoctor(cnp) {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      cnp: cnp
      })
    };
    return this.http.post(API_URL + 'get-schedule-per-doctor',{responseType: 'text'}, httpOptions);
  }
  getSchedulePerDoctor2(cnp) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        cnp: cnp
      })
    };
    return this.http.post(API_URL + 'get-schedule-per-doctor-2',{responseType: 'text'}, httpOptions);
  }
  getServices() {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.http.post(API_URL + 'get-services',{responseType: 'text'}, httpOptions);
  }

  TrimiteNota(cnp: string, servicii: string[],timep:string,datep:string){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      cnp: cnp,
      servicii: servicii,
      time:timep,
      data:datep,
      })
    };
    return this.http.post(API_URL + 'tax-services',{responseType: 'text'}, httpOptions);
  }
  AjustareServicii(servicii: string[]){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      servicii: servicii,
      })
    };
    return this.http.post(API_URL + 'ajust-services',{responseType: 'text'}, httpOptions);
  }

  get_results() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(API_URL + 'get-all-consults',{responseType: 'text'}, httpOptions);
  }
  get_all_trimiteri(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(API_URL + 'get-all-trimiteri',{responseType: 'text'}, httpOptions);
  }
  get_results2(cnp:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         cnp:cnp,
      })
    };
    return this.http.post(API_URL + 'get-all-personal-consults',{responseType: 'text'}, httpOptions);
  }
  get_all_trimiteri2(cnp:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        cnp:cnp
      })
    };
    return this.http.post(API_URL + 'get-all-personal-trimiteri',{responseType: 'text'}, httpOptions);
  }
  get_person(cnp:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        cnp:cnp,
      })
    };
    return this.http.post(API_URL + 'get-person',{responseType: 'text'}, httpOptions);
  }
}
