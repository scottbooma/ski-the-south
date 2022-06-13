import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResortListingComponent } from './resort-listing/resort-listing.component';
import { ResortListComponent } from './resort-list/resort-list.component';
import { ResortInfoComponent } from './resort-info/resort-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrailMapComponent } from './trail-map/trail-map.component';
import { MountainStatsComponent } from './mountain-stats/mountain-stats.component';
import { ResortLinksComponent } from './resort-links/resort-links.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportComponent } from './report/report.component';
import { TripReportsComponent } from './trip-reports/trip-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    ResortListingComponent,
    ResortListComponent,
    ResortInfoComponent,
    PageNotFoundComponent,
    TrailMapComponent,
    MountainStatsComponent,
    ResortLinksComponent,
    BackButtonComponent,
    ReportListComponent,
    ReportComponent,
    TripReportsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
