import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeLoginComponent } from './merge-login.component';

describe('MergeLoginComponent', () => {
  let component: MergeLoginComponent;
  let fixture: ComponentFixture<MergeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
