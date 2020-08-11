import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstIconsComponent } from './first-icons.component';

describe('FirstIconsComponent', () => {
  let component: FirstIconsComponent;
  let fixture: ComponentFixture<FirstIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
