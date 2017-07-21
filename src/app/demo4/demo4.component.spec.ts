import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { demo4Component } from './demo4.component';

describe('demo4Component', () => {
  let component: demo4Component;
  let fixture: ComponentFixture<demo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ demo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
