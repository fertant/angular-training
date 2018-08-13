import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AuthorizationService } from './services/authorization.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  providers: [AuthorizationService]
})
export class SharedModule { }
