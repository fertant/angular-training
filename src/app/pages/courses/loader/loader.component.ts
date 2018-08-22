import { Component } from '@angular/core';
import { CoursesService } from '../courses-list/courses.service';
import { Store } from '@ngrx/store';
import { CoursesActionTypes } from '../../../core/shared/actions/courses.actions';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  currentPage: number;
  loading: boolean;

  constructor(
    private coursesService: CoursesService,
    private store: Store<any>
  ) {
    this.loading = false;
  }

  onLoad() {
    this.currentPage = this.coursesService.getCurrentPage();
    this.coursesService.setCurrentPage(this.currentPage + 1);
    this.store.dispatch({
      type: CoursesActionTypes.PAGE,
      payload: {
        search: this.coursesService.getSearchQuery(),
        page: (this.currentPage + 1)
      }
    });
    this.loading = true;
  }
}
