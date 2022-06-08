import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resort } from './models/Resort';

type ResortsResponse = {
  resorts: Resort[];
};

@Injectable({
  providedIn: 'root',
})
export class ResortsService {
  constructor(private http: HttpClient) {}

  fetchResorts() {
    return this.http.get<ResortsResponse>(`${environment.apiUrl}/resorts`);
  }
}
