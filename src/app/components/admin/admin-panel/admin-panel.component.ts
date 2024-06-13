import { Component } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';
import { RequestsService } from '../../../services/requests.service';
import { AdministratorReponseDTO } from '../../../models/administrator/AdministratorResponseDTO';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

  user = new AdministratorReponseDTO();
  constructor(private storageService: StorageService, private router: Router, private requestServices: RequestsService) {}
  ngOnInit() {

    var role = this.storageService.cookieStorageGet("role");
    if (role!= null) {
      if (role != "ADMIN") {
        this.router.navigateByUrl("/login");
      }
    }
    var idAdmin: number = parseInt(this.storageService.cookieStorageGet(`id`));
    this.requestServices.getData<AdministratorReponseDTO>(`admins/login/${idAdmin}`)
    .subscribe(
      (response: AdministratorReponseDTO) => {
        this.user = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
