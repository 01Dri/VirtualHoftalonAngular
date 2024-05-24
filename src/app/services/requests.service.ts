import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private baseUrl = 'http://localhost:5184';
  private token: string | null = null;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
    // Check if localStorage is available before accessing it
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem("token");
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
        catchError(this.handleError)
      );
  }

  post<T>(endpoint: string, body: T): Observable<T> {
    const options = {
      headers: this.headers
    };

    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body ,options)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error); // Log error to console or remote logging service
    return throwError(JSON.stringify(error.error));

  }
}
