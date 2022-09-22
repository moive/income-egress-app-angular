import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeEgressComponent } from './income-egress.component';

describe('IncomeEgressComponent', () => {
  let component: IncomeEgressComponent;
  let fixture: ComponentFixture<IncomeEgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeEgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeEgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
