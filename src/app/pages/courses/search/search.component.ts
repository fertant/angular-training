import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, filter, map, tap, switchMap } from 'rxjs/operators';
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
        map((query: string) => query.trim()),
        filter((query: string) => query && query.length >= 3),
        debounce(() => timer(250)),
        tap((query) => { this.searchStart = true; }),
      )
      .subscribe(query => this.search.emit(query));
  }
}
