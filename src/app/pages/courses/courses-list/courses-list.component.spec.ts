import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core';
import { CoursesListComponent } from './courses-list.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseModel } from '../model/course';
import { CoursesService } from './courses.service';
import { HttpClientModule } from '@angular/common/http';

@Component({selector: 'app-course', template: ''})
class CourseStubComponent {
  @Input() course: CourseModel;
  @Output() cancel = new EventEmitter<number>();
}

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesStubPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value;
  }
}

@Pipe({
  name: 'orderBy'
})
export class OrderByCoursesStubPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value;
  }
}

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [
        CoursesListComponent,
        CourseStubComponent,
        OrderByCoursesStubPipe,
        FilterCoursesStubPipe
      ],
      providers: [ CoursesService ],
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
});
