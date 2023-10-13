import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentScansComponent } from './investment-scans.component';

describe('InvestmentScansComponent', () => {
  let component: InvestmentScansComponent;
  let fixture: ComponentFixture<InvestmentScansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentScansComponent]
    });
    fixture = TestBed.createComponent(InvestmentScansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
