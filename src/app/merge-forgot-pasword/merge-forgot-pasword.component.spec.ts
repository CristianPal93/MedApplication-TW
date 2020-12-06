import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeForgotPaswordComponent } from './merge-forgot-pasword.component';

describe('MergeForgotPaswordComponent', () => {
  let component: MergeForgotPaswordComponent;
  let fixture: ComponentFixture<MergeForgotPaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeForgotPaswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeForgotPaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
