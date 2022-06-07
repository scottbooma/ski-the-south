import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortListingComponent } from './resort-listing.component';

describe('ResortListingComponent', () => {
  let component: ResortListingComponent;
  let fixture: ComponentFixture<ResortListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResortListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
