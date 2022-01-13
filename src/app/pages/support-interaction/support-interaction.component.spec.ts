import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportInteractionComponent } from './support-interaction.component';

describe('SupportInteractionComponent', () => {
  let component: SupportInteractionComponent;
  let fixture: ComponentFixture<SupportInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
