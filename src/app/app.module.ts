import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from './core/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationService } from './core/shared/services/authorization.service';
import { UsersService } from './pages/login/users.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { Page404Component } from './pages/page404/page404.component';
import { InterceptorService } from './core/shared/services/interceptor.service';
import { authReducer } from './core/shared/reducers/auth.reducer';
import { CoursesEffects } from './core/shared/effects/courses.effects';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    StoreModule.forRoot({
      auth: authReducer,
      router: routerReducer
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    EffectsModule.forRoot([
      CoursesEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AuthorizationService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
