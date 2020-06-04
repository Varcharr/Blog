///////////////////////////
// Poglavlje 3.11 - Servisi
//////////////////////////
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInteceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 401) return throwError(err.statusText);
          const applicationError = err.headers.get("Application-Error");
          if (applicationError) return throwError(applicationError);

          const serverError = err.error;
          let modalStateErrors = "";

          if (serverError && typeof serverError === "object")
            for (const key in serverError) {
              if (serverError[key]) modalStateErrors += serverError[key] + "\n";
            }
          return throwError(modalStateErrors || serverError || "Server Error");
        }
      })
    );
  }
}

export const ErrorInteceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInteceptor,
  multi: true,
};
