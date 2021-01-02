import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RequestsService } from '../_services/requests.service';
import { TokenStorageService } from '../_services/token-storage.service';

export interface serviciiDisponibile {
  nume: string;
  pret: string;
}
export interface serviciuDisponibil {
  nume: string;
  pret: string;
}
@Component({
  selector: 'app-trimiteri',
  templateUrl: './trimiteri.component.html',
  styleUrls: ['./trimiteri.component.css']
})
export class TrimiteriComponent implements OnInit {
  form: FormGroup;
  pacientiProgramati: string[] = [];
  i: number;
  cnp: string;
  nume: string;
  ora: string;
  data: string;
  detalii: string;
  cnpDoctor: string;
  servicii: serviciiDisponibile[];
  serviciiAccesate :any;
  serviciu: serviciuDisponibil[];
  p:number
  constructor(private _requestServices: RequestsService, private _tokenServices: TokenStorageService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.serviciu=[];
    let email  = this._tokenServices.getUser();
    this._requestServices.getPersonalDetails(email).subscribe(data =>{
      this.cnpDoctor = data['cnp'];
      this._requestServices.getSchedulePerDoctor(this.cnpDoctor).subscribe(data =>{
        this.pacientiProgramati = data['pacients'];

        this.i = 0;
        if (this.pacientiProgramati.length > 0){
          this.switchPacient();
        }
      });
      this._requestServices.getServices().subscribe(data => {
        this.servicii = data['services']
        this.p=0;
        for(this.p;this.p<this.servicii.length;this.p++) {
          if (this.servicii[this.p][0] != 'Consultatie' || this.servicii[this.p][0] != 'Consultatii') {
            this.serviciu.push(this.servicii[this.p]);
          }
        }
      })
    });
    this.form = this.fb.group({
      name: this.fb.array([])
    });
  }

  switchPacient() {
    this.cnp = this.pacientiProgramati[this.i][4];
    this.nume = this.pacientiProgramati[this.i][0];
    this.data = this.pacientiProgramati[this.i][2];
    this.ora = this.pacientiProgramati[this.i][1];
    this.detalii = this.pacientiProgramati[this.i][3];
  };

  nextPacient(){
    if (this.pacientiProgramati.length >0){
      this.i++
      if (this.i <= this.pacientiProgramati.length -1){
        this.switchPacient();
        this._requestServices.getServices().subscribe(data => {
          this.servicii = data['services']
          console.log(data);
        })
      }
      else{
        this.i = 0;
        this.switchPacient();
      }
    }
  };

  previewsPacient(){
    if (this.pacientiProgramati.length >0){
    this.i--
    if (this.i >= 0){
      this.switchPacient();
    }
    else{
      this.i = this.pacientiProgramati.length -1;
      this.switchPacient();
      }
    }
  }

  onChange(name: string, isChecked: boolean){
    this.serviciiAccesate= (this.form.controls.name as FormArray);
    if (isChecked){
      this.serviciiAccesate.push(new FormControl(name));
    }
    else{
      const index = this.serviciiAccesate.controls.findIndex(x => x.value === name);
      this.serviciiAccesate.removeAt(index)
    }

  }

  submit(){
    console.log(this.form.value.name,this.ora,this.data);

    this._requestServices.TrimiteNota(this.cnp, this.form.value.name, this.ora,this.data).subscribe(data =>{
      this.nextPacient();
      this.servicii = [];
      this.serviciiAccesate.clear();
    });
  }
}

