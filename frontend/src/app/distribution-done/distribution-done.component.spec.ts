import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionDoneComponent } from './distribution-done.component';

describe('DistributionDoneComponent', () => {
  let component: DistributionDoneComponent;
  let fixture: ComponentFixture<DistributionDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributionDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
