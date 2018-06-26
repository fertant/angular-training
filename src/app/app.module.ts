import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routing } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CoursesModule } from './pages/courses/courses.module';
import { SharedComponentsModule } from './core/shared-components/shared-components.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    SharedComponentsModule,
    Routing,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
