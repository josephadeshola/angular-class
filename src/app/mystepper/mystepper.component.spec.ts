import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystepperComponent } from './mystepper.component';

describe('MystepperComponent', () => {
  let component: MystepperComponent;
  let fixture: ComponentFixture<MystepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MystepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MystepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
