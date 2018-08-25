import { Injectable } from '@angular/core';
import { CourseModel } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursesService {

  courses: Array<CourseModel>;
  page: number;
  searchQuery: string;

  constructor(private http: HttpClient) {
    this.page = 0;
  }

  getCurrentPage() {
    return this.page;
  }

  setCurrentPage(page: number) {
    this.page = page;
  }

  getSearchQuery() {
    return this.searchQuery;
  }

  setSearchQuery(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  getCourses(offset?: number, limit?: number, search?: string) {
    offset = offset ? offset : 0;
    limit = limit ? limit : 3;
    const url = 'http://localhost:3004/courses?';
    const attr = [
      `start=${offset}`,
      `count=${limit}`
    ];
    if (search) {
      attr.push(`textFragment=${search}`);
    }

    return this.http.get(url + attr.join('&'))
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
            item['isTopRated'],
            item['authors'].map(author => {
              return {
                ...author,
                itemName: `${author['firstName']} ${author['lastName']}`
              };
            })
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

  getAuthorsList() {
    return this.http.get('http://localhost:3004/authors/');
  }
}
