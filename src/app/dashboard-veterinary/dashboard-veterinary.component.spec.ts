import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVeterinaryComponent } from './dashboard-veterinary.component';

describe('DashboardVeterinaryComponent', () => {
  let component: DashboardVeterinaryComponent;
  let fixture: ComponentFixture<DashboardVeterinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVeterinaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardVeterinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
