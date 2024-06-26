import { Component } from '@angular/core';
import { AdministratorReponseDTO } from '../../../models/administrator/AdministratorResponseDTO';
import { StorageService } from '../../../services/storage.service';
import { RequestsService } from '../../../services/requests.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
  isCollapsed: boolean = false;
  currentScreen: string  = this.storageService.cookieStorageGet("currentScreen");

  user = ""
  constructor(private storageService: StorageService, private router: Router, private requestServices: RequestsService, private route: ActivatedRoute) {}
  ngOnInit() {
    var role = this.storageService.cookieStorageGet("role");
    if (role!= null) {
      if (role != "ADMIN") {
        this.router.navigateByUrl("/login");
      }
    }
    if (this.storageService.cookieStorageGet("username") != null) {
      console.log("tem o cookie")
      this.user = this.storageService.cookieStorageGet("username");
      console.log(this.user)
    }
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  setCurrentScreen(screen: string) {
    this.storageService.cookieStorageSet("currentScreen", screen);
  }
  
}
