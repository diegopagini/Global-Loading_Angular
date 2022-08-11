import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  constructor(private http: HttpClient, private router: Router) {}

  getStarWarsPeople(): Observable<any> {
    this.router.navigate(['/page']);
    return this.http.get('https://swapi.dev/api/people?page=1');
  }
}
