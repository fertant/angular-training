import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';

const CoursesRoutes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'add-course', component: EditCoursesComponent },
  { path: 'edit-course/:id', component: EditCoursesComponent },
];

export const CoursesRoutingModule: ModuleWithProviders = RouterModule.forChild(CoursesRoutes);
