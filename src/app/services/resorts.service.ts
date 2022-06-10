import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResortsResponse } from '../models/ResortsResponse';

@Injectable({
  providedIn: 'root',
})
export class ResortsService {
  constructor(private http: HttpClient) {}

  fetchResorts() {
    return this.http.get<ResortsResponse>(`${environment.apiUrl}/resorts`);
  }
}
