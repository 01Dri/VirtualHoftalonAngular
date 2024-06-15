import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatientPanelComponent } from './create-patient-panel.component';

describe('CreatePatientPanelComponent', () => {
  let component: CreatePatientPanelComponent;
  let fixture: ComponentFixture<CreatePatientPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePatientPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePatientPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
