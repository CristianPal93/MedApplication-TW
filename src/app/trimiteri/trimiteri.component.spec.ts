import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimiteriComponent } from './trimiteri.component';

describe('TrimiteriComponent', () => {
  let component: TrimiteriComponent;
  let fixture: ComponentFixture<TrimiteriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrimiteriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimiteriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
