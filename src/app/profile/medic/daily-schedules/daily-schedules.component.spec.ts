import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySchedulesComponent } from './daily-schedules.component';

describe('DailySchedulesComponent', () => {
  let component: DailySchedulesComponent;
  let fixture: ComponentFixture<DailySchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailySchedulesComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
