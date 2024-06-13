import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDoctorPanelComponent } from './create-doctor-panel.component';

describe('CreateDoctorPanelComponent', () => {
  let component: CreateDoctorPanelComponent;
  let fixture: ComponentFixture<CreateDoctorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDoctorPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDoctorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
