import { Component, OnInit } from '@angular/core';
import { Resort } from '../models/Resort';
import { ResortsService } from '../resorts.service';

@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css'],
})
export class ResortListComponent implements OnInit {
  resortList: Resort[] = [];

  constructor(private resortsService: ResortsService) {}

  ngOnInit() {
    this.resortsService.fetchResorts().subscribe((response) => {
      this.resortList = response.resorts;
    });
  }
}
