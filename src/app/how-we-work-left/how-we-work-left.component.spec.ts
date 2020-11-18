import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeWorkLeftComponent } from './how-we-work-left.component';

describe('HowWeWorkLeftComponent', () => {
  let component: HowWeWorkLeftComponent;
  let fixture: ComponentFixture<HowWeWorkLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowWeWorkLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeWorkLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
