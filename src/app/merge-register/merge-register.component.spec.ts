import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeRegisterComponent } from './merge-register.component';

describe('MergeRegisterComponent', () => {
  let component: MergeRegisterComponent;
  let fixture: ComponentFixture<MergeRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
