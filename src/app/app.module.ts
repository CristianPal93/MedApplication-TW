import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MaterialsModule} from './materials/materials.module';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
