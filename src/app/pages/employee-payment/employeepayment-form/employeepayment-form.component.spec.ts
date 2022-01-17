import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepaymentFormComponent } from './employeepayment-form.component';

describe('EmployeepaymentFormComponent', () => {
  let component: EmployeepaymentFormComponent;
  let fixture: ComponentFixture<EmployeepaymentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeepaymentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeepaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
