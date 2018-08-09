import { Injectable } from '@angular/core';
import { CourseModel } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursesService {

  courses: Array<CourseModel>;
  page: number;

  constructor(private http: HttpClient) {
    this.page = 0;
  }

  getCurrentPage() {
    return this.page;
  }

  setCurrentPage(page: number) {
    this.page = page;
  }

  getCourses(offset?: number, limit?: number, search?: string) {
    const url = 'http://localhost:3004/courses';
    let query = '?';
    query += 'start=';
    query += offset ? offset : 0;
    query += '&count=';
    query += limit ? limit : 3;
    query += search ? '&textFragment=' + search : '';
    return this.http.get(url + query)
      .pipe(
        map(res => {
          return Object.values(res).map(item => {
            return new CourseModel(
              item['id'],
              item['name'],
              new Date(item['date']),
              item['length'],
              item['description'],
              item['isTopRated']
            );
          });
        })
      );
  }

  addCourse(course: CourseModel) {
    const body = {
      id: course.id,
      name: course.title,
      date: course.creationDate,
      length: course.duration,
      description: course.description,
      isTopRated: course.topRated
    };
    return this.http.post('http://localhost:3004/courses', body);
  }

  findCourseById(id: number) {
    return this.http.get('http://localhost:3004/courses/' + id)
      .pipe(
        map(item => {
          return new CourseModel(
            item['id'],
            item['name'],
            new Date(item['date']),
            item['length'],
            item['description'],
            item['isTopRated']
          );
        })
      );
  }

  updateCourse(id: number, course: CourseModel) {
    const body = {
      id: id,
      name: course.title,
      date: course.creationDate,
      length: course.duration,
      description: course.description,
      isTopRated: course.topRated
    };
    return this.http.put('http://localhost:3004/courses/' + id, body);
  }

  removeCourse(id: number) {
    return this.http.delete('http://localhost:3004/courses/' + id);
  }
}
