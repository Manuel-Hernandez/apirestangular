import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsons1Component } from './jsons1.component';

describe('Jsons1Component', () => {
  let component: Jsons1Component;
  let fixture: ComponentFixture<Jsons1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jsons1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsons1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
