import { ContactService } from 'src/service/contact.service';
import { Contact } from 'src/modal/contact';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Job } from 'src/modal/job';
import { JobService } from './../../service/job.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.css']
})
export class AdminContactsComponent implements OnInit {

  contacts: Contact[] = [];
  selectedContact: Contact | null = null;
  errorMessage: string = ''; // Variable to hold error message
  adminData: any = null; // To store fetched admin data

  constructor(private contactService: ContactService,private http: HttpClient) {}

  ngOnInit(): void {
    this.getContacts(); this.getAdminById(1);
  }

  getContacts(): void {
    this.contactService.getAllContacts().subscribe(
      (data: Contact[]) => {
        this.contacts = data;
      },
      (error) => {
        console.error('Error fetching contacts', error);
      }
    );
  }

  viewContact(contact: Contact): void {
    this.selectedContact = contact;
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(() => {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
      },
      (error) => {
        console.error('Error deleting contact', error);
      }
    );
  }




  getAdminById(adminId: number) {
    const url = `http://localhost:9090/api/admin/getAdminById/${adminId}`; // Replace with your backend URL

    this.http.get(url).subscribe(
      (response: any) => {
        this.adminData = response; // Assign response to adminData

        this.errorMessage = ''; // Clear error message if any

        console.log('Admin Data:', this.adminData);
      },

      (error: any) => {
        this.adminData = null; // Clear admin data if error occurs

        this.errorMessage = 'Failed to fetch admin data. Please try again.';

        console.error('Error fetching admin data:', error);
      }
    );
  }











}








