import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTabsComponent } from './first-tabs.component';

describe('FirstTabsComponent', () => {
  let component: FirstTabsComponent;
  let fixture: ComponentFixture<FirstTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
