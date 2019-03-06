import { ConstantsProvider } from './constants/constants';
import { Events, NavController, App } from 'ionic-angular';
import { UserProvider } from './user/user';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class SecureHttpInterceptor implements HttpInterceptor {

  user: UserProvider;
  constructor(
    private inj: Injector,
    private events: Events,
    public constants: ConstantsProvider
  ) {
    setTimeout(() => {
      this.user = inj.get(UserProvider);
      console.log(this.user);
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    console.log(this.user);
    if (!this.user) {
      this.user = this.inj.get(UserProvider);
      console.log(this.user);
    }

    // IF TOKEN
    if (this.user.userData) {
      req = req.clone({
        setHeaders: {
          token: this.user.userData.token,
        }
      });
    }


    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // update the response
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 0) {
          // Connection failed to server
        } else if (err.status === 401) {
          // Un-authorized
          this.events.publish("user:unauthorizeLogout");
          // return Observable.empty();
        } else if ([404, 500].indexOf(err.status) != -1) {
          if (err.error) {
            err.error.message = this.constants.ERRORS.OOPS;
          }
          else {
            err['error' as any] = { message: this.constants.ERRORS.OOPS };
          }

          // Internal server error/Page not found, show something like oops something went wrong for user friendly behavior
        }
      }
    });

  }



}
