import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from './components/news/news.component';

export const routes: Routes = [
    { path: '', component:NewsComponent },
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
