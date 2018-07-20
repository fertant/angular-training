import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { CourseModel } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Array<CourseModel>;

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

  getCourses() {
    return this.courses;
  }

  addCourse(course: CourseModel) {
    this.courses.push(course);
  }

  findCourseById(id: number) {
    return _.find(this.courses, ['id', id]);
  }

  updateCourse(id: number, course: CourseModel) {
    const index = _.findKey(this.courses, ['id', id]);
    this.courses[index] = course;
  }

  removeCourse(course: CourseModel) {
    return _.remove(this.courses, function(c) {
      return c.id === course.id;
    });
  }
}
