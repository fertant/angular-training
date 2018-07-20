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
  coursesService: CoursesService;
  @Input() search: string;

  constructor(private service: CoursesService) {
    this.courses = service.getCourses();
    this.coursesService = service;
  }

  ngOnInit() {
  }

  isEmptyCourses(): boolean {
    return this.courses.length === 0;
  }

  onRemove(courseId: number) {
    const course = this.coursesService.findCourseById(courseId);
    this.coursesService.removeCourse(course);
    this.courses = this.coursesService.getCourses();
    this.canceledCourse = courseId;
    console.log(courseId);
  }
}
