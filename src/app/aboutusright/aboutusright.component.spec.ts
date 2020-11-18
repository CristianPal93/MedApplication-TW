import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusrightComponent } from './aboutusright.component';

describe('AboutusrightComponent', () => {
  let component: AboutusrightComponent;
  let fixture: ComponentFixture<AboutusrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
