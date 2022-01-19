import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportinteractionFormComponent } from './supportinteraction-form.component';

describe('SupportinteractionFormComponent', () => {
  let component: SupportinteractionFormComponent;
  let fixture: ComponentFixture<SupportinteractionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportinteractionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportinteractionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
