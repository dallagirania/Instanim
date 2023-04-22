import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBoardingComponent } from './dashboard-boarding.component';

describe('DashboardBoardingComponent', () => {
  let component: DashboardBoardingComponent;
  let fixture: ComponentFixture<DashboardBoardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBoardingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
