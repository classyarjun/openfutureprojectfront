import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {


  private apiUrl = 'http://localhost:9090/api/forms/form/saveForm';  // URL for your backend API
  private allformUrl='http://localhost:9090/api/admin/form/getAllForms';

  constructor(private http: HttpClient) { }

  // Method to send FormData to the backend
  saveForm(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  getAllForms(): Observable<any> {
    return this.http.get(this.allformUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling method
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}






