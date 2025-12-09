import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownDealComponent } from './count-down-deal.component';

describe('CountDownDealComponent', () => {
  let component: CountDownDealComponent;
  let fixture: ComponentFixture<CountDownDealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CountDownDealComponent]
    });
    fixture = TestBed.createComponent(CountDownDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
