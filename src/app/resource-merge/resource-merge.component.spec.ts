import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceMergeComponent } from './resource-merge.component';

describe('ResourceMergeComponent', () => {
  let component: ResourceMergeComponent;
  let fixture: ComponentFixture<ResourceMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceMergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
