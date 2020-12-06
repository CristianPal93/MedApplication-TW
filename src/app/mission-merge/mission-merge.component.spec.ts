import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionMergeComponent } from './mission-merge.component';

describe('MissionMergeComponent', () => {
  let component: MissionMergeComponent;
  let fixture: ComponentFixture<MissionMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionMergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
