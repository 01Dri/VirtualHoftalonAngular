import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPatientComponent } from './consult-patient.component';

describe('ConsultPatientComponent', () => {
  let component: ConsultPatientComponent;
  let fixture: ComponentFixture<ConsultPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
