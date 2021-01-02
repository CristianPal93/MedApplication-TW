import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezultatePacientComponent } from './rezultate-pacient.component';

describe('RezultatePacientComponent', () => {
  let component: RezultatePacientComponent;
  let fixture: ComponentFixture<RezultatePacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezultatePacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezultatePacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
