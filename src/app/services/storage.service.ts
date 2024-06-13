import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private cookieService: CookieService) { 
  }

  localStorageSet(key: string, value: string) {
    localStorage.setItem(key, value);
  } 

  localStorageGet(key: string) : string {
    return localStorage.getItem(key)!;
  } 

  cookieStorageSet(cookieName: string, value: string) {
    this.cookieService.set(cookieName, value)
  }

  cookieStorageGet(cookieName: string) {
    return this.cookieService.get(cookieName);
  }
}
