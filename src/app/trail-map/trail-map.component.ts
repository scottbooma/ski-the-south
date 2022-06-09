import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trail-map',
  templateUrl: './trail-map.component.html',
  styleUrls: ['./trail-map.component.css'],
})
export class TrailMapComponent implements OnInit {
  name = 'Cataloochee';
  imageUrl = 'https://skimap.org/data/288/2200/1467926831.jpg';
  constructor() {}

  ngOnInit(): void {}
}
