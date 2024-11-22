// src/app/admin.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Admin } from 'src/modal/admin.model';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:9090/api/admin'; // Backend API URL

  constructor(private http: HttpClient) {}

  /**
   * Register Admin with profile picture
   * @param adminData - Admin details
   * @param profilePicture - Profile picture file (optional)
   * @returns Observable<string>
   */
  registerAdmin(adminData: any, profilePicture: File | null): Observable<string> {
    const formData = new FormData();
    formData.append('adminData', JSON.stringify(adminData));

    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    return this.http
      .post<string>(`${this.baseUrl}/register`, formData, {
        responseType: 'text' as 'json',
      })
      .pipe(catchError(this.handleError('registerAdmin')));
  }

  /**
   * Login Admin
   * @param username - Admin username
   * @param password - Admin password
   * @returns Observable<string>
   */
  loginAdmin(username: string, password: string): Observable<string> {
    const params = new HttpParams().set('username', username).set('password', password);

    return this.http
      .post<string>(`${this.baseUrl}/login`, {}, {
        params,
        responseType: 'text' as 'json',
      })
      .pipe(catchError(this.handleError('loginAdmin')));
  }

  /**
   * Fetch admin by ID
   * @param adminId - Admin ID
   * @returns Observable<Admin>
   */
  getAdminById(adminId: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/get/${adminId}`).pipe(
      catchError(this.handleError('getAdminById'))
    );
  }


  // Error handling helper
  private handleError(operation: string) {
    return (error: HttpErrorResponse) => {
      console.error(`${operation} failed:`, error);
      return throwError(() => new Error(`${operation}: ${error.message || 'unknown error'}`));
    };
  }
}
