import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionLeftComponent } from './mission-left.component';

describe('MissionLeftComponent', () => {
  let component: MissionLeftComponent;
  let fixture: ComponentFixture<MissionLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
