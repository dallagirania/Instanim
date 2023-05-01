import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantTodoComponent } from './important-todo.component';

describe('ImportantTodoComponent', () => {
  let component: ImportantTodoComponent;
  let fixture: ComponentFixture<ImportantTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportantTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
