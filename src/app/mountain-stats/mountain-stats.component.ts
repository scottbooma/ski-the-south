import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mountain-stats',
  templateUrl: './mountain-stats.component.html',
  styleUrls: ['./mountain-stats.component.css'],
})
export class MountainStatsComponent implements OnInit {
  location = 'Maggie Valley, NC';
  elevation = "5,400'";
  vertical = "740'";
  acres = 50;
  trails = 18;
  lifts = 5;

  constructor() {}

  ngOnInit(): void {}
}
