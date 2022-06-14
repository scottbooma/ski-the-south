import { Component, Input } from '@angular/core';
import { Report } from '../models/Report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent {
  @Input() reports: Report[] = [];
}
