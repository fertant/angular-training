import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';

const CoursesRoutes: Routes = [
  { path: 'courses', component: CoursesComponent },
];

export const CoursesRouting: ModuleWithProviders = RouterModule.forRoot(CoursesRoutes);
