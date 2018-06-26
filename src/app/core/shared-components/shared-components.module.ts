import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    CommonModule
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
  ]

})
export class SharedComponentsModule { }
