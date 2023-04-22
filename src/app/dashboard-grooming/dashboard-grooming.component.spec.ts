import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGroomingComponent } from './dashboard-grooming.component';

describe('DashboardGroomingComponent', () => {
  let component: DashboardGroomingComponent;
  let fixture: ComponentFixture<DashboardGroomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGroomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
