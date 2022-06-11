import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resort-links',
  templateUrl: './resort-links.component.html',
  styleUrls: ['./resort-links.component.css'],
})
export class ResortLinksComponent {
  @Input() snowReportUrl = '';
  @Input() webcamsUrl = '';
  @Input() weatherUrl = '';
  @Input() liftTicketsUrl = '';
  @Input() rentalsUrl = '';
}
