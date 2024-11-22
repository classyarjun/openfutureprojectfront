import { Component } from '@angular/core';
import { ContactService } from './../../service/contact.service';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/modal/contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent {

  contact: Contact = new Contact();

  constructor(private ContactService: ContactService) {}

  submitContactForm(contactForm: NgForm): void {  // Explicitly type the parameter as NgForm
    if (contactForm.valid) {
      // If form is valid, submit the form data
      this.ContactService.createContact(this.contact).subscribe(
        (response) => {
          console.log('Contact created:', response);
          alert('Contact submitted successfully!');
          this.contact = new Contact(); // Clear the form after submission
        },
        (error) => {
          console.error('Error creating contact:', error);
          alert('Failed to submit contact');
        }
      );
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}



