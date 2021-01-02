import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/_services/requests.service';
import {FormControl, Validators} from '@angular/forms';
interface TipCerere {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-daily-schedules',
  templateUrl: './daily-schedules.component.html',
  styleUrls: ['./daily-schedules.component.css']
})
export class DailySchedulesComponent implements OnInit {
  validare_cereri = new FormControl('', [Validators.required]);
  validare_medic = new FormControl('', [Validators.required]);


  programari:string[];
  cerereri: TipCerere[] = [
    {value: 'consult', viewValue: 'Consult'},
    {value: 'trimitere', viewValue: 'Trimitere'}
  ];
  ProgramariPacient: string[];
  loading: boolean = false;
  i: number;
  j: number;
  cnp: string;
  nume: string;
  doctor: string;
  specializarea: string;
  ora: string;
  data: string;
  detalii: string;
  cnpPacient: string;
  numePacient: string;
  specializareaPacient: string;
  oraPacient: string;
  dataPacient: string;
  detaliiPacient: string;
  doctornume: string;
  doctorProgramare: string[] = [];
  cerere_v: string;
  ora_p: string;
  data_p: string;

  constructor(private _requestServices: RequestsService) { }

  ngOnInit(): void {
    this.loading = true;
    this.data_p = '';
    this.ora_p = '';
    this.cerere_v= '';
    this._requestServices.getProgramari().subscribe(data =>{
      this.programari = data['scheduled'];
      this.loading = false;
      this.i = 0;
      if (this.programari.length > 0){
        this.switchPacient();
      }
    });
    // this._requestServices.getMedicDetails().subscribe(data => {
    //   this.doctorProgramare = data.all_doctor_names;
    // });
    this._requestServices.getPersonalSchedule().subscribe(data =>{
      this.ProgramariPacient = data['scheduled'];
      console.log(this.ProgramariPacient)
      this.j = 0;
      if (this.ProgramariPacient.length > 0){
        this.switchPacientDeProgramat();
      }
    });
    // this._requestServices.getMedicDetails().subscribe(data => {
    //   this.doctorProgramare = data.all_doctor_names;
    // });
  }

  switchPacient() {
    this.cnp = this.programari[this.i][0];
    this.nume = this.programari[this.i][1];
    this.doctor = this.programari[this.i][2];
    this.specializarea = this.programari[this.i][3];
    this.data = this.programari[this.i][5];
    this.ora = this.programari[this.i][4];
    this.detalii = this.programari[this.i][6];
  };

  switchPacientDeProgramat() {
    console.log(this.j);
    this.cnpPacient = this.ProgramariPacient[this.j][0];
    this.numePacient = this.ProgramariPacient[this.j][1];
    this.specializareaPacient = this.ProgramariPacient[this.j][2];
    this.dataPacient = this.ProgramariPacient[this.j][4];
    this.oraPacient = this.ProgramariPacient[this.j][3];
    this.detaliiPacient = this.ProgramariPacient[this.j][5];
    if(this.ProgramariPacient.length > 0 ) {
      this._requestServices.getMedicName(this.specializareaPacient).subscribe(data => {
        this.doctorProgramare = data.all_doctor_names;
      });
    }else {
      this.doctorProgramare = [];
    }
  };

  nextPacient(){
    if (this.programari.length >0){
      this.i++
      if (this.i <= this.programari.length -1){
        this.switchPacient();
      }
      else{
        this.i = 0;
        this.switchPacient();
      }
    }
  }
  nextPacientPtProgramare(){
    if (this.ProgramariPacient.length >0){
      this.j++;
      if (this.j <= this.ProgramariPacient.length -1){
        this.switchPacientDeProgramat();
      }
      else{
        this.j = 0;
        this.switchPacientDeProgramat();
      }
    }
  }

  previewsPacient(){
    if (this.programari.length >0){
      this.i--
      if (this.i >= 0){
        this.switchPacient();
      }
      else{
        this.i = this.programari.length -1;
        this.switchPacient();
      }
    }
  }

  saveProgramare(){
    this.loading = true;
    if (this.ProgramariPacient.length > 0){
      let detailsPacient = this.ProgramariPacient[this.j];
      let firstName = detailsPacient[1].split(" ")[1];
      let lastName = detailsPacient[1].split(" ")[0];
       this._requestServices.creazaProgramareSecretarele(firstName,lastName, detailsPacient[2], detailsPacient[4], detailsPacient[3], detailsPacient[0], this.doctornume, detailsPacient[5],this.cerere_v).subscribe(data =>{

        this._requestServices.getProgramari().subscribe(data =>{
          this.programari = data['scheduled'];
          this.loading = false;
          this.i = this.programari.length -1;
          this.switchPacient();
        });
        this._requestServices.getPersonalSchedule().subscribe(data =>{
          this.ProgramariPacient = data['scheduled'];
          console.log(this.ProgramariPacient)
          this.j = 0;
          if (this.ProgramariPacient.length > 0){
            this.switchPacientDeProgramat();
          }else{
            window.location.reload();
            this.numePacient = '';
            this.cnpPacient = '';
            this.dataPacient = '';
            this.oraPacient = '';
            this.specializareaPacient = '';
            this.detaliiPacient = '';
            this.doctornume = '';
            this.doctorProgramare = [];
          }
        });
        this.nextPacientPtProgramare();
        this.loading = false;
      });
    }
    else{

      this._requestServices.getPersonalSchedule().subscribe(data =>{
        this.ProgramariPacient = data['scheduled'];
        this.j = 0;
        if (this.ProgramariPacient.length > 0){
          this.switchPacientDeProgramat();
        }
      });
    };
    this.numePacient = '';
    this.cnpPacient = '';
    this.dataPacient = '';
    this.oraPacient = '';
    this.specializareaPacient = '';
    this.detaliiPacient = '';
    this.doctornume = '';
    this.doctorProgramare = [];

  }

  modifica() {
    console.log(this.nume, this.cnp, this.doctor, this.specializarea, this.ora, this.data, this.detalii);
    this._requestServices.modifyProgramare(this.cnp,this.specializarea,this.ora,this.data).subscribe(data =>{

      this._requestServices.getProgramari().subscribe(data =>{
        this.programari = data['scheduled'];
        this.loading = false;
        this.i = this.programari.length -1;
        if(this.programari.length >0) {
          this.nextPacient();
          this.switchPacient();

        }else {
          this.cnp = '';
          this.nume = '';
          this.doctor = '';
          this.specializarea = '';
          this.data = '';
          this.ora = '';
          this.detalii = '';

        }
      });
    });
    // window.location.reload();
  }
  sterge() {
    console.log(this.nume, this.cnp, this.doctor, this.specializarea, this.ora, this.data, this.detalii);
    this._requestServices.stergerProgramarea(this.cnp,this.specializarea,this.ora,this.data).subscribe(data =>{

      this._requestServices.getProgramari().subscribe(data =>{
        this.programari = data['scheduled'];
        this.loading = false;
        this.i = this.programari.length -1;
        if(this.programari.length >0) {
          this.nextPacient();
          this.switchPacient();

        }else {
          this.cnp = '';
          this.nume = '';
          this.doctor = '';
          this.specializarea = '';
          this.data = '';
          this.ora = '';
          this.detalii = '';

        }
      });
    });
  }
}
