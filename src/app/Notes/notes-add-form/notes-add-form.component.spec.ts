import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAddFormComponent } from './notes-add-form.component';

describe('NotesAddFormComponent', () => {
  let component: NotesAddFormComponent;
  let fixture: ComponentFixture<NotesAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
