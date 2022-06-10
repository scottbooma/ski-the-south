import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainStatsComponent } from './mountain-stats.component';

describe('MountainStatsComponent', () => {
  let component: MountainStatsComponent;
  let fixture: ComponentFixture<MountainStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
