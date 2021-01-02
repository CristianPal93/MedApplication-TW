import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreareConturiComponent } from './creare-conturi.component';

describe('CreareConturiComponent', () => {
  let component: CreareConturiComponent;
  let fixture: ComponentFixture<CreareConturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreareConturiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreareConturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
