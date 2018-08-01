import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './pages/page404/page404.component';

const appRoutes: Routes = [
  { path: 'courses', loadChildren: './pages/courses/courses.module#CoursesModule'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: '**', component: Page404Component }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
