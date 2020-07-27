import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SimpleInterceptorService implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler) {
		console.log('request', req);
		return next.handle(req).pipe(tap(ev => {
			console.log('response', ev)
		}));
	}
}