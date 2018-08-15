import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTimeComponent } from './number-time.component';

describe('NumberTimeComponent', () => {
  let component: NumberTimeComponent;
  let fixture: ComponentFixture<NumberTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
