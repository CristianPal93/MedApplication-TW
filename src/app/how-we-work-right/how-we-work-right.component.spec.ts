import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeWorkRightComponent } from './how-we-work-right.component';

describe('HowWeWorkRightComponent', () => {
  let component: HowWeWorkRightComponent;
  let fixture: ComponentFixture<HowWeWorkRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowWeWorkRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeWorkRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
