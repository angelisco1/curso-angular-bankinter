import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'GET') {
      return next.handle(request)
    }
    const token = Math.random().toString().slice(2)
    const newHeaders = request.headers.append('Authorization', token)
    const newRequest = request.clone({ headers: newHeaders,  })

    return next.handle(newRequest)
  }
}
