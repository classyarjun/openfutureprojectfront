import { AdminService } from 'src/service/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; // Reactive form for login
  errorMessage: string | null = null; // Error message display
  loginError: boolean = false; // Tracks login error state
  isLoading: boolean = false; // Loading state for button and UI feedback

  constructor(
    private fb: FormBuilder,
    private AdminService: AdminService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]], // Username validation
      password: ['', [Validators.required]], // Password validation
    });
  }

  ngOnInit(): void {
    // Initialization logic, if any
  }

  onLogin() {
    if (this.loginForm.invalid) {
      // Form validation error
      this.errorMessage = 'Please fill in all required fields.';
      this.loginError = true;
      return;
    }

    const { username, password } = this.loginForm.value;
    this.isLoading = true; // Start loading spinner

    this.AdminService.loginAdmin(username, password).subscribe(
      (response: string) => {
        this.isLoading = false; // Stop loading spinner
        this.router.navigate(['/admin']); // Navigate to dashboard
      },
      (error) => {
        this.isLoading = false; // Stop loading spinner
        this.loginError = true; // Display error state
        this.errorMessage = error.error?.message || 'Invalid username or password';
      }
    );
  }

  navigateToHome(): void {
    this.router.navigate(['/home']); // Navigate to home page
}

}
