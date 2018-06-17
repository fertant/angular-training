import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from './courses/courses-list.component';

const appRoutes: Routes = [
	{ path: 'courses', component: CoursesListComponent },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
