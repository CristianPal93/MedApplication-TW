import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import {InterantionService} from '../_services/interantion.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  isLoggedIn = false;

  constructor(private auth: AuthenticationService, private tokenStorage: TokenStorageService, private route: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.auth.setLoggedIn(true);
    }
  }

  signOut(){
    this.tokenStorage.signOut();
    location.reload();
    this.auth.setLoggedIn(false);
    this.isLoggedIn = false;
  }
}
