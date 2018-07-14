import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './courses-list.component';
import { CourseComponent } from './course/course.component';
import { FreshCourseDirective } from './directives/fresh-course.directive';
import { DurationFormingPipe } from './pipes/duration-forming.pipe';
import { OrderByCoursesPipe } from './pipes/order-by-courses.pipe';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoursesListComponent,
    CourseComponent,
    FreshCourseDirective,
    DurationFormingPipe,
    OrderByCoursesPipe,
    FilterCoursesPipe,
  ],
  exports: [
    CoursesListComponent
  ]
})
export class CoursesListModule { }
