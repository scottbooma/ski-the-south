import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() deleteClick = new EventEmitter();
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
    this.deleteClick.emit(this.report);
  }
}
