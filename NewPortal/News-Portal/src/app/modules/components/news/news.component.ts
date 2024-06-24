import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NewsService} from '../../../services/news/news.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {UpdateComponent} from '../update/update.component';
import { AddnewsComponent } from '../addnews/addnews.component';
import {ToastService} from '../../../services/toast/toast.service';
import {ProgressService} from '../../../services/progress/progress.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsArticles: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5;
  totalRecords: number = 5;
  first: number = 1;
  description: string = 'empty';

  constructor(private newsService: NewsService,public dialogService: DialogService, 
    public toast:ToastService, public progress:ProgressService) { }

  ngOnInit(): void {     
    this.loadNews();
  }

  getArticlesCount(){
this.newsService.getArticlesCount()
.subscribe((data : any) => {
this.totalRecords = data;
this.progress.hide();
});
  }

  loadNews() {
    this.progress.show();   
    this.newsService.getLatestNews(this.currentPage, this.pageSize)
      .subscribe((data: any) => {
        this.newsArticles = data;
      });
      this.getArticlesCount();
  }

  search() {
    this.progress.show();   
    if(this.searchTerm.trim().length === 0){
      this.loadNews();

    } else{
      this.newsService.searchNews(this.searchTerm, this.currentPage, this.pageSize)
      .subscribe((data: any) => {
        this.newsArticles = data;
        this.totalRecords = this.newsArticles.length;
      });
    }
   
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

  onPageChange(event: any) {
    console.log(event);
    let pageNumber = event.first / event.rows + 1;    
    this.first = event.first ?? 1;
    //this.rows = event.rows ?? 5;
    this.totalRecords = this.totalRecords ?? 10;
    this.currentPage = pageNumber;
    this.loadNews();
}

editArticle(article:any){
  const ref: DynamicDialogRef = this.dialogService.open(UpdateComponent, { 
    data:{
      articleDetails:article
    },
    header: 'Update Article',
    height: '600px',
    width: '800px'
  });

  ref.onClose.subscribe((data) => {
    //this.currentPage = 1;
    this.loadNews();
  });

this.newsService.closeDialog$.subscribe(() => {
  ref.close();
})
}

addArticle(){
  const ref: DynamicDialogRef = this.dialogService.open(AddnewsComponent, { 
    header: 'Add Article',
    height: '600px',
    width: '800px'
  });

  ref.onClose.subscribe((data) => {
    this.first = 1;
    this.currentPage = 1;
    this.loadNews();
  });

this.newsService.addNewscloseDialog$.subscribe(() => {
  ref.close();
})
}

deleteArticle(article:any){
  this.newsService.deleteNews(article.id).subscribe(data => {
    this.toast.showSuccess("Article has been deleted successfully.");
this.loadNews();
  },
  (error) => {
    this.toast.showError("Failed to delete article, please try again later");
  })
}

}

