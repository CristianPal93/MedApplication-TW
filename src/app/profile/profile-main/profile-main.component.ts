import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/_services/requests.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent implements OnInit {
  userRights: string;
  constructor(private _requestServices:RequestsService, private _tokenServices:TokenStorageService) { }

  ngOnInit(): void {

    this._requestServices.getRights(this._tokenServices.getUser()).subscribe(
      data=>{
        this.userRights = data.rights;
      }
    )
  }
  checkRightDoctor(): boolean{
    if (this.userRights === 'doctor'){
      return true;
    }
    return false;
  }

  checkRightSecretara(): boolean{
    if (this.userRights === 'secretara'){
      return true;
    }
    return false;
  }

  checkRightAdmin(): boolean{
    if (this.userRights === 'administrator'){
      return true;
    }
    return false;
  }
  checkRightPacient(): boolean{
    if (this.userRights === 'pacient'){
      return true;
    }
    return false;
  }
}
