import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplyService } from 'src/service/apply.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  applyForm: FormGroup;
  selectedFile: File | null = null;
  showSuccessPopup = false; // Flag to show the success popup

  constructor(private fb: FormBuilder, private applyService: ApplyService) {
    this.applyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      location: ['', Validators.required],
      admin: { id: 1 }
    });
  }

  // Handle file selection
  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // On form submit
  onSubmit(): void {
    if (this.applyForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('formData', JSON.stringify(this.applyForm.value));
    if (this.selectedFile) {
      formData.append('cv', this.selectedFile, this.selectedFile.name);
    }

    this.applyService.saveForm(formData).subscribe(
      response => {
        console.log('Form submitted successfully', response);
        this.showSuccessPopup = true; // Show popup on success
      },
      error => {
        console.error('Error submitting form', error);
      }
    );
  }

  // Close the popup
  closePopup(): void {
    this.showSuccessPopup = false;
  }
}

 