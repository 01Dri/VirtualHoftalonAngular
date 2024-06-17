import { Component } from '@angular/core';
import { LoginDTO } from '../../../models/LoginDTO';
import { LoginResponseDTO } from '../../../models/LoginResponseDTO';
import { Router } from '@angular/router';
import { RequestsService } from '../../../services/requests.service';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginDTO = new LoginDTO();
  loginResponseDTO = new LoginResponseDTO();

  submitted = false;
  errorMessage = "";

  constructor(private router: Router, private requests: RequestsService, private storageService: StorageService){}

  login() {

    this.requests.post<LoginResponseDTO>("login/login", this.loginDTO)
    .subscribe(
      (response: LoginResponseDTO) => { 
        this.loginResponseDTO = response;
        console.log(response)
        this.submitted = true;
        console.log(this.loginResponseDTO.id);
        this.storageService.cookieStorageSet("role", this.loginResponseDTO.role!);
        this.storageService.cookieStorageSet("username", this.loginResponseDTO.username!);
        this.storageService.cookieStorageSet("accessToken", this.loginResponseDTO.tokenResponseDto?.accessToken!);
        this.storageService.cookieStorageSet("refreshToken", this.loginResponseDTO.tokenResponseDto?.refreshToken!);
        this.storageService.cookieStorageSet("loginId", this.loginResponseDTO.id?.toString()!);

        if (this.loginResponseDTO.role == "ADMIN") {
          this.router.navigateByUrl("/admin-panel");
        }
      },
      (error: any) => {
        console.log(error)
        this.submitted = true
        this.errorMessage = "Login inválido!"
      }
    );
  }
}
