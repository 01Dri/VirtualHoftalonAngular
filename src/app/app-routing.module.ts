import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAdmComponent } from './administrator/register-adm/register-adm.component';
import { LoginAdmComponent } from './administrator/login-adm/login-adm.component';

const routes: Routes = [
  {path: 'register-adm', component: RegisterAdmComponent},
  {path: 'login-adm', component: LoginAdmComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
