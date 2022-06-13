import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  @Input() name = '';
  @Input() date = '';
  @Input() vibe = 5;
  @Input() description = '';
}
