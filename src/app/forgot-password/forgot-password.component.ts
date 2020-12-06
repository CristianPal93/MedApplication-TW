import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { RequestsService } from '../_services/requests.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form: any = {};
  response: string;
  constructor(private resetPassword: AuthService) { }

  ngOnInit(): void {
  }

  ngSubmit(){
    this.resetPassword.reset(this.form).subscribe(
      data=>{
        this.response = data.message;
        alert(this.response)
      }
      )
  }
}
