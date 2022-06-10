import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mountain-stats',
  templateUrl: './mountain-stats.component.html',
  styleUrls: ['./mountain-stats.component.css'],
})
export class MountainStatsComponent {
  @Input() location = '';
  @Input() elevation = '';
  @Input() vertical = '';
  @Input() acres = 0;
  @Input() trails = 0;
  @Input() lifts = 0;
}
