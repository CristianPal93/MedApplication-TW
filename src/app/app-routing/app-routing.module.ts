import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUSComponent } from '../about-us/about-us.component';
import { MergeLoginComponent } from '../merge-login/merge-login.component';
import { MergeForgotPaswordComponent } from '../merge-forgot-pasword/merge-forgot-pasword.component';
import { MergeRegisterComponent} from '../merge-register/merge-register.component';
import { HomeMergeComponent } from '../home-merge/home-merge.component';
import { OurTeamRightComponent } from '../our-team-right/our-team-right.component';
import {News1Component} from '../news1/news1.component';
import {News2Component} from '../news2/news2.component';
import {News3Component} from '../news3/news3.component';
import {News4Component} from '../news4/news4.component';
import { MissionMergeComponent } from '../mission-merge/mission-merge.component';
import { HowWeWorkLeftComponent } from '../how-we-work-left/how-we-work-left.component';
import { HowWeWorkMergeComponent } from '../how-we-work-merge/how-we-work-merge.component';
import { ContactUsRightComponent } from '../contact-us-right/contact-us-right.component';
import { ContactMergeComponent } from '../contact-merge/contact-merge.component';
import { ResourceMergeComponent } from '../resource-merge/resource-merge.component';

const routes: Routes = [
  {path: '', component: HomeMergeComponent},
  {path: 'login', component: MergeLoginComponent},
  {path: 'register', component: MergeRegisterComponent},
  {path: 'forgotPassword', component: MergeForgotPaswordComponent},
  {path: 'about', component : AboutUSComponent},
  {path: 'ourTeam', component: OurTeamRightComponent},
  {path: 'news1', component: News1Component},
  {path: 'news2', component: News2Component},
  {path: 'news3', component: News3Component},
  {path: 'news4', component: News4Component},
  {path: 'mission', component: MissionMergeComponent},
  {path: 'howwework', component: HowWeWorkMergeComponent},
  {path: 'contactUs', component: ContactMergeComponent},
  {path: 'resource', component: ResourceMergeComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
