import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';

const CoursesRoutes: Routes = [
  { path: '', component: CoursesComponent },
];

export const CoursesRoutingModule: ModuleWithProviders = RouterModule.forChild(CoursesRoutes);
