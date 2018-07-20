import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const LoginRoutes: Routes = [
  { path: '', component: LoginComponent },
];

export const LoginRoutingModule: ModuleWithProviders = RouterModule.forChild(LoginRoutes);
