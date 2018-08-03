import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { DynamicFormElementComponent } from './dynamic-form-element.component';

describe('DynamicFormElementComponent', () => {
  let component: DynamicFormElementComponent;
  let fixture: ComponentFixture<DynamicFormElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        AngularMultiSelectModule
      ],
      declarations: [ DynamicFormElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (done) => {
    done();
    expect(component).toBeTruthy();
  });
});
