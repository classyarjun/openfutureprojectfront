import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from 'src/modal/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService
{
  private baseUrl = 'http://localhost:9090/api/News'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Save News
  saveNews(news: News): Observable<News> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set the content type
    });
    return this.http.post<News>(`${this.baseUrl}/SaveNews`, news, { headers });
  }

  // Get News by ID
  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(`${this.baseUrl}/getNewsById/${id}`);
  }

  // Get All News
  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.baseUrl}/allnews`);
  }

  // Get News by Admin ID
  getNewsByAdminId(adminId: number): Observable<News> {
    return this.http.get<News>(`${this.baseUrl}/getNewsByAdminId/${adminId}`);
  }

  // Update News
  updateNews(newsId: number, news: News): Observable<News> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set the content type
    });
    return this.http.put<News>(`${this.baseUrl}/update/${newsId}`, news,{headers});
  }

  // Delete News
  deleteNews(newsId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${newsId}`
    );
  }


}
