import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private auth: AuthorizationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.auth.getUserToken()
        }
      });
    }

    return next.handle(req);
  }
}
