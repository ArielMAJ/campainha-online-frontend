import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastr: ToastrService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    return next.handle(request).pipe(
      retry(1),
      timeout(2000),
      catchError((error) => {
        if (
          error.name === 'TimeoutError' ||
          error.statusText === 'Unknown Error'
        ) {
          this.toastr.error(
            'Tente novamente em alguns minutos.',
            'Servidor indisponível'
          );
        }

        return throwError(() => error);
      })
    );
  }
}
