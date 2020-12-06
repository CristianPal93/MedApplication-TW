import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {RequestsService} from '../_services/requests.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  responseRegister: string;

  constructor(private register: AuthService) { }

  ngOnInit(): void {
  }

  SignUp() {
    this.register.register(this.form).subscribe(data =>{
      this.responseRegister = data.message;
        alert(this.responseRegister);
    })
  }
}
