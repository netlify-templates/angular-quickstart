import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSectionComponent } from './footer-section.component';

describe('FooterSectionComponent', () => {
  let component: FooterSectionComponent;
  let fixture: ComponentFixture<FooterSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooterSectionComponent]
    });
    fixture = TestBed.createComponent(FooterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
