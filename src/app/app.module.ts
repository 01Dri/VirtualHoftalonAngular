import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterAdmComponent } from './components/register-adm/register-adm.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/global/login/login.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { CreateDoctorPanelComponent } from './components/admin/create-doctor-panel/create-doctor-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterAdmComponent,
    LoginComponent,
    AdminPanelComponent,
    CreateDoctorPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
