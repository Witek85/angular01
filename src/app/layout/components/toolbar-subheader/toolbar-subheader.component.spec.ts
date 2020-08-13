import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSubheaderComponent } from './toolbar-subheader.component';

describe('ToolbarSubheaderComponent', () => {
  let component: ToolbarSubheaderComponent;
  let fixture: ComponentFixture<ToolbarSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
