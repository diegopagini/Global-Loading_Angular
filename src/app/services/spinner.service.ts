import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private loader$ = new BehaviorSubject<boolean>(false);

  getLoader(): Observable<boolean> {
    return this.loader$.asObservable();
  }

  setLoader(state: boolean): void {
    this.loader$.next(state);
  }
}
