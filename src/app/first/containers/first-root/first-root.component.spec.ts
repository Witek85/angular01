import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRootComponent } from './first-root.component';

describe('FirstRootComponent', () => {
  let component: FirstRootComponent;
  let fixture: ComponentFixture<FirstRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
