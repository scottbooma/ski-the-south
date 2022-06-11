import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortLinksComponent } from './resort-links.component';

describe('ResortLinksComponent', () => {
  let component: ResortLinksComponent;
  let fixture: ComponentFixture<ResortLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResortLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
