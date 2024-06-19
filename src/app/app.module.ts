import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterAdmComponent } from './components/register-adm/register-adm.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/global/login/login.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { CreateDoctorPanelComponent } from './components/admin/create-doctor-panel/create-doctor-panel.component';
import { CreatePatientPanelComponent } from './components/admin/create-patient-panel/create-patient-panel.component';
import { ConsultPatientComponent } from './components/admin/consult-patient/consult-patient.component';
import { AdminSidebarComponent } from './shared/components/admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterAdmComponent,
    LoginComponent,
    AdminPanelComponent,
    CreateDoctorPanelComponent,
    CreatePatientPanelComponent,
    ConsultPatientComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  exports: [
    AdminSidebarComponent
  ]
})
export class AppModule { }
