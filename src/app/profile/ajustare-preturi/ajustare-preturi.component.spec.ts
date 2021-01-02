import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustarePreturiComponent } from './ajustare-preturi.component';

describe('AjustarePreturiComponent', () => {
  let component: AjustarePreturiComponent;
  let fixture: ComponentFixture<AjustarePreturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjustarePreturiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustarePreturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
