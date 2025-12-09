import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedSummaryComponent } from './trusted-summary.component';

describe('TrustedSummaryComponent', () => {
  let component: TrustedSummaryComponent;
  let fixture: ComponentFixture<TrustedSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrustedSummaryComponent]
    });
    fixture = TestBed.createComponent(TrustedSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
