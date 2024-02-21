import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboareComponent } from './dashboare.component';

describe('DashboareComponent', () => {
  let component: DashboareComponent;
  let fixture: ComponentFixture<DashboareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
