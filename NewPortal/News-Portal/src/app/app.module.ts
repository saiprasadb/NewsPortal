import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './modules/components/news/news.component';
import {HttpClientModule} from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { EditorModule } from 'primeng/editor';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { UpdateComponent } from './modules/components/update/update.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AddnewsComponent } from './modules/components/addnews/addnews.component';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    UpdateComponent,
    AddnewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,   
    PaginatorModule,
    PanelModule,
    EditorModule,
    DynamicDialogModule,
    ReactiveFormsModule ,
    CKEditorModule,
    DropdownModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  providers: [DialogService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
