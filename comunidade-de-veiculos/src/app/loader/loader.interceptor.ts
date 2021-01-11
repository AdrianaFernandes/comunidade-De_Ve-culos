import { LoaderService } from './loader.service';
import { LoaderComponent } from './loader.component';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.loaderService.show();

      return next.handle(req).pipe(finalize(() => this.loaderService.hide()));
    }
  }
}
