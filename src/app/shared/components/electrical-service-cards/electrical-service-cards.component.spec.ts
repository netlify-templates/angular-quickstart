import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalServiceCardsComponent } from './electrical-service-cards.component';

describe('ElectricalServiceCardsComponent', () => {
  let component: ElectricalServiceCardsComponent;
  let fixture: ComponentFixture<ElectricalServiceCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ElectricalServiceCardsComponent]
    });
    fixture = TestBed.createComponent(ElectricalServiceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
