import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsRightComponent } from './contact-us-right.component';

describe('ContactUsRightComponent', () => {
  let component: ContactUsRightComponent;
  let fixture: ComponentFixture<ContactUsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
