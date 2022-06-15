import { Component, Input } from '@angular/core';
import { Report } from '../models/Report';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent {
  @Input() reports: Report[] = [];

  constructor(private reportService: ReportService) {}

  deleteReport(report: Report) {
    this.reportService.deleteReport(report.id).subscribe(() => {
      this.reports = this.reports.filter((r) => r.id !== report.id);
    });
  }
}
