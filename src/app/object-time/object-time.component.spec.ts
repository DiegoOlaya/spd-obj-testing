import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectTimeComponent } from './object-time.component';

describe('ObjectTimeComponent', () => {
  let component: ObjectTimeComponent;
  let fixture: ComponentFixture<ObjectTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
