import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from 'src/app/profile/profile-main/profile-main.component';
import { PersonalProfileComponent } from 'src/app/profile/personal-profile/personal-profile.component';
import { ProgramariComponent } from 'src/app/profile/programari/programari.component';
import { AuthGuardService } from 'src/app/_services/auth-guard.service';
import { DailySchedulesComponent } from 'src/app/profile/medic/daily-schedules/daily-schedules.component';
import { TrimiteriComponent } from 'src/app/trimiteri/trimiteri.component';
import { AjustarePreturiComponent } from 'src/app/profile/ajustare-preturi/ajustare-preturi.component';
import { CreareConturiComponent } from 'src/app/profile/creare-conturi/creare-conturi.component';
import {CreareContDoctorComponent} from 'src/app/profile/creare-cont-doctor/creare-cont-doctor.component';
import {ConsultDoctorComponent} from '../../profile/consult-doctor/consult-doctor.component';
import {ConsultSecretaraComponent} from '../../profile/consult-secretara/consult-secretara.component';
import {RezultatePacientComponent} from '../../profile/rezultate-pacient/rezultate-pacient.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileMainComponent,
    children: [
      {
      path: 'personal-details',
      canActivate: [AuthGuardService],
      component: PersonalProfileComponent
      },
      {
        path: 'programari',
        canActivate: [AuthGuardService],
        component: ProgramariComponent
      },
      {
        path: 'daily-schedules',
        canActivate: [AuthGuardService],
        component: DailySchedulesComponent
      },
      {
        path: 'trimiteri',
        canActivate: [AuthGuardService],
        component: TrimiteriComponent
      },
      {
        path: 'ajustare-preturi',
        canActivate: [AuthGuardService],
        component: AjustarePreturiComponent
      },
      {
        path: 'creare-conturi',
        canActivate: [AuthGuardService],
        component: CreareConturiComponent
      },
      {
        path: 'creare-conturi-doctor',
        canActivate: [AuthGuardService],
        component: CreareContDoctorComponent
      },
      {
        path: 'consult-doctor',
        canActivate: [AuthGuardService],
        component: ConsultDoctorComponent
      },
      {
        path: 'consult-secretara',
        canActivate: [AuthGuardService],
        component: ConsultSecretaraComponent
      },
      {
        path: 'rezultate-pacient',
        canActivate: [AuthGuardService],
        component: RezultatePacientComponent
      },
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
