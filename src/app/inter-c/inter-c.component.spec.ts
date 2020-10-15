import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCComponent } from './inter-c.component';

describe('InterCComponent', () => {
  let component: InterCComponent;
  let fixture: ComponentFixture<InterCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
