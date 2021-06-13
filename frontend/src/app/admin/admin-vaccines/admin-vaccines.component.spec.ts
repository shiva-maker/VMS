import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVaccinesComponent } from './admin-vaccines.component';

describe('AdminVaccinesComponent', () => {
  let component: AdminVaccinesComponent;
  let fixture: ComponentFixture<AdminVaccinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVaccinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
