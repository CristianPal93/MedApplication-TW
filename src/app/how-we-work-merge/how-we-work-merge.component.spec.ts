import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeWorkMergeComponent } from './how-we-work-merge.component';

describe('HowWeWorkMergeComponent', () => {
  let component: HowWeWorkMergeComponent;
  let fixture: ComponentFixture<HowWeWorkMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowWeWorkMergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeWorkMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
