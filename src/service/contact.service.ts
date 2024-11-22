import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Contact } from 'src/modal/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ContactService {

// API URL for the backend

 private apiUrl = 'http://localhost:9090/api/contacts'; // Adjust this based on your backend URL

 constructor(private http: HttpClient) {}

 // Create a new contact
 createContact(contact: Contact): Observable<Contact> {
   return this.http.post<Contact>(`${this.apiUrl}/save`, contact, {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     }),
   });
 }

 // Get all contacts
 getAllContacts(): Observable<Contact[]> {
   return this.http.get<Contact[]>(`${this.apiUrl}/all`);
 }

 // Get a contact by ID
 getContactById(id: number): Observable<Contact> {
   return this.http.get<Contact>(`${this.apiUrl}/getById/${id}`);
 }

 // Update a contact by ID
 updateContact(id: number, contact: Contact): Observable<Contact> {
   return this.http.put<Contact>(`${this.apiUrl}/Update/${id}`, contact, {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     }),
   });
 }

 // Delete a contact by ID
 deleteContact(id: number): Observable<void> {
   return this.http.delete<void>(`${this.apiUrl}/Delete/${id}`);
 }
}
