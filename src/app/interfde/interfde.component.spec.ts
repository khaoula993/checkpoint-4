import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfdeComponent } from './interfde.component';

describe('InterfdeComponent', () => {
  let component: InterfdeComponent;
  let fixture: ComponentFixture<InterfdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
