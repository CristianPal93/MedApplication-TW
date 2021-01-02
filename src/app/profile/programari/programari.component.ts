import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/_services/requests.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {element} from 'protractor';

@Component({
  selector: 'app-programari',
  templateUrl: './programari.component.html',
  styleUrls: ['./programari.component.css']
})
export class ProgramariComponent implements OnInit {
  ore = ['08:00','08:30',
  '09:00','09:30','10:00','10:30','11:00','11:30',
  '12:00','12:30','13:00','13:30','14:00','14:30',
  '15:00','15:30','16:00','16:30','17:00'];
  specializari: string[];
  response: string;
  firstName: string;
  lastName: string;
  specializarea: string;
  dataProgramarii: string;
  ora: string;
  cnp: string;
  details: string;
  secretara: boolean = false;
  doctornume: string;
  doctorProgramare: string[] = [];
  showResponse: boolean = false;
  msg: string;
  msg2: string;

  showResponse2: boolean=false;

  constructor(private _requestService: RequestsService, private _tokenServices: TokenStorageService) {}

  ngOnInit(): void {
    this.response=''
    this._requestService.getSpecialization().subscribe(data =>{
      this.specializari = data.spectializations;
    })
    this._requestService.getRights(this._tokenServices.getUser()).subscribe(
      data=>{
        if (data.rights === 'secretara'){
          this.secretara = true;
        }
      }
    )
    this._requestService.getMedicDetails().subscribe(data => {
        this.doctorProgramare = data.all_doctor_names;
      });
    }

  displayMsg(input){
    this.msg = input;
    this.showResponse=false;
    this.showResponse2=false;
  }
  creazaProgramare(): void{
    console.log(this.dataProgramarii);
    let newData = this.dataProgramarii.toString().split("00:00:00");
    console.log(this.specializarea);
    this._requestService.creazaProgramare(
      this.firstName,
      this.lastName,
      this.specializarea,
      newData[0],
      this.ora,
      this.details).subscribe(data => {
        this.response = data['message'];

      if(this.response==='Programarea a fost cu succes!') {
        this.showResponse = true;
        this.msg = this.response
        setTimeout(() => this.displayMsg(''), 5000);
      }
      if(this.response==='Timpul sau data a fost deja rezervata, Va rugam sa alegiti o alta perioada/data!'){
        this.showResponse2 = true
        this.msg2= this.response
        setTimeout(() => this.displayMsg(''), 5000);

      }

      console.log(this.response);
      });

  }

  creazaProgramareSecretara(): void{
    console.log(this.dataProgramarii);
    let newData = this.dataProgramarii.toString().split("00:00:00");
    console.log(newData)
    this._requestService.creazaProgramareSecretarele(
      this.firstName,
      this.lastName,
      this.specializarea,
      newData[0],
      this.ora,
      this.cnp,
      this.doctornume,
      this.details,""
    ).subscribe(data =>{
        this.response = data;
        console.log(this.response);
      })
  }

}
