import { Component, Input } from '@angular/core';
import { Resort } from '../models/Resort';

@Component({
  selector: 'app-resort-listing',
  templateUrl: './resort-listing.component.html',
  styleUrls: ['./resort-listing.component.css'],
})
export class ResortListingComponent {
  @Input() name!: string;
  @Input() location!: string;
  @Input() imageUrl!: string;
}
