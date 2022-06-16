import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Report } from '../models/Report';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent {
  @Input() reports: Report[] = [];
  @Output() eventPasser = new EventEmitter();

  constructor(private reportService: ReportService) {}

  // deleteReport(report: Report) {
  //   this.reportService.deleteReport(report.id).subscribe(() => {
  //     this.reports = this.reports.filter((r) => r.id !== report.id);
  //   });
  // }

  passEvent(event: Report) {
    this.eventPasser.emit(event);
  }
}
