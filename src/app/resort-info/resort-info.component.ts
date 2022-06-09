import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resort-info',
  templateUrl: './resort-info.component.html',
  styleUrls: ['./resort-info.component.css'],
})
export class ResortInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
