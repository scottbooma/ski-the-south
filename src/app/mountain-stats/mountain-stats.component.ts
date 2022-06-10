import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-mountain-stats',
  templateUrl: './mountain-stats.component.html',
  styleUrls: ['./mountain-stats.component.css'],
})
export class MountainStatsComponent implements OnInit {
  location = '';
  elevation = '';
  vertical = '';
  acres = 0;
  trails = 0;
  lifts = 0;

  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.location = this.statsService.location;
    this.elevation = this.statsService.elevation;
    this.vertical = this.statsService.vertical;
    this.acres = this.statsService.acres;
    this.trails = this.statsService.trails;
    this.lifts = this.statsService.lifts;
  }
}
