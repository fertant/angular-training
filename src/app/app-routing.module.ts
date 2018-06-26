import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'courses', loadChildren: './pages/courses/courses.module#CoursesModule' },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
