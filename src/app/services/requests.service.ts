import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { RefreshTokenRequestDTO } from '../models/RefreshTokenRequestDTO';
import { LoginResponseDTO } from '../models/LoginResponseDTO';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private baseUrl = 'http://localhost:5184';
  private token: string | null = null;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) {
    if (typeof window !== 'undefined') {
      this.token = this.storageService.cookieStorageGet("accessToken");
      if (this.token) {
        this.headers = this.headers.append('Authorization', `Bearer ${this.token}`);
      }
    }
  }

  getData<T>(endpoint: string): Observable<T> {
    const options = {
      headers: this.headers
    };

    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, options)
      .pipe(
        catchError((error: HttpErrorResponse) => this.handleError<T>(error, endpoint))
      );
  }

  post<T>(endpoint: string, body: T): Observable<T> {
    const options = {
      headers: this.headers
    };

    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, options)
      .pipe(
        catchError((error: HttpErrorResponse) => this.handleError<T>(error, endpoint))
      );
  }

  private handleError<T>(error: HttpErrorResponse, endpoint: string): Observable<T> {
    if (error.status === 401) {
      this.refreshToken().subscribe(
        (response: any) => {
          window.location.reload(); 
        },
        (refreshError: any) => {
          this.router.navigateByUrl("/login");
        }
      );
    } else {
      console.error(`Error occurred in endpoint ${endpoint}:`, error);
    }

    return throwError(() => error) as Observable<T>;
  }

  refreshToken(): Observable<LoginResponseDTO> {
    const endpointRefreshToken = `${this.baseUrl}/login/refreshtoken`;
    const refreshTokenRequestDTO = new RefreshTokenRequestDTO(
      this.storageService.cookieStorageGet("refreshToken"),
      Number.parseInt(this.storageService.cookieStorageGet("loginId"))
    );

    return this.http.post<LoginResponseDTO>(endpointRefreshToken, refreshTokenRequestDTO)
      .pipe(
        tap((response: LoginResponseDTO) => {
          this.storageService.cookieStorageSet("role", response.role!);
          this.storageService.cookieStorageSet("username", response.username!);
          this.storageService.cookieStorageSet("accessToken", response.tokenResponseDto?.accessToken!);
          this.storageService.cookieStorageSet("refreshToken", response.tokenResponseDto?.refreshToken!);
          this.storageService.cookieStorageSet("loginId", response.id?.toString()!);
        })
      );
  }
}
