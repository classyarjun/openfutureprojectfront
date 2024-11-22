import { ApplyService } from 'src/service/apply.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-all-forms',
  templateUrl: './admin-all-forms.component.html',
  styleUrls: ['./admin-all-forms.component.css']
})
export class AdminAllFormsComponent  implements OnInit {
  forms: any[] = []; // Array to hold forms data
  errorMessage: string = ''; // Variable to hold error message

  constructor(private ApplyService: ApplyService) { }

  ngOnInit(): void {
    this.loadForms(); // Load forms when the component initializes
  }

  loadForms(): void {
    this.ApplyService.getAllForms().subscribe({
      next: (data) => {
        this.forms = data; // Store the retrieved forms data
        console.log('Forms data:', this.forms); // Check if resumeBase64 is present
      },
      error: (error) => {
        this.errorMessage = error;
        console.error('Error retrieving forms:', error);
      }
    });
  }



  downloadResume(base64String: string | undefined, filename: string): void {
    if (!base64String) {
      console.error('Base64 string is undefined');
      return;
    }

    try {
      // Check if the Base64 string has a prefix and remove it if necessary
      const base64Data = base64String.includes('base64,')
        ? base64String.split(',')[1]
        : base64String;

      // Convert Base64 string to a byte array
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);

      // Create a Blob from the byte array
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      // Create a link element
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename; // Set the file name

      // Append to the body
      document.body.appendChild(link);
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up

    } catch (error) {
      console.error('Error decoding Base64 string:', error);
    }
  }



}
