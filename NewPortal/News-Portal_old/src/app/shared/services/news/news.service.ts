import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl = 'https://localhost:7137/api/news';

  constructor(private http: HttpClient) { }

  getLatestNews(pageNumber: number, pageSize: number) {
    return this.http.get(`${this.apiUrl}/latest?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  searchNews(searchTerm: string, pageNumber: number, pageSize: number) {
    return this.http.get(`${this.apiUrl}/search?searchTerm=${searchTerm}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  createNews(newsArticle: any) {
    return this.http.post(`${this.apiUrl}`, newsArticle);
  }

  updateNews(id: number, newsArticle: any) {
    return this.http.put(`${this.apiUrl}/${id}`, newsArticle);
  }

  deleteNews(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}