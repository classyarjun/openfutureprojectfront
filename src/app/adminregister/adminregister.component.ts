import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Admin } from 'src/modal/admin.model';
import { AdminService } from 'src/service/admin.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  adminForm!: FormGroup;
  profilePicture!: File;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form group with form controls and validations
    this.adminForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]], // Only alphabetic characters and spaces
      mobileNo: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')  // Validates for a 10-digit number
      ]],
      username: ['', [Validators.required, Validators.minLength(3)]], // Minimum length for username
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')  // At least one uppercase, one lowercase, and one number
      ]],
      email: ['', [
        Validators.required,
        Validators.email  // Valid email format
      ]]
    });
  }

  // Handle file input changes
  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.profilePicture = event.target.files[0];
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.adminForm.valid) {
      const admin: Admin = this.adminForm.value;

      this.adminService.registerAdmin(admin, this.profilePicture).subscribe(
        (response) => {
          console.log(response);
          alert('Admin registered successfully');
          this.router.navigate(['/adminlogin']); // Navigate to login after successful registration
        },
        (error) => {
          console.error(error);
          alert('Failed to register admin');
        }
      );
    }
  }

  // Navigate to login page
  navigateToLogin(): void {
    this.router.navigate(['/adminlogin']);
  }

  navigateToHome(): void {
    this.router.navigate(['/home']); // Ensure '/home' route exists in your app-routing.module.ts
  }
}

