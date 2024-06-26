import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAdmComponent } from './components/register-adm/register-adm.component';
import { LoginComponent } from './components/global/login/login.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { CreateDoctorPanelComponent } from './components/admin/create-doctor-panel/create-doctor-panel.component';
import { CreatePatientPanelComponent } from './components/admin/create-patient-panel/create-patient-panel.component';
import { ConsultPatientComponent } from './components/admin/consult-patient/consult-patient.component';

const routes: Routes = [
  {path: 'register-adm', component: RegisterAdmComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'create-doctor-panel', component: CreateDoctorPanelComponent},
  {path: 'create-patient-panel', component: CreatePatientPanelComponent},
  {path: 'consult-patient', component: ConsultPatientComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rota de redirecionamento
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
