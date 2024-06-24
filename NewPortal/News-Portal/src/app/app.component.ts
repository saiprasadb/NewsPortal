import { Component, OnInit } from '@angular/core';
import {ProgressService} from '../app/services/progress/progress.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'News-Portal';

  showSpinner = false;
  constructor(private progressService: ProgressService) { }

  ngOnInit(): void {
    this.progressService.progress$.subscribe((value) => {
      this.showSpinner = value;
    });
  }

}
