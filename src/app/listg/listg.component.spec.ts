import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgComponent } from './listg.component';

describe('ListgComponent', () => {
  let component: ListgComponent;
  let fixture: ComponentFixture<ListgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
