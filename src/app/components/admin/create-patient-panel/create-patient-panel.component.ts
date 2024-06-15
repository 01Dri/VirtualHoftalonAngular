import { Component } from '@angular/core';
import { PatientRequestDTO } from '../../../models/patients/PatientRequestDTO';
import { RequestsService } from '../../../services/requests.service';
import { PatientReponseDTO } from '../../../models/patients/PatientResponseDTO';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-create-patient-panel',
  templateUrl: './create-patient-panel.component.html',
  styleUrl: './create-patient-panel.component.css'
})
export class CreatePatientPanelComponent {


  patientRequestDto: PatientRequestDTO = new PatientRequestDTO();
  errorMessage = "";
  sucessMessage = "";

  constructor(private requestsServices: RequestsService, private storageServices: StorageService) {}

  ngOnInit() {
    console.log(this.storageServices.cookieStorageGet("role"));
  }
  criar() {
    if (!this.patientRequestDto.name || !this.patientRequestDto.phone || !this.patientRequestDto.cpf || 
      !this.patientRequestDto.rg || !this.patientRequestDto.email || !this.patientRequestDto.birthdate ||
      !this.patientRequestDto.classification) {
        this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
        this.sucessMessage = '';
    }
    this.requestsServices.post<PatientRequestDTO>("patients", this.patientRequestDto)
    .subscribe((response: PatientReponseDTO) => {
      this.sucessMessage = `O paciente ${this.patientRequestDto.name} foi criado, seu código é: ${response.id}`
    },
    (error => {
      console.log(error);
      this.errorMessage = error;
    })
  )}

  formatarCPF(event: any): void {
    let cpf = event.target.value;

    cpf = cpf.replace(/\D/g, ''); // Remove tudo o que não é dígito
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto entre o terceiro e o quarto dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto entre o terceiro e o quarto dígitos novamente (para o segundo bloco)
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen entre o terceiro e o quarto dígitos

    this.patientRequestDto.cpf = cpf;
  }
}
