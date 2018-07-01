import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRouting } from './courses-routing.module';

import { CoursesListModule } from './courses-list/courses-list.module';
import { CoursesComponent } from './courses.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesListModule,
    CoursesRouting
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
