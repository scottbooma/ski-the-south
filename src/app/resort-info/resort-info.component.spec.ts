import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortInfoComponent } from './resort-info.component';

describe('ResortInfoComponent', () => {
  let component: ResortInfoComponent;
  let fixture: ComponentFixture<ResortInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResortInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
