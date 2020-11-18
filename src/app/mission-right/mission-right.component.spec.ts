import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionRightComponent } from './mission-right.component';

describe('MissionRightComponent', () => {
  let component: MissionRightComponent;
  let fixture: ComponentFixture<MissionRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
