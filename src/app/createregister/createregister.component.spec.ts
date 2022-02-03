import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateregisterComponent } from './createregister.component';

describe('CreateregisterComponent', () => {
  let component: CreateregisterComponent;
  let fixture: ComponentFixture<CreateregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
