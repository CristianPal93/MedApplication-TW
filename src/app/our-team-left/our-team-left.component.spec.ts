import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamLeftComponent } from './our-team-left.component';

describe('OurTeamLeftComponent', () => {
  let component: OurTeamLeftComponent;
  let fixture: ComponentFixture<OurTeamLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTeamLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
