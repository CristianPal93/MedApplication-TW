import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMergeComponent } from './home-merge.component';

describe('HomeMergeComponent', () => {
  let component: HomeMergeComponent;
  let fixture: ComponentFixture<HomeMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
