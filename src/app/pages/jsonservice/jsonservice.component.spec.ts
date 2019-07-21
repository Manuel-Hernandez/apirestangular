import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonserviceComponent } from './jsonservice.component';

describe('JsonserviceComponent', () => {
  let component: JsonserviceComponent;
  let fixture: ComponentFixture<JsonserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
