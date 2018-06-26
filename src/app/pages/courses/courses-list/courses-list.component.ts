import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: Array<CourseModel>;

  constructor() {
    this.courses = [
      {
        id: 0,
        title: 'Title of the news',
        creationDate: new Date(),
        duration: 5,
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
      },
      {
        id: 1,
        title: 'Title of the news',
        creationDate: new Date(),
        duration: 5,
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
      }
    ];
  }

  ngOnInit() {
  }

  onCancel(courseId: number) {
    console.log(courseId);
  }
}
