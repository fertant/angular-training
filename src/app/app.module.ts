import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app-routing.module';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CoursesListComponent } from './courses/courses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
		HeaderComponent,
		CoursesListComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
