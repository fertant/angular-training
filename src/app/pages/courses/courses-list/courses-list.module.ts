import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CoursesListComponent } from './courses-list.component';
import { CourseComponent } from './course/course.component';
import { FreshCourseDirective } from './directives/fresh-course.directive';
import { DurationFormingPipe } from './pipes/duration-forming.pipe';
import { OrderByCoursesPipe } from './pipes/order-by-courses.pipe';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { CoursesService } from './courses.service';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
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
  ],
  providers:  [CoursesService]
})
export class CoursesListModule { }
