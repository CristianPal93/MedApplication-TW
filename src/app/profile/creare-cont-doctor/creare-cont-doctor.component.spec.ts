import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreareContDoctorComponent } from './creare-cont-doctor.component';

describe('CreareContDoctorComponent', () => {
  let component: CreareContDoctorComponent;
  let fixture: ComponentFixture<CreareContDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreareContDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreareContDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
