import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {RequestsService} from '../../_services/requests.service';
import {TokenStorageService} from '../../_services/token-storage.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-rezultate-pacient',
  templateUrl: './rezultate-pacient.component.html',
  styleUrls: ['./rezultate-pacient.component.css']
})
export class RezultatePacientComponent implements OnInit {
  results: string[] = [];
  vizibil: boolean=false;
  vizibil_bilete: boolean=false;
  results2: string[]=[];
  response: string;
  user: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  cnp: string;
  constructor(private _requestServices: RequestsService, private _tokenService:TokenStorageService) { }

  ngOnInit(): void {

    this.user = this._tokenService.getUser();
    this._requestServices.getPersonalDetails(this.user).subscribe(data =>{
      this.firstName = data.first_name;
      this.lastName = data.last_name;
      this.email = data.email;
      this.phone = data.phone;
      this.address = data.address;
      this.cnp = data.cnp;
      console.log(this.cnp);

      this._requestServices.get_results2(this.cnp).subscribe(data => {
        this.results = data['consults']
        if (this.results[0].length > 0) {
          this.vizibil = true;
          console.log(this.results);
        }


      });

      this._requestServices.get_all_trimiteri2(this.cnp).subscribe(data => {
        this.results2 = data['consults']
        if (this.results2[0].length > 0) {
          this.vizibil_bilete = true;
          console.log(this.results2);
        }
      });
    });


  }
  generatePdf(){
    console.log(this.results)


  }

  generare_consult(item: string) {
    const documentDefinition = {
      content:[
        {text:'Fisa consult',style: 'header'},
        {text: '\n'},
        {text:'Numele :'+item[2]+"\n "+"Prenumele :"+item[1]+" \n"+"cnp:"+item[0]+"\n"+"domiciliu pe:"+item[3]+"\n",style:'default'},
        {text: '\n'},
        {text:"In urma programarii din data "+item[11]+" ora "+item[10]+
            " condusa de Dr."+item[6]+" "+item[7]+" s-a constatat ca dvs suferiti de:"+item[5]+" "+"prescriptiile medicale sunt:"+item[4]+".Costul total consultatiei este de "+item[8]+"Ron.Va multumim ca ati ales clinica MedSoft si va mai asteptam!"
          ,style:'default'},
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          alignment:'center'
        },
        default:{
          fontSize: 12
        }
      }

    };
    pdfMake.createPdf(documentDefinition).open();
  }


  generare_trimitere(item:string){
    console.log(item);

    const documentDefinition = {
      content: [
        {text: 'Bilet de trimitere', style: 'header'},
        {text: '\n'},
        {text:'Pacientul :'+item[1]+"  "+item[2]+" avand cnp "+item[0]+" se elibereaza aceasta trimitere medicala pentru a servi la "+item[3]+" trimiterea a fost emisa la data de "+item[6]+" ora "+item[5]+".Costul total consultatiei este de "+item[4]+"Ron.Va multumim ca ati ales clinica MedSoft si va mai asteptam!",style:'default'},

      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          alignment:'center'
        },
        default:{
          fontSize: 12
        }
      }

    };
    pdfMake.createPdf(documentDefinition).open();
  }
}
