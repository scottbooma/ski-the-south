import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../models/Report';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  @Input() report!: Report;
  more = false;

  constructor(private reportService: ReportService, private router: Router) {}

  expandReport() {
    this.more = !this.more;
  }

  clickEdit() {
    this.reportService.editReport(this.report).subscribe();
    this.router.navigate([`/resort-info/${this.report.label}`]).then(() => {
      window.location.reload();
    });
  }

  clickDelete() {
    this.reportService.deleteReport(this.report.id).subscribe();
    this.router.navigate([`/resort-info/${this.report.label}`]).then(() => {
      window.location.reload();
    });
  }
}
