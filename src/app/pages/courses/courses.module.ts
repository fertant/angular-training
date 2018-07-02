import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesListModule } from './courses-list/courses-list.module';
import { CoursesComponent } from './courses.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesListModule,
    CoursesRoutingModule
  ],
  declarations: [
    CoursesComponent,
    SearchComponent,
    LoaderComponent
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
