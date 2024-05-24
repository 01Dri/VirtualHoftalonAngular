import { Component } from '@angular/core';
import { AdministratorRequestDTO } from '../models/AdministratorRequestDTO';
import { AdministratorReponseDTO } from '../models/AdministratorResponseDTO';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-register-adm',
  templateUrl: './register-adm.component.html',
  styleUrl: './register-adm.component.css'
})
export class RegisterAdmComponent {

  administrator = new AdministratorRequestDTO();
  errorMessage: string = '';
  constructor(private requestService: RequestsService){}

  register() {
    this.requestService.post<AdministratorReponseDTO>("admins", this.administrator)
    .subscribe(
      (response: AdministratorReponseDTO) => { 
        this.administrator = response;
        console.log(response)
      },
      (error: any) => {
        console.log(error)
        this.errorMessage = error;
      }
    );
  }
}
