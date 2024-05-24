import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAdmComponent } from './administrator/register-adm/register-adm.component';

const routes: Routes = [
  {path: 'register-adm', component: RegisterAdmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
