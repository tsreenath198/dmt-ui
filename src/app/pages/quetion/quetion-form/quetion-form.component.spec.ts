import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuetionFormComponent } from './quetion-form.component';

describe('QuetionFormComponent', () => {
  let component: QuetionFormComponent;
  let fixture: ComponentFixture<QuetionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuetionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuetionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
