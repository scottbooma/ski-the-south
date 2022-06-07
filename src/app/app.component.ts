import { Component } from '@angular/core';
import { Resort } from './models/Resort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
