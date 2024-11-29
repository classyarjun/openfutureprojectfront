import { Job } from 'src/modal/job';
import { JobService } from './../../service/job.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Declare the bootstrap variable
declare var bootstrap: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  jobs: Job[] = [];
  newJob: Job = new Job();
  selectedJob: Job = new Job(); // Initialize selectedJob
  adminData: any = null; // To store fetched admin data

  errorMessage: string = ''; // To store error messages if any
  @ViewChild('editModal') editModal!: ElementRef; // Reference to the edit modal
  @ViewChild('deleteModal') deleteModal!: ElementRef; // Reference to the delete modal

  constructor(private jobService: JobService ,private http: HttpClient) {}


  ngOnInit(): void {
    this.loadJobs();this.getAdminById(1);
  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    });
  }

  addJob(): void {
    this.jobService.createJob(this.newJob).subscribe((job) => {
      this.jobs.push(job);
      this.newJob = new Job(); // Reset the form

      // Close the create modal
      const modalElement = document.getElementById('CreateModal');
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    });
  }

  openEditModal(job: Job): void {
    this.selectedJob = { ...job }; // Create a copy of the job to edit
  }

  updateJob(job: Job): void {
    if (job.id) {
      this.jobService.updateJob(job.id, job).subscribe((updatedJob) => {
        const index = this.jobs.findIndex((j) => j.id === updatedJob.id);
        if (index !== -1) {
          this.jobs[index] = updatedJob;
        }
        // Close the edit modal
        const modalElement = this.editModal.nativeElement;
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }
      });
    } else {
      console.error('Job ID is missing');
    }
  }

  openDeleteModal(job: Job): void {
    this.selectedJob = { ...job }; // Store the job to be deleted
    const modalElement = this.deleteModal.nativeElement;
    const modal = new bootstrap.Modal(modalElement);
    modal.show(); // Show the modal
  }

  deleteJob(): void {
    if (this.selectedJob.id) {
      this.jobService.deleteJob(this.selectedJob.id).subscribe(
        (response) => {
          // Remove the deleted job from the jobs array
          this.jobs = this.jobs.filter((job) => job.id !== this.selectedJob.id);
          const modalElement = this.deleteModal.nativeElement;

          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          if (modalInstance) {
            modalInstance.hide();
          }
          // Show the response message
          // alert(response);
          // This will show "Job deleted successfully"
          // Reset selectedJob

          this.selectedJob = new Job();
        },
        (error) => {
          console.error('Error deleting job:', error);
        }
      );
    }
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


