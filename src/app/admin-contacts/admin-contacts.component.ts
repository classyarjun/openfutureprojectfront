import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/service/contact.service';
import { Contact } from 'src/modal/contact';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.css']
})
export class AdminContactsComponent implements OnInit {

  contacts: Contact[] = [];
  selectedContact: Contact | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
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
}








