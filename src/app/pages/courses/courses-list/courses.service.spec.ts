import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { CourseModel } from '../model/course';

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  it('should 3 courses', inject([CoursesService], (service: CoursesService) => {
    expect(service.getCourses().length).toBe(3, 'Courses should be 3');
  }));

  it('should find 1 course', inject([CoursesService], (service: CoursesService) => {
    const courses = service.getCourses();
    const course1 = service.findCourseById(0);
    expect(course1).toEqual(courses[0]);
    const course2 = service.findCourseById(10);
    expect(course2).toEqual(undefined);
  }));

  it('should add 1 course', inject([CoursesService], (service: CoursesService) => {
    service.addCourse(new CourseModel());
    expect(service.getCourses().length).toBe(4, 'Courses should be 4');
  }));

  it('should remove 1 course', inject([CoursesService], (service: CoursesService) => {
    service.removeCourse(0);
    expect(service.getCourses().length).toBe(2, 'Courses should be 2');
  }));

});
