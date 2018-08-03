import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from '../model/course';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {

  courses: Array<CourseModel>;
  canceledCourse: number;
  @Input() search: string;

  constructor(private coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  ngOnInit() {
  }

  isEmptyCourses(): boolean {
    return !this.courses.length;
  }

  onRemove(courseId: number) {
    this.coursesService.removeCourse(courseId);
    this.courses = this.coursesService.getCourses();
    this.canceledCourse = courseId;
  }
}
