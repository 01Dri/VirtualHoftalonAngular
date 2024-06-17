import { Component } from '@angular/core';
import { PatientRequestDTO } from '../../../models/patients/PatientRequestDTO';
import { RequestsService } from '../../../services/requests.service';
import { PatientReponseDTO } from '../../../models/patients/PatientResponseDTO';

@Component({
  selector: 'app-consult-patient',
  templateUrl: './consult-patient.component.html',
  styleUrl: './consult-patient.component.css'
})
export class ConsultPatientComponent {

  email = "";
  cpf = "";
  idPatient: number = null!;
  patientResponseDTO = new PatientReponseDTO();
  submitted = false;
  success = false;  
  selectedTypeConsult = "";
  errorMessage  = "";

  endpointByCode = "patients/";
  endpointByCpf = "patients/cpf/";
  endpointByEmail = "patients/email/";


  constructor(private requestsServices: RequestsService){}

  consult() {
    if (!this.email && !this.cpf && !this.idPatient) {
      this.errorMessage = "Por favor preencha os campos obrigatórios!"
    } else { 
      this.submitted = true;
        this.requestsServices.getData<PatientReponseDTO>(this.checkEdnpointToRequest())
        .subscribe((response: PatientRequestDTO) => {
          this.patientResponseDTO = response;
          this.success = true;
          this.errorMessage = ""
        }, (error: any) => {
          this.success = false;
          console.log("Deu erro aqui")
          this.errorMessage = error;
        });
      }
  }

  getDoctorById(id: number) {
    this.requestsServices.getData<any>(`doctors/${id}`)
    .subscribe((response: any) => {
      console.log(response)
      this.patientResponseDTO.doctorName = response.name
    }, (error: any) => {
      console.log(error)
    })
    return null

  }

  checkEdnpointToRequest() : string {
    var endpoint!: string;
    if (this.selectedTypeConsult === "Code") {
        endpoint = this.endpointByCode + this.idPatient;
    }
    if (this.selectedTypeConsult === "CPF") {
      endpoint = this.endpointByCpf + this.cpf;
    }

    if (this.selectedTypeConsult === "Email") {
      endpoint = this.endpointByEmail + this.email;
    }
    console.log("ENDPOINT: " + endpoint)
    return endpoint;
  }

  formatarCPF(event: any): void {
    let cpf = event.target.value;

    cpf = cpf.replace(/\D/g, ''); // Remove tudo o que não é dígito
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto entre o terceiro e o quarto dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto entre o terceiro e o quarto dígitos novamente (para o segundo bloco)
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen entre o terceiro e o quarto dígitos

    this.cpf = cpf;
  }
}
