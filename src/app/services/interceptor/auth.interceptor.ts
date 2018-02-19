import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Endpoints } from '../../constant/endpoints.constant';
import { AuthConstants } from '../../constant/auth.constant';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (Endpoints.isSecured(req.url)) {
      req = req.clone({
        setHeaders: {
          'Authorization': localStorage.getItem(AuthConstants.AUTH_TOKEN_NAME),
        },
        withCredentials: true
      });
    }

    return next.handle(req);
  }

}
