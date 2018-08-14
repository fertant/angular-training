import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgxSpinnerModule } from 'ngx-spinner';

import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesListModule } from './courses-list/courses-list.module';
import { CoursesComponent } from './courses.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import { DynamicFormComponent } from './form-elements/dynamic-form/dynamic-form.component';
import { DynamicFormElementComponent } from './form-elements/dynamic-form-element/dynamic-form-element.component';
import { AuthorizationService } from '../../core/shared/services/authorization.service';

@NgModule({
  imports: [
    CommonModule,
    CoursesListModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AngularMultiSelectModule,
    NgxSpinnerModule
  ],
  declarations: [
    CoursesComponent,
    SearchComponent,
    LoaderComponent,
    EditCoursesComponent,
    DynamicFormComponent,
    DynamicFormElementComponent
  ],
  exports: [
    CoursesComponent
  ],
  providers: [AuthorizationService],
})
export class CoursesModule { }
