import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultSecretaraComponent } from './consult-secretara.component';

describe('ConsultSecretaraComponent', () => {
  let component: ConsultSecretaraComponent;
  let fixture: ComponentFixture<ConsultSecretaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultSecretaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultSecretaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
