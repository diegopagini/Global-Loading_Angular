import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  loading: boolean = false;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loading = true;
    return next.handle(request).pipe(finalize(() => (this.loading = false)));
  }
}
