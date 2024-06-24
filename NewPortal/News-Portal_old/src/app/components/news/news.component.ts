import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NewsService} from '../../shared/services/news/news.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [   
    FormsModule
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  newsArticles: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getLatestNews(this.currentPage, this.pageSize)
      .subscribe((data: any) => {
        this.newsArticles = data;
      });
  }

  search() {
    this.newsService.searchNews(this.searchTerm, this.currentPage, this.pageSize)
      .subscribe((data: any) => {
        this.newsArticles = data;
      });
  }
  

  nextPage() {
    this.currentPage++;
    this.loadNews();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadNews();
    }
  }

  // Implement edit, delete, create methods
}
