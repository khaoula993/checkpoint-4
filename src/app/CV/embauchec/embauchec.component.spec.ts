import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbauchecComponent } from './embauchec.component';

describe('EmbauchecComponent', () => {
  let component: EmbauchecComponent;
  let fixture: ComponentFixture<EmbauchecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbauchecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbauchecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
