// app.module.ts or your specific module file
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
