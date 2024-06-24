import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from './modules/components/news/news.component';

const routes: Routes = [
  {path: '',  component:NewsComponent},
  { path: 'news-viewer', component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
