import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdhildComponent } from './eventdhild.component';

describe('EventdhildComponent', () => {
  let component: EventdhildComponent;
  let fixture: ComponentFixture<EventdhildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventdhildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventdhildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
