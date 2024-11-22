import { JobService } from './../../service/job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/modal/job';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.css']
})
export class JobOpeningComponent implements OnInit {
  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  currentJobs: Job[] = [];
  currentPage = 1;
  totalPages = 1;
  pageSize = 5;
  pages: number[] = [];

  filters: Record<string, any> = {
    remote: false,
    hybrid: false,
    office: false,
    experience: '',
    salary: ''
  };

  workModes = [
    { value: 'remote', label: 'Remote' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'office', label: 'Work from Office' }
  ];

  experiences = [
    { value: '0-1', label: '0-1 years' },
    { value: '2-3', label: '2-3 years' },
    { value: '4-5', label: '4-5 years' },
    { value: '6-7', label: '6-7 years' },
    { value: '8-9', label: '8-9 years' }
  ];

  salaries = [
    { value: '1', label: '1-2 LPA' },
    { value: '2', label: '3-5 LPA' },
    { value: '3', label: '6-7 LPA' },
    { value: '4', label: '8-9 LPA' }
  ];

  constructor(private JobService: JobService) {}

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.JobService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredJobs = this.jobs.filter(job =>
      this.filterByWorkModel(job) &&
      this.filterByExperience(job) &&
      this.filterBySalary(job)
    );
    this.updatePagination();
  }

  filterByWorkModel(job: Job): boolean {
    if (this.filters['remote'] && job.workModel.toLowerCase() === 'remote') return true;
    if (this.filters['hybrid'] && job.workModel.toLowerCase() === 'hybrid') return true;
    if (this.filters['office'] && job.workModel.toLowerCase() === 'work from office') return true;
    return !this.filters['remote'] && !this.filters['hybrid'] && !this.filters['office'];
  }

  filterByExperience(job: Job): boolean {
    if (!this.filters['experience']) return true;
    const [min, max] = this.filters['experience'].split('-').map(Number);
    const exp = this.parseExperience(job.experience);
    return exp >= min && (!max || exp <= max);
  }

  filterBySalary(job: Job): boolean {
    if (!this.filters['salary']) return true;

    const salaryRanges: { [key: string]: number[] } = {
      '1': [100000, 200000],
      '2': [300000, 500000],
      '3': [600000, 700000],
      '4': [800000, 900000]
    };

    const [min, max] = salaryRanges[this.filters['salary']];
    const salary = this.parseSalary(job.salary);
    return salary >= min && salary <= max;
  }

  parseExperience(exp: string): number {
    const match = exp.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  parseSalary(salary: string): number {
    const match = salary.match(/\d+/g);
    return match ? parseInt(match[match.length - 1]) * 100000 : 0;
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredJobs.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.changePage(this.currentPage > this.totalPages ? 1 : this.currentPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.currentJobs = this.filteredJobs.slice(start, end);
  }

  resetFilters() {
    this.filters = {
      remote: false,
      hybrid: false,
      office: false,
      experience: null,
      salary: null,
    };
    this.applyFilters();  // Re-apply filters after resetting them
  }

}
