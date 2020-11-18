import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamRightComponent } from './our-team-right.component';

describe('OurTeamRightComponent', () => {
  let component: OurTeamRightComponent;
  let fixture: ComponentFixture<OurTeamRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTeamRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
