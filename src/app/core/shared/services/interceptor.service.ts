import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

import { AuthorizationService } from './authorization.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(
    private auth: AuthorizationService,
    private spinner: NgxSpinnerService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.auth.getUserToken()
        }
      });
    }
    return next.handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.spinner.hide();
          }
        }, error => {
          this.spinner.hide();
        })
      );
  }
}
