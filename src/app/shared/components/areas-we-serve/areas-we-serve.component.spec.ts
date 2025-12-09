import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasWeServeComponent } from './areas-we-serve.component';

describe('AreasWeServeComponent', () => {
  let component: AreasWeServeComponent;
  let fixture: ComponentFixture<AreasWeServeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AreasWeServeComponent]
    });
    fixture = TestBed.createComponent(AreasWeServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
