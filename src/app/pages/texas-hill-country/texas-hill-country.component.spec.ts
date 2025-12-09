import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexasHillCountryComponent } from './texas-hill-country.component';

describe('TexasHillCountryComponent', () => {
  let component: TexasHillCountryComponent;
  let fixture: ComponentFixture<TexasHillCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TexasHillCountryComponent]
    });
    fixture = TestBed.createComponent(TexasHillCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
