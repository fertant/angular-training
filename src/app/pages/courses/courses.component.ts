import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  searchValue: string;
  nextPage: number;

  constructor() {
    this.searchValue = '';
    this.nextPage = 0;
  }

  onSearch(searchValue: string) {
    this.searchValue = searchValue;
  }

  onLoadMore(page: number) {
    this.nextPage = page;
  }
}
