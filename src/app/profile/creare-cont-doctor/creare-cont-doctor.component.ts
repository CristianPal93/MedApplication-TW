import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../_services/requests.service';

@Component({
  selector: 'app-creare-cont-doctor',
  templateUrl: './creare-cont-doctor.component.html',
  styleUrls: ['./creare-cont-doctor.component.css']
})
export class CreareContDoctorComponent implements OnInit {
  form: any = {};
  private response: string;

  // tslint:disable-next-line:variable-name
  constructor(private _requestService: RequestsService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  SignUp()  {
    // tslint:disable-next-line:max-line-length
    this._requestService.register_doctor(this.form.firstname, this.form.lastname, this.form.email, this.form.cnp, this.form.spec, this.form.cellphone, this.form.password).subscribe(data => {
      this.response = data;
      console.log(this.response);
    });
  }
}
