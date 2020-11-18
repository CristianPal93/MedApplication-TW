import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusleftComponent } from './aboutusleft.component';

describe('AboutusleftComponent', () => {
  let component: AboutusleftComponent;
  let fixture: ComponentFixture<AboutusleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
