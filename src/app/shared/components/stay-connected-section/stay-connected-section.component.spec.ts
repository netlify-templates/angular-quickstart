import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayConnectedSectionComponent } from './stay-connected-section.component';

describe('StayConnectedSectionComponent', () => {
  let component: StayConnectedSectionComponent;
  let fixture: ComponentFixture<StayConnectedSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StayConnectedSectionComponent]
    });
    fixture = TestBed.createComponent(StayConnectedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
