import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testing } from 'src/modal/testing';

@Injectable({
  providedIn: 'root',
})
export class TestingService {
  private baseUrl = 'http://localhost:9090/api/admin';

  constructor(private http: HttpClient) {}

  saveAdmin(adminData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set the content type
    });
    return this.http.post(`${this.baseUrl}/register`, adminData, { headers });
  }

  getAllAdmins(): Observable<Testing[]> {
    return this.http.get<Testing[]>(`${this.baseUrl}/all`);
  }

  updateAdmin(adminId: number, adminData: FormData): Observable<any> {
    // HttpHeaders removed as Angular handles multipart form data automatically
    return this.http.put(`${this.baseUrl}/update/${adminId}`, adminData);
  }

  deleteAdmin(adminId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${adminId}`);
  }
}
