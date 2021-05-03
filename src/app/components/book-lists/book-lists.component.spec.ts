import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListsComponent } from './book-lists.component';

describe('BookListsComponent', () => {
  let component: BookListsComponent;
  let fixture: ComponentFixture<BookListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
