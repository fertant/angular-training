import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { Component } from '@angular/core';

@Component({selector: 'app-search', template: ''})
class SearchStubComponent {}

@Component({selector: 'app-courses-list', template: ''})
class CoursesListStubComponent {}

@Component({selector: 'app-loader', template: ''})
class LoaderStubComponent {}

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        SearchStubComponent,
        CoursesListStubComponent,
        LoaderStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
