import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../_services/requests.service';
export interface serviciiDisponibile{
  nume: string;
  pret: string;
}
@Component({
  selector: 'app-how-we-work-merge',
  templateUrl: './how-we-work-merge.component.html',
  styleUrls: ['./how-we-work-merge.component.css']
})
export class HowWeWorkMergeComponent implements OnInit {
  listaServicii: serviciiDisponibile[];
  vizibil: boolean=false;

  constructor(private _requestServices: RequestsService) { }

  ngOnInit(): void {
    this._requestServices.getServices().subscribe(data =>{
      this.listaServicii = data['services'];
      console.log(this.listaServicii);
      if(this.listaServicii.length>0){
        this.vizibil=true;
      }
    });
  }

}
