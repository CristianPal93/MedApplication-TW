import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { RequestsService } from '../_services/requests.service';

@Component({
  selector: 'app-contact-us-right',
  templateUrl: './contact-us-right.component.html',
  styleUrls: ['./contact-us-right.component.css']
})
export class ContactUsRightComponent implements OnInit {
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: RequestsService) { }

  ngOnInit() {
    // this.FormData = this.builder.group({
    //   Fullname: new FormControl('', [Validators.required]),
    //   Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
    //   Comment: new FormControl('', [Validators.required])
    // });
  }


  // onSubmit(FormData) {
  //   console.log(FormData)
  //   this.contact.PostMessage(FormData)
  //     .subscribe(response => {
  //       location.href = 'https://mailthis.to/confirm'
  //       console.log(response)
  //     }, error => {
  //       console.warn(error.responseText)
  //       console.log({ error })
  //     })
  // }
}
