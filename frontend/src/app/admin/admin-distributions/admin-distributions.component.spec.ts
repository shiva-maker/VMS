import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDistributionsComponent } from './admin-distributions.component';

describe('AdminDistributionsComponent', () => {
  let component: AdminDistributionsComponent;
  let fixture: ComponentFixture<AdminDistributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDistributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDistributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
