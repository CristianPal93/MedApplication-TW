import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  thanksmsg: any;

  constructor() { }

  ngOnInit(): void {
    this.thanksmsg = '';
  }
  // tslint:disable-next-line:typedef
  displayMsg(input){
    this.thanksmsg = input;
  }
  // tslint:disable-next-line:typedef
  smallDonation() {

    this.thanksmsg = 'Thank you for the 1 leu donation!';
    setTimeout(() => this.displayMsg(''), 5000);

  }

  // tslint:disable-next-line:typedef
  mediumDonation() {
    this.thanksmsg = 'Thank you for the 5 lei donation!';
    setTimeout(() => this.displayMsg(''), 5000);
  }

  // tslint:disable-next-line:typedef
  largeDonation() {
    this.thanksmsg = 'Thank you for the 10 lei donation!';
    setTimeout(() => this.displayMsg(''), 5000);
  }
}
