import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingnotfoundComponent } from './bookingnotfound.component';

describe('BookingnotfoundComponent', () => {
  let component: BookingnotfoundComponent;
  let fixture: ComponentFixture<BookingnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingnotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
