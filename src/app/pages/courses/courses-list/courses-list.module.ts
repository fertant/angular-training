import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './courses-list.component';
import { CourseComponent } from './course/course.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoursesListComponent,
    CourseComponent,
    SearchComponent,
    LoaderComponent
  ],
  exports: [
    CoursesListComponent
  ]
})
export class CoursesListModule { }
