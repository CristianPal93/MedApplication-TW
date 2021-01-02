import { Component, OnInit } from '@angular/core';
import { BottomBodyComponent } from 'src/app/bottom-body/bottom-body.component';
import { RequestsService } from 'src/app/_services/requests.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {
  details;
  showResponse: Boolean = false;
  response: string;
  user: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  cnp: string;
  msg: string;
  constructor(private _requestServices: RequestsService, private _tokenService:TokenStorageService ) { }

  ngOnInit(): void {
    this.msg=''
    this.user = this._tokenService.getUser();
    this._requestServices.getPersonalDetails(this.user).subscribe(data =>{
      this.firstName = data.first_name;
      this.lastName = data.last_name;
      this.email = data.email;
      this.phone = data.phone;
      this.address = data.address;
      this.cnp = data.cnp;
    })
  }

  displayMsg(input){
    this.msg = input;
  }


  changeDetails(): void {
    this._requestServices.changePersonalDetails(this.firstName, this.lastName, this.email, this.address, this.phone, this.cnp).subscribe(data =>{
      this.showResponse = true;
      this.response = data['message'];
      if(this.response === 'valorile sun deja salvate!'){
        this.msg='Valorile sunt cele actuale!'
        setTimeout(() => this.displayMsg(''), 5000);
      }else {
        this.msg='Modificarile au fost salvate!'
        setTimeout(() => this.displayMsg(''), 5000);
      }

      console.log(this.response);
    })
  }
}
