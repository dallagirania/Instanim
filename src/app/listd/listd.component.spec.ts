import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdComponent } from './listd.component';

describe('ListdComponent', () => {
  let component: ListdComponent;
  let fixture: ComponentFixture<ListdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
