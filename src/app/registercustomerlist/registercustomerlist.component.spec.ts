import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercustomerlistComponent } from './registercustomerlist.component';

describe('RegistercustomerlistComponent', () => {
  let component: RegistercustomerlistComponent;
  let fixture: ComponentFixture<RegistercustomerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistercustomerlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistercustomerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
