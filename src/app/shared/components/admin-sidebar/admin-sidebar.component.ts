import { Component } from '@angular/core';
import { AdministratorReponseDTO } from '../../../models/administrator/AdministratorResponseDTO';
import { StorageService } from '../../../services/storage.service';
import { RequestsService } from '../../../services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
  isCollapsed: boolean = false;

  
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

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
