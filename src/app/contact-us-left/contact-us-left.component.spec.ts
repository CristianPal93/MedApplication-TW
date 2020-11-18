import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsLeftComponent } from './contact-us-left.component';

describe('ContactUsLeftComponent', () => {
  let component: ContactUsLeftComponent;
  let fixture: ComponentFixture<ContactUsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
