import { TestingService } from 'src/service/testing.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Testing } from 'src/modal/testing';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
  export class TestingComponent implements OnInit {
    adminForm: FormGroup;
    selectedFile: File | null = null;
    adminList: Testing[] = []; // Array to hold the fetched admin data

    constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      private TestingService: TestingService,
      private testingService: TestingService // Inject the service
    ) {
      this.adminForm = this.fb.group({
        id: [1, Validators.required],
        name: ['', Validators.required],
        mobileNo: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });
    }

    ngOnInit(): void {
      this.loadAdminData(); // Load admin data when the component initializes
    }

    loadAdminData(): void {
      this.testingService.getAllAdmins().subscribe(
        (data: Testing[]) => {
          this.adminList = data; // Store the fetched admin data in adminList
          console.log('Fetched Admins:', this.adminList);
        },
        (error) => {
          console.error('Error fetching admins:', error);
        }
      );
    }

    onFileSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
      }
    }

    onSubmit() {
      if (this.adminForm.valid) {
        const formData = new FormData();

        // Append the form values as JSON string
        formData.append('adminData', JSON.stringify(this.adminForm.value));

        // Append the selected file if available
        if (this.selectedFile) {
          formData.append('profilePicture', this.selectedFile, this.selectedFile.name);
        }

        // Call the service to update admin
        this.testingService.updateAdmin(this.adminForm.value.id, formData).subscribe(
          (response) => {
            console.log('Admin updated successfully!', response);
            this.loadAdminData(); // Refresh the admin list
          },
          (error) => {
            console.error('Error updating admin', error);
          }
        );
      } else {
        console.error('Form is invalid!');
      }
    }
  }
