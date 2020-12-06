import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../_services/requests.service';

@Component({
  selector: 'app-contact-us-left',
  templateUrl: './contact-us-left.component.html',
  styleUrls: ['./contact-us-left.component.css']
})
export class ContactUsLeftComponent implements OnInit {
  form: any = {};
  response: string;
  constructor(private contactMessage: RequestsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.contactMessage.PostMessage(this.form).subscribe(data =>{
      this.response = data.message;
      alert(data.message)
    })
  }
}
