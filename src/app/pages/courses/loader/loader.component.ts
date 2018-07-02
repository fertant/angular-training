import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading: boolean;

  constructor() {
    this.loading = false;
  }

  ngOnInit() {
  }

  onLoad() {
    this.loading = true;
    console.log('Loader click.');
  }
}