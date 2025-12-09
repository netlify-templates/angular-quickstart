import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownPageComponent } from './town-page.component';

describe('TownPageComponent', () => {
  let component: TownPageComponent;
  let fixture: ComponentFixture<TownPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TownPageComponent]
    });
    fixture = TestBed.createComponent(TownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
