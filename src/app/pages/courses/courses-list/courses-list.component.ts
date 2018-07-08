import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from '../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: Array<CourseModel>;
  canceledCourse: number;
  @Input() search: string;

  constructor() {
    this.courses = [
      {
        id: 0,
        title: 'Title of the news1',
        creationDate: new Date(),
        duration: 5,
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
        topRated: true,
      },
      {
        id: 1,
        title: 'Title of the news2',
        creationDate: new Date('09.07.2018'),
        duration: 5,
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
        topRated: false,
      },
      {
        id: 2,
        title: 'Title of the news3',
        creationDate: new Date('05.07.2018'),
        duration: 5,
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
        topRated: false,
      }
    ];
  }

  ngOnInit() {
  }

  isEmptyCourses(): boolean {
    return this.courses.length === 0;
  }

  onRemove(courseId: number) {
    this.canceledCourse = courseId;
    console.log(courseId);
  }
}
