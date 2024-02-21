import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateOneComponent } from './state-one.component';

describe('StateOneComponent', () => {
  let component: StateOneComponent;
  let fixture: ComponentFixture<StateOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
