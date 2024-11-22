import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsService } from './../../service/news.service';
import { News } from 'src/modal/news';
import { NgForm } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css'],
})
export class AdminNewsComponent implements OnInit {
  @ViewChild('deleteModal') deleteModal!: ElementRef; // Reference to the delete modal

  news: News = {
    newsTitle: '',
    newsContent: '',
    admin: { id: 1 },
  };
  newsList: News[] = [];
  newsToDelete: News | null = null;
  newsToEdit: News | null = null;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  // Fetch news data
  loadNews(): void {
    this.newsService.getAllNews().subscribe(
      (data: News[]) => {
        this.newsList = data;
        console.log('Fetched news:', this.newsList);
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

  // Form submit function
  onSubmit(newsForm: any): void {
    if (newsForm.valid) {
      this.newsService.saveNews(this.news).subscribe(
        (response) => {
          console.log('News created successfully', response);
          newsForm.reset();
          this.loadNews();
        },
        (error) => {
          console.error('Error creating news:', error);
        }
      );
    }
  }

  setNewsToDelete(news: News): void {
    this.newsToDelete = news; // Set the news item that will be deleted
  }

  onDelete(newsId: number): void {
    if (newsId) {
      this.newsService.deleteNews(newsId).subscribe(
        (response) => {
          console.log('News deleted successfully', response);
          this.newsList = this.newsList.filter((news) => news.id !== newsId); // Remove the deleted news from the list

          const modalElement = document.getElementById('deleteModal');
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          if (modalInstance) {
            modalInstance.hide();
          }
        },
        (error) => {
          console.error('Error deleting news:', error);
        }
      );
    }
  }

  editNews(news: News): void {
    if (news && news.id) {
      this.newsToEdit = { ...news, admin: news.admin || { id: null } }; // Ensure admin is defined
    } else {
      console.error('Selected news item does not have a valid ID');
    }
  }

  // Method to handle form submission for updating news
  updateNews(newsForm: NgForm): void {
    if (newsForm.valid && this.newsToEdit && this.newsToEdit.id !== undefined) {
      console.log('Updating news with ID:', this.newsToEdit.id);
      console.log('News data:', JSON.stringify(this.newsToEdit));

      this.newsService
        .updateNews(this.newsToEdit.id, this.newsToEdit)
        .subscribe(
          (response) => {
            console.log('News updated successfully', response);
            this.loadNews(); // Reload the news list after successful update
            newsForm.reset(); // Reset the form after submission
            this.newsToEdit = null; // Clear the edit news object

            const modalElement = document.getElementById('EditModal');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) {
              modalInstance.hide();
            }
          },
          (error) => {
            console.error('Error updating news:', error);
          }
        );
    } else {
      console.error('News ID is undefined or form is invalid');
    }
  }

  // Method to load all news (implement this based on your application logic)
}
