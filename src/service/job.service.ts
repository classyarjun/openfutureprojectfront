import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from 'src/modal/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = 'http://localhost:9090/api/jobs'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(`${this.apiUrl}/job/saveJobs`, job, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/job/getAllJobs`);
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/getById/${id}`);
  }

  updateJob(id: number, job: Job): Observable<Job> {
    return this.http.put<Job>(`${this.apiUrl}/job/updateJob/${id}`, job, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  deleteJob(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/job/deleteJobById/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text' as 'json' // Specify that we expect a text response
    });
  }

}

