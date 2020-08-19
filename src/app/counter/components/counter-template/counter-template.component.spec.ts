import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTemplateComponent } from './counter-template.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { Component } from '@angular/core';

describe('CounterTemplateComponent', () => {
  let component: CounterTemplateComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWrapperComponent, CounterTemplateComponent ],
      imports: [ AppMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'test-wrapper',
  template: '<app-counter-template><p #contentRef>This is ng-content</p></app-counter-template>'
})
class TestWrapperComponent {}
