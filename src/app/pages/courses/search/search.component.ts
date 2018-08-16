import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, tap, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchStart: boolean;
  searchInput: FormControl;
  @Output() search = new EventEmitter<string>();

  constructor() {
    this.searchInput = new FormControl('', []);
    this.searchStart = false;
  }

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        filter((query: string) => query && query.length >= 3),
        tap((query) => { this.searchStart = true; }),
        debounceTime(250),
      )
      .subscribe(query => this.search.emit(query));
  }
}
