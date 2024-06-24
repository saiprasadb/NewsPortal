import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig  } from 'primeng/dynamicdialog';
import {NewsService} from '../../../services/news/news.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ToastService} from '../../../services/toast/toast.service';
import {ProgressService} from '../../../services/progress/progress.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [DynamicDialogRef]
})
export class UpdateComponent {
  articleDetails: any;
  formGroup: FormGroup;
  public Editor = ClassicEditor;
  constructor(private newsService: NewsService, public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig, private fb: FormBuilder,private toast: ToastService,
  private progress: ProgressService) {
    this.articleDetails = this.config.data.articleDetails;    
    
    this.formGroup = this.fb.group({
      title : new FormControl(),
      description: new FormControl()
    });
    
   }

   ngOnInit() {
    
    this.formGroup = this.fb.group({
      title :this.articleDetails.title,
      description: this.articleDetails.description
    });
    
}

updateArticle(){
this.progress.show();
  var data = {
    id : this.articleDetails.id,
    title : this.formGroup.controls['title'].value,
    description : this.formGroup.controls['description'].value,
    category : this.articleDetails.category,
    createdDate : this.articleDetails.createdDate,
    updatedDate : this.articleDetails.updatedDate
  }

  this.newsService.updateNews(this.articleDetails.id, data).subscribe(data => {
    this.toast.showSuccess("Article has been updated successfully");
    this.newsService.closeDialog();
  },
  (error) => {
    this.toast.showError("Failed to save changes, please try again later");
  })
  this.progress.hide();
}

}
