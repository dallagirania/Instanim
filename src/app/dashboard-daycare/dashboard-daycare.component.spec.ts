import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDaycareComponent } from './dashboard-daycare.component';

describe('DashboardDaycareComponent', () => {
  let component: DashboardDaycareComponent;
  let fixture: ComponentFixture<DashboardDaycareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDaycareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDaycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
