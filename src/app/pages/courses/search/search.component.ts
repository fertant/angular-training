import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput: string;
  searchStart: boolean;
  @Output() search = new EventEmitter<string>();

  constructor() {
    this.searchInput = '';
    this.searchStart = false;
  }

  ngOnInit() {
  }

  public searchInputUpdate(value) {
    this.searchInput = value;
  }

  public searchSubmit() {
    this.searchStart = true;
    this.search.emit(this.searchInput);
  }

}
