import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resort } from './models/Resort';

type ResortsResponse = {
  resorts: Resort[];
};

const resortsEndpoint = `${environment.apiUrl}/resorts`;

@Injectable({
  providedIn: 'root',
})
export class ResortsService {
  resortList: Resort[] = [
    {
      name: 'Cataloochee Ski Area',
      location: 'Maggie Valley, NC',
      imageUrl: 'cataloochee-logo.png',
    },
    {
      name: 'Beech Mountain Resort',
      location: 'Beech Mountain, NC',
      imageUrl: 'beech-logo.png',
    },
    {
      name: 'Sugar Mountain Resort',
      location: 'Banner Elk, NC',
      imageUrl: 'sugar-logo.png',
    },
  ];

  constructor(private http: HttpClient) {}

  fetchResorts() {
    return this.http.get<ResortsResponse>(resortsEndpoint);
  }
}
