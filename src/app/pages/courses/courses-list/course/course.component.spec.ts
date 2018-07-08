import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import { CourseComponent } from './course.component';
import { CourseModel } from '../../model/course';
import { FreshCourseDirective } from '../directives/fresh-course.directive';

@Pipe({
  name: 'durationForming'
})
export class DurationFormingStubPipe implements PipeTransform {
  transform(value: any): any {
    return value;
  }
}

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let courseStub: CourseModel;
  let courseDe: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        DurationFormingStubPipe,
        FreshCourseDirective
      ]
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
      description: 'Test desciption',
      topRated: true,
    };
    const currentTime = courseStub.creationDate.getTime();
    courseStub.creationDate.setTime(currentTime - 1000);
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

  it('should have green border', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('.row');
    const borderColor = div.style.borderColor;
    expect(borderColor).toBe('green');
  });
});
