import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CourseComponent } from './course.component';
import { CourseModel } from '../../model/course';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let courseStub: CourseModel;
  let courseDe: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    // mock the course supplied by the parent component
    courseStub = {
      id: 1,
      title: 'Test title',
      creationDate: new Date(),
      duration: 10,
      description: 'Test desciption'
    };
    component.course = courseStub;

    courseDe = fixture.debugElement.query(By.css('.cancel-course'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise selected event when clicked cancel (triggerEventHandler)', () => {
    let selectedCourse: number;
    component.cancel.subscribe((id: number) => selectedCourse = id);

    courseDe.triggerEventHandler('click', null);
    expect(selectedCourse).toEqual(courseStub.id);
  });
});
