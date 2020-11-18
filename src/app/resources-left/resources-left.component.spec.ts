import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesLeftComponent } from './resources-left.component';

describe('ResourcesLeftComponent', () => {
  let component: ResourcesLeftComponent;
  let fixture: ComponentFixture<ResourcesLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
