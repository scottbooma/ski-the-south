import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResortListingComponent } from './resort-listing/resort-listing.component';
import { ResortListComponent } from './resort-list/resort-list.component';
import { ResortInfoComponent } from './resort-info/resort-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ResortListingComponent,
    ResortListComponent,
    ResortInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
