import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig  } from 'primeng/dynamicdialog';
import {NewsService} from '../../../services/news/news.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ToastService} from '../../../services/toast/toast.service';
import {ProgressService} from '../../../services/progress/progress.service';

interface Category {
  name: string;
  type: string;
}

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.scss']
})
export class AddnewsComponent {
  public Editor = ClassicEditor;
  formGroup: FormGroup;

  categories: Category[] | undefined;

  constructor(private newsService: NewsService, public ref: DynamicDialogRef,
     public config: DynamicDialogConfig, private fb: FormBuilder,private toast: ToastService,
    private progress: ProgressService) {
    
    this.formGroup = this.fb.group({
      title : ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required]
    });
    
   }

   ngOnInit(): void {    
    this.categories = [
      {name : "Skills", type: "Skills"},
      {name : "Entertainment", type: "Entertainment"}
  ];
  }

  addArticle(){
    var data = {      
      title : this.formGroup.controls['title'].value,
      description : this.formGroup.controls['description'].value,
      category : this.formGroup.controls['category'].value.type     
    }
  
    this.newsService.createNews(data).subscribe(data => {
      this.progress.show();
      this.toast.showSuccess("Article has been saved successfully.")
      this.newsService.addNewscloseDialog();
    },
    (error) => {
      this.toast.showError("Failed to save article, please try again later");
    })
    this.progress.hide();
  }

 
}
