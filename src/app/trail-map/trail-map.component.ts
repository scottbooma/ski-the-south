import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResortsService } from '../services/resorts.service';
import { TrailMapService } from '../services/trail-map.service';

@Component({
  selector: 'app-trail-map',
  templateUrl: './trail-map.component.html',
  styleUrls: ['./trail-map.component.css'],
})
export class TrailMapComponent implements OnInit {
  name = '';
  imageUrl = '';
  constructor(
    private trailMapService: TrailMapService,
    private route: ActivatedRoute,
    private resortsService: ResortsService
  ) {}

  ngOnInit() {
    this.trailMapService
      .getResortMap(this.route.snapshot.params['resort'])
      .subscribe((skiMapList) => {
        this.imageUrl = skiMapList![0].media.original.url;
      });

    this.resortsService
      .getResortInfo(this.route.snapshot.params['resort'])
      .subscribe((resort) => (this.name = resort!.name));
  }
}
