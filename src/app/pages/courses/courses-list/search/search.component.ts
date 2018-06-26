import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchInput: string;

  constructor() {
    this.searchInput = '';
  }

  ngOnInit() {
  }

  public searchInputUpdate(value) {
    this.searchInput = value;
  }

  public searchSubmit() {
    console.log(this.searchInput);
  }

}
