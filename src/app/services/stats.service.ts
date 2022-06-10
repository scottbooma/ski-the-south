import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  location = 'Maggie Valley, NC';
  elevation = "5,400'";
  vertical = "740'";
  acres = 50;
  trails = 18;
  lifts = 5;
  constructor() {}
}
