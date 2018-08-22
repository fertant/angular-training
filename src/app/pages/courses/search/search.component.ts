import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CoursesActionTypes } from '../../../core/shared/actions/courses.actions';
import { CoursesService } from '../courses-list/courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchStart: boolean;
  searchInput: FormControl;

  constructor(
    private store: Store<any>,
    private coursesService: CoursesService
  ) {
    this.searchInput = new FormControl('', []);
    this.searchStart = false;
  }

  ngOnInit() {
    this.store.dispatch({type: CoursesActionTypes.SEARCH, payload: { search: '', page: 0}});
    this.searchInput.valueChanges
      .pipe(
        filter((query: string) => query && query.length >= 3),
        tap((query) => { this.searchStart = true; }),
        debounceTime(250),
      )
      .subscribe(query => {
        this.coursesService.setSearchQuery(query);
        this.coursesService.setCurrentPage(0);
        this.store.dispatch({type: CoursesActionTypes.SEARCH, payload: { search: query, page: 0}});
      });
  }
}
