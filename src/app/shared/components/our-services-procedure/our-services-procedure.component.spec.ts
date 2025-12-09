import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesProcedureComponent } from './our-services-procedure.component';

describe('OurServicesProcedureComponent', () => {
  let component: OurServicesProcedureComponent;
  let fixture: ComponentFixture<OurServicesProcedureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OurServicesProcedureComponent]
    });
    fixture = TestBed.createComponent(OurServicesProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
