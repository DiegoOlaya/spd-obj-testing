import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeGrapherComponent } from './time-grapher.component';

describe('TimeGrapherComponent', () => {
  let component: TimeGrapherComponent;
  let fixture: ComponentFixture<TimeGrapherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeGrapherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeGrapherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
