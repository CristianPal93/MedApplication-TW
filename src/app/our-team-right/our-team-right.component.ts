import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../_services/requests.service';

@Component({
  selector: 'app-our-team-right',
  templateUrl: './our-team-right.component.html',
  styleUrls: ['./our-team-right.component.css']
})
export class OurTeamRightComponent implements OnInit {

  constructor(private requestService: RequestsService) { }
  doctors: [];
  ngOnInit(): void {
    this.requestService.getStaff().subscribe(data=>{
      this.doctors = data.doctor;
      console.log(this.doctors)
    })
  }

}
