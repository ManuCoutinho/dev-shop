import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { share, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   private cache: Map<HttpRequest<any>, HttpResponse<any>> = new Map();


  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>>{
    if(req.method !== "GET") {
      return next.handle(req);
    }
    if(req.headers.get('reset')){
      console.log('deletou cache')
      this.cache.delete(req);
    }

    const cachedResponse: HttpResponse<T>|undefined = this.cache.get(req);
    console.log(cachedResponse)

    if(cachedResponse) {
      return of(cachedResponse.clone())
    }else {
      return next.handle(req).pipe(
        tap((stateEvent) => {
          if(stateEvent instanceof HttpResponse){
            this.cache.set(req, stateEvent.clone());
            console.log(this.cache)
          }
        })
      ).pipe(share())
    }
  }
}
