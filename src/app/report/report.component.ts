import { Component, Input } from '@angular/core';
import { Report } from '../models/Report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  @Input() report!: Report;
  @Input() id = 0;
  @Input() name = '';
  @Input() date = '';
  @Input() vibe = 5;
  @Input() description = '';
  @Input() label = '';
  more = false;

  expandReport() {
    this.more = !this.more;
  }

  editReport() {
    console.log(this.report);
  }

  deleteReport() {}
}
