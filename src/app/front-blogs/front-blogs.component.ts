import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsService } from './../../service/news.service';
import { News } from 'src/modal/news';
import { NgForm } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-front-blogs',
  templateUrl: './front-blogs.component.html',
  styleUrls: ['./front-blogs.component.css']
})

export class FrontBlogsComponent implements OnInit {
  @ViewChild('deleteModal') deleteModal!: ElementRef; // Reference to the delete modal

  news: News = {
    newsTitle: '',
    newsContent: '',
    admin: { id: 0 },
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
  // Method to load all news (implement this based on your application logic)
}
