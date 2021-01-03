import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/_services/requests.service';
export interface serviciiDisponibile{
  nume: string;
  pret: string;
}
@Component({
  selector: 'app-ajustare-preturi',
  templateUrl: './ajustare-preturi.component.html',
  styleUrls: ['./ajustare-preturi.component.css']
})
export class AjustarePreturiComponent implements OnInit {
  listaServicii: serviciiDisponibile[];
  message: string[];
  constructor(private _requestServices: RequestsService) { }

  ngOnInit(): void {
    this._requestServices.getServices().subscribe(data =>{
      this.listaServicii = data['services'];
      console.log(this.listaServicii);
    });
  }
  displayMsg(input){
    this.message = input;
  }
  submit(){
    let test = [];
    Array.from(document.getElementsByTagName("input")).map(inputData =>{

      test.push(inputData.id, inputData.value);
    });
    this._requestServices.AjustareServicii(test).subscribe(data =>{
      this.message = data['message'].toString();
      setTimeout(() => this.displayMsg(''), 5000);

    })
  };

}
