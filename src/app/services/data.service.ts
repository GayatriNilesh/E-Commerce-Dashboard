import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }
  private input = new BehaviorSubject<string>('');
  searchiInputObs = this.input.asObservable();

  fetchProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  searchData(input: string) {
    this.input.next(input)
  }
}
