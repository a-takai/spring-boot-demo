import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'http:/localhost:8080/api/data';

  constructor(
    private http: HttpClient
  ) {}

  public getString(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }
}
