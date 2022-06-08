import { Component, OnInit } from '@angular/core';
import { Resort } from './models/Resort';
import { ResortsService } from './resorts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  resortList: Resort[] = [];

  constructor(private resortsService: ResortsService) {}

  ngOnInit() {
    this.resortsService.fetchResorts().subscribe((response) => {
      this.resortList = response.resorts;
    });
  }
}
