import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from '../models/Report';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-trip-reports',
  templateUrl: './trip-reports.component.html',
  styleUrls: ['./trip-reports.component.css'],
})
export class TripReportsComponent implements OnInit {
  reports: Report[] = [];

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reportService.getReports().subscribe((reports) => {
      this.reports = reports.resorts
        .filter(
          (report) => report.label == this.route.snapshot.params['resort']
        )
        .sort((a, b) => (a.date < b.date ? 1 : -1));
    });
  }

  addReport(newReport: Report) {
    newReport.label = this.route.snapshot.params['resort'];
    this.reportService.addReport(newReport).subscribe((response) => {
      this.reports = [response.report, ...this.reports];
    });
  }
}
