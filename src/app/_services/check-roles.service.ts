import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { InterantionService } from './interantion.service';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class CheckRolesService implements CanActivate {
  userRights: string;
  constructor(private _requestServices: RequestsService, private _interactionServices: InterantionService) { }
  canActivate(): boolean {
    let email = this._interactionServices.getUserRightsStats$
    if (this.userRights === 'doctor') {
      return true;
    }
    return false;
}
}

export class CheckRolesServicesSecretara implements CanActivate {
  right = ['secretara'];
  userRights: string;
  constructor(private _requestServices: RequestsService) { }
  canActivate(email): boolean | UrlTree {
    this._requestServices.getRights(email).subscribe(data => this.userRights = data);
    if (this.right.indexOf(this.userRights) !== -1) {
      return true;
    }
    else{
      return false;
    }
  }
}
export class CheckRolesServicesAdministrator implements CanActivate {
  right = ['administrator'];
  userRights: string;
  constructor(private _requestServices: RequestsService) { }
  canActivate(email): boolean | UrlTree {
    this._requestServices.getRights(email).subscribe(data => this.userRights = data);
    if (this.right.indexOf(this.userRights) !== -1) {
      return true;
    }
    else{
      return false;
    }
  }
}
