import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesRightComponent } from './resources-right.component';

describe('ResourcesRightComponent', () => {
  let component: ResourcesRightComponent;
  let fixture: ComponentFixture<ResourcesRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
