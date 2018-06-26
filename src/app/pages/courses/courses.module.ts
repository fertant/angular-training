import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListModule } from './courses-list/courses-list.module';

@NgModule({
  imports: [
    CommonModule,
    CoursesListModule
  ],
  declarations: [],
  exports: [
    CoursesListModule
  ]
})
export class CoursesModule { }
