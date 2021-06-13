import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDistributionsComponent } from './my-distributions.component';

describe('MyDistributionsComponent', () => {
  let component: MyDistributionsComponent;
  let fixture: ComponentFixture<MyDistributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDistributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDistributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
