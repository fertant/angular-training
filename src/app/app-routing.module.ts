import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'courses', loadChildren: './pages/courses/courses.module#CoursesModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: '', pathMatch: 'full', redirectTo: 'courses' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
