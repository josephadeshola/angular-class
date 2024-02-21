import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourchildComponent } from './behaviourchild.component';

describe('BehaviourchildComponent', () => {
  let component: BehaviourchildComponent;
  let fixture: ComponentFixture<BehaviourchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviourchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
