import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { CoursesService } from './courses.service';
import { CourseModel } from '../model/course';

describe('CoursesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let coursesStub: Array<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CoursesService ]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    coursesStub = [
      {
        id: 8693,
        name: 'duis mollit reprehenderit ad',
        description: 'Est minim ea aute sunt laborum minim eu excepteur.',
        isTopRated: false,
        date: '2017-09-28T04:39:24+00:00',
        authors: [
          {
            id: 1370,
            firstName: 'Polly',
            lastName: 'Sosa'
          }
        ],
        length: 157
      },
      {
        name: 'duis mollit reprehenderit ad 23',
        description: 'Est minim ea aute sunt laborum minim eu excepteur.',
        isTopRated: false,
        date: '2018-08-23T12:03:25.000Z',
        authors: [
          {
            id: 1370,
            firstName: 'Polly',
            lastName: 'Sosa'
          }
        ],
        length: 157,
        id: 9818
      },
      {
        name: 'duis mollit reprehenderit ad 1235',
        description: 'vbdfjklmcl;',
        isTopRated: false,
        date: '2017-08-10T04:39:24+00:00',
        length: 157,
        id: 9819
      }
    ];
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  it('should 3 courses', inject([CoursesService], (service: CoursesService) => {
    const courseData = new CourseModel(
      8693,
      'duis mollit reprehenderit ad',
      new Date('2017-09-28T04:39:24+00:00'),
      157,
      'Est minim ea aute sunt laborum minim eu excepteur.',
      false
    );
    service.getCourses()
      .subscribe(data => {
        expect(data.length).toEqual(3);
        expect(data[0].duration).toEqual(courseData.duration);
      });
    const req = httpTestingController.expectOne('http://localhost:3004/courses?start=0&count=3');
    req.flush(coursesStub);
    httpTestingController.verify();
  }));

  it('should find 1 course', inject([CoursesService], (service: CoursesService) => {
    const courseData = new CourseModel(
      8693,
      'duis mollit reprehenderit ad',
      new Date('2017-09-28T04:39:24+00:00'),
      157,
      'Est minim ea aute sunt laborum minim eu excepteur.',
      false
    );
    service.findCourseById(8693)
      .subscribe(data => {
        expect(data.id).toEqual(8693);
      });
    const req = httpTestingController.expectOne('http://localhost:3004/courses/8693');
    req.flush(coursesStub[0]);
    httpTestingController.verify();
  }));

  afterEach(() => {
    httpTestingController.verify();
  });
});
