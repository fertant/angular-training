import { Component, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../courses-list/courses.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  @Output() page = new EventEmitter<number>();
  currentPage: number;
  loading: boolean;

  constructor(private coursesService: CoursesService) {
    this.loading = false;
  }

  onLoad() {
    this.currentPage = this.coursesService.getCurrentPage();
    this.page.emit(this.currentPage);
    console.log('Loader click.');
    this.loading = true;
  }
}
