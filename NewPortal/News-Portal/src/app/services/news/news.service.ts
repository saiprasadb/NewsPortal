import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Subject,Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ToastService} from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private closeDialogSubject = new Subject<void>();

  closeDialog$ = this.closeDialogSubject.asObservable();

  closeDialog() {
    this.closeDialogSubject.next();
  }

  private addNewscloseDialogSubject = new Subject<void>();

  addNewscloseDialog$ = this.addNewscloseDialogSubject.asObservable();

  addNewscloseDialog() {
    this.addNewscloseDialogSubject.next();
  }


  apiUrl = 'https://localhost:7137/api';

  constructor(private http: HttpClient,public toast:ToastService) { }

  getArticlesCount() {
    return this.http.get(`${this.apiUrl}/News`).pipe(
      catchError(this.handleError)
    );
  }

  getLatestNews(pageNumber: number, pageSize: number) {
    return this.http.get(`${this.apiUrl}/News/${pageNumber}/${pageSize}`).pipe(
      catchError(this.handleError)
    );
  }

  searchNews(searchTerm: string, pageNumber: number, pageSize: number) {
    return this.http.get(`${this.apiUrl}/News/${pageNumber}/${pageSize}/${searchTerm}`).pipe(
      catchError(this.handleError)
    );
  }

  createNews(newsArticle: any) {
    return this.http.post(`${this.apiUrl}/News`, newsArticle).pipe(
      catchError(this.handleError)
    );
  }

  updateNews(id: number, newsArticle: any) {
    return this.http.put(`${this.apiUrl}/News/${id}`, newsArticle).pipe(
      catchError(this.handleError)
    );
  }

  deleteNews(id: number) {
    return this.http.delete(`${this.apiUrl}/News/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    this.toast.showError('Something went wrong; please try again later.');
    return throwError('Something went wrong; please try again later.');
  }

}
