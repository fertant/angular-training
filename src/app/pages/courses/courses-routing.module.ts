import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import { AuthorizationService } from '../../core/shared/services/authorization.service';

const CoursesRoutes: Routes = [
  { path: '', component: CoursesComponent, canActivate: [AuthorizationService] },
  { path: 'add-course', component: EditCoursesComponent, canActivate: [AuthorizationService], data: {breadcrumb: 'Add Course'} },
  { path: 'edit-course/:id', component: EditCoursesComponent, canActivate: [AuthorizationService], data: {breadcrumb: 'Edit Course'} },

const CoursesRoutes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'add-course', component: EditCoursesComponent },
  { path: 'edit-course/:id', component: EditCoursesComponent },
];

export const CoursesRoutingModule: ModuleWithProviders = RouterModule.forChild(CoursesRoutes);
