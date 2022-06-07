import { Injectable } from '@angular/core';
import { Resort } from './models/Resort';

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
}
