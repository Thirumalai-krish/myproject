import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateregisterlistComponent } from './updateregisterlist.component';

describe('UpdateregisterlistComponent', () => {
  let component: UpdateregisterlistComponent;
  let fixture: ComponentFixture<UpdateregisterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateregisterlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateregisterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
