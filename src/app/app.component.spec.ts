import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthorizationService } from './core/shared/services/authorization.service';
import { RouterTestingModule } from '@angular/router/testing';

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({selector: 'app-breadcrumb', template: ''})
class BreadcrumbStubComponent {}

// tslint:disable-next-line
@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent {}

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        AppComponent,
        HeaderStubComponent,
        BreadcrumbStubComponent,
        FooterStubComponent,
        RouterOutletStubComponent
      ],
      providers: [ AuthorizationService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
