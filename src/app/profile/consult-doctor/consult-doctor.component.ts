import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {serviciiDisponibile} from '../../trimiteri/trimiteri.component';
import {TokenStorageService} from '../../_services/token-storage.service';
import {RequestsService} from '../../_services/requests.service';

export interface serviciuDisponibil {
  nume: string;
  pret: string;
}
@Component({
  selector: 'app-consult-doctor',
  templateUrl: './consult-doctor.component.html',
  styleUrls: ['./consult-doctor.component.css']
})


export class ConsultDoctorComponent implements OnInit {

  form: FormGroup;
  pacientiProgramati: string[] = [];
  i: number;
  cnp: string;
  nume: string;
  ora: string;
  data: string;
  detalii: string;
  cnpDoctor: string;
  adresa: string;
  simptome: string;
  diagnostic: string;
  docSpec: string;
  // tslint:disable-next-line:variable-name
  doctor_first_name: string;
  // tslint:disable-next-line:variable-name
  doctor_last_name: string;
  response: string;
  pret: string;
  servicii : string;
  serviciu : serviciuDisponibil[];
  j : number;
  constructor(private _requestServices: RequestsService ,private _tokenServices: TokenStorageService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this._requestServices.getServices().subscribe(data => {
      this.j=0;
      this.serviciu = data['services']
      console.log(this.serviciu);
      for(this.j;this.j<this.serviciu.length;this.j++){
        if(this.serviciu[this.j][0]==='Consultatie' || this.serviciu[this.j][0]==='Consultatii'){
          this.pret=this.serviciu[this.j][1];
        }else {
          this.pret='100';
        }
      }
    });

    this.adresa = '';
    this.simptome = '';
    this.diagnostic = '';
    const email  = this._tokenServices.getUser();
    this._requestServices.getPersonalDetails(email).subscribe(data => {
    this.cnpDoctor = data.cnp;
      this._requestServices.getDocSpec(this.cnpDoctor).subscribe(data => {
        this.docSpec = data.spec;
      });
    this.doctor_first_name = data.first_name;
    this.doctor_last_name = data.last_name;
    this._requestServices.getSchedulePerDoctor2(this.cnpDoctor).subscribe(data => {
    this.pacientiProgramati = data['pacients'];
    this.i = 0;
    if (this.pacientiProgramati.length > 0){
      this.switchPacient();
      }
    });
  });
}

switchPacient() {
    console.log(this.pacientiProgramati);
  this.cnp = this.pacientiProgramati[this.i][4];
  this.nume = this.pacientiProgramati[this.i][0];
  this.data = this.pacientiProgramati[this.i][2];
  this.ora = this.pacientiProgramati[this.i][1];
  this.detalii = this.pacientiProgramati[this.i][3];
  this.servicii=this.pacientiProgramati[this.i][5]
  if(this.pacientiProgramati.length === 0){
    this.cnp = '';
    this.nume = '';
    this.data = '';
    this.ora = '';
    this.detalii = '';
    this.adresa = '';
    this.simptome = '';
    this.diagnostic = '';
  }else {
    this.adresa = '';
    this.simptome = '';
    this.diagnostic = '';

  }
}

nextPacient(){
  if (this.pacientiProgramati.length > 0){
    this.i++;
    if (this.i <= this.pacientiProgramati.length - 1){
      this.switchPacient();
      // this._requestServices.getServices().subscribe(data => {
      //   this.servicii = data.services;
      //   console.log(data);
      // });
    }
    else{
      this.i = 0;
      this.switchPacient();
    }
  }
}

previewsPacient(){
  if (this.pacientiProgramati.length > 0){
    this.i--;
    if (this.i >= 0){
      this.switchPacient();
    }
    else{
      this.i = this.pacientiProgramati.length - 1;
      this.switchPacient();
    }
  }
}

finalizareConsult() {
    console.log(this.cnp, this.nume,this.adresa,this.simptome,this.diagnostic,this.doctor_first_name,this.doctor_last_name,this.pret);
    this._requestServices.addConsult(this.cnp, this.nume, this.adresa, this.simptome, this.diagnostic, this.doctor_first_name, this.doctor_last_name, this.pret,this.servicii,this.ora,this.data).subscribe(data => {
      this.response = data;
      console.log(this.response);
      this._requestServices.stergerProgramarea(this.cnp,this.docSpec,this.ora,this.data).subscribe(data =>{

        this._requestServices.getSchedulePerDoctor(this.cnpDoctor).subscribe(data => {
          this.pacientiProgramati = data['pacients'];
          this.i = 0;
          if (this.pacientiProgramati.length > 0){
            this.switchPacient();
          }else {
            this.cnp = '';
            this.nume = '';
            this.data = '';
            this.ora = '';
            this.detalii = '';
            this.adresa = '';
            this.simptome = '';
            this.diagnostic = '';
          }
        });
      });
    });

  }
}
