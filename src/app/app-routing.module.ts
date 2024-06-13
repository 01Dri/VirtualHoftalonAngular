import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAdmComponent } from './components/register-adm/register-adm.component';
import { LoginComponent } from './components/global/login/login.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { CreateDoctorPanelComponent } from './components/admin/create-doctor-panel/create-doctor-panel.component';

const routes: Routes = [
  {path: 'register-adm', component: RegisterAdmComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'create-doctor-panel', component: CreateDoctorPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
