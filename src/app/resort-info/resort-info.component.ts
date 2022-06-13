import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResortsService } from '../services/resorts.service';

@Component({
  selector: 'app-resort-info',
  templateUrl: './resort-info.component.html',
  styleUrls: ['./resort-info.component.css'],
})
export class ResortInfoComponent implements OnInit {
  name = '';
  location = '';
  elevation = '';
  vertical = '';
  acres = 0;
  trails = 0;
  lifts = 0;
  snowReportUrl = '';
  webcamsUrl = '';
  weatherUrl = '';
  liftTicketsUrl = '';
  rentalsUrl = '';

  constructor(
    private resortsService: ResortsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.resortsService
      .getResortInfo(this.route.snapshot.params['resort'])
      .subscribe((resort) => {
        this.name = resort!.name;
        this.location = resort!.location;
        this.elevation = resort!.elevation;
        this.vertical = resort!.vertical;
        this.acres = resort!.acres;
        this.trails = resort!.trails;
        this.lifts = resort!.lifts;
        this.snowReportUrl = resort!.snowReportUrl;
        this.webcamsUrl = resort!.webcamsUrl;
        this.weatherUrl = resort!.weatherUrl;
        this.liftTicketsUrl = resort!.liftTicketsUrl;
        this.rentalsUrl = resort!.rentalsUrl;
      });
  }
}
