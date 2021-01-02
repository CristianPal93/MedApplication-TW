import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {RequestsService} from '../../_services/requests.service';
import {style} from '@angular/animations';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-consult-secretara',
  templateUrl: './consult-secretara.component.html',
  styleUrls: ['./consult-secretara.component.css']
})
export class ConsultSecretaraComponent implements OnInit {
  results: string[] = [];
  vizibil: boolean=false;
  vizibil_bilete: boolean=false;
  results2: string[]=[];
  constructor(private _requestServices: RequestsService) { }

  ngOnInit(): void {
    this._requestServices.get_results().subscribe(data => {
      this.results = data['consults']
      if (this.results[0].length > 0) {
        this.vizibil = true;
        console.log(this.results);
      }


    });

    this._requestServices.get_all_trimiteri().subscribe(data => {
      this.results2 = data['consults']
      if (this.results2[0].length > 0) {
        this.vizibil_bilete = true;
        console.log(this.results2);
      }
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
