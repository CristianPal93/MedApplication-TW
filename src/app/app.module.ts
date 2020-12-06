import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MaterialsModule} from './materials/materials.module';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DonationsComponent} from './donations/donations.component';
import {BottomBodyComponent} from './bottom-body/bottom-body.component';
import {FooterComponent} from './footer/footer.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RegisterComponent} from './register/register.component';
import { AboutusleftComponent } from './aboutusleft/aboutusleft.component';
import { AboutusrightComponent } from './aboutusright/aboutusright.component';
import { HowWeWorkRightComponent } from './how-we-work-right/how-we-work-right.component';
import { HowWeWorkLeftComponent } from './how-we-work-left/how-we-work-left.component';
import { MissionLeftComponent } from './mission-left/mission-left.component';
import { MissionRightComponent } from './mission-right/mission-right.component';
import { OurTeamRightComponent } from './our-team-right/our-team-right.component';
import { OurTeamLeftComponent } from './our-team-left/our-team-left.component';
import { ResourcesLeftComponent } from './resources-left/resources-left.component';
import { ResourcesRightComponent } from './resources-right/resources-right.component';
import { ContactUsLeftComponent } from './contact-us-left/contact-us-left.component';
import { ContactUsRightComponent } from './contact-us-right/contact-us-right.component';
import { HomeComponent } from './home/home.component';
import { authInterceptorProviders } from './_services/auth.interceptor';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutUSComponent } from './about-us/about-us.component';
import { MergeLoginComponent } from './merge-login/merge-login.component';
import { HomeMergeComponent } from './home-merge/home-merge.component';
import { HttpClientModule } from '@angular/common/http';
import { News1Component } from './news1/news1.component';
import { News2Component } from './news2/news2.component';
import { News3Component } from './news3/news3.component';
import { News4Component } from './news4/news4.component';
import { MissionMergeComponent } from './mission-merge/mission-merge.component';
import { MergeRegisterComponent } from './merge-register/merge-register.component';
import { MergeForgotPaswordComponent } from './merge-forgot-pasword/merge-forgot-pasword.component';
import { HowWeWorkMergeComponent } from './how-we-work-merge/how-we-work-merge.component';
import { AuthService } from './_services/auth.service';
import { ContactMergeComponent } from './contact-merge/contact-merge.component';
import { ResourceMergeComponent } from './resource-merge/resource-merge.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    DonationsComponent,
    BottomBodyComponent,
    FooterComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    AboutusleftComponent,
    AboutusrightComponent,
    HowWeWorkRightComponent,
    HowWeWorkLeftComponent,
    MissionLeftComponent,
    MissionRightComponent,
    OurTeamRightComponent,
    OurTeamLeftComponent,
    ResourcesLeftComponent,
    ResourcesRightComponent,
    ContactUsLeftComponent,
    ContactUsRightComponent,
    HomeComponent,
    AboutUSComponent,
    MergeLoginComponent,
    HomeMergeComponent,
    News1Component,
    News2Component,
    News3Component,
    News4Component,
    MissionMergeComponent,
    MergeRegisterComponent,
    MergeForgotPaswordComponent,
    HowWeWorkMergeComponent,
    ContactMergeComponent,
    ResourceMergeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
