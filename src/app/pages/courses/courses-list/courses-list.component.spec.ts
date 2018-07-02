import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListComponent } from './courses-list.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseModel } from '../model/course';

@Component({selector: 'app-course', template: ''})
class CourseStubComponent {
  @Input() course: CourseModel;
  @Output() cancel = new EventEmitter<number>();
}

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        CourseStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise selected course when event cancel trigger (triggerEventHandler)', () => {
    component.onCancel(component.courses[1].id);
    expect(component.canceledCourse).toEqual(1);
  });
});
