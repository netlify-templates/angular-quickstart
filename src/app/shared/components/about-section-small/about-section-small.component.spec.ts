import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionSmallComponent } from './about-section-small.component';

describe('AboutSectionSmallComponent', () => {
  let component: AboutSectionSmallComponent;
  let fixture: ComponentFixture<AboutSectionSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AboutSectionSmallComponent]
    });
    fixture = TestBed.createComponent(AboutSectionSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
