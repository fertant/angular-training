import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    next.handle(req).do(event => {}, err => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        return Observable.throwError('Unauthorized');
      }
    });
  }
}
