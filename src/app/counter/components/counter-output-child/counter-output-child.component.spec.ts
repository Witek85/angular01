import { Component, ChangeDetectorRef } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CounterOutputChildComponent } from './counter-output-child.component';

describe('CounterOutputChildComponent', () => {
  let component: CounterOutputChildComponent;
  let childComponent: CounterOutputChildComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let childFixture: ComponentFixture<CounterOutputChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWrapperComponent, CounterOutputChildComponent ],
      providers: [
        {provide: ChangeDetectorRef, useClass: ChangeDetectorRefMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    childFixture = TestBed.createComponent(CounterOutputChildComponent);
    component = fixture.debugElement.children[0].componentInstance;
    childComponent = childFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect changes on the click', fakeAsync( () => {
    const spy = spyOn((childComponent as any).ref, 'detectChanges').and.callThrough();
    const nativeElement = childFixture.nativeElement;
    const button = nativeElement.querySelectorAll('button')[0];
    button.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }));

  it('should reattach on the click', fakeAsync( () => {
    const spy = spyOn((childComponent as any).ref, 'reattach').and.callThrough();
    const nativeElement = childFixture.nativeElement;
    const button = nativeElement.querySelectorAll('button')[1];
    button.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }));
  
  it('should detach on the click', fakeAsync( () => {
    console.log = jasmine.createSpy("log");
    const spy = spyOn((childComponent as any).ref, 'detach').and.callThrough();
    const nativeElement = childFixture.nativeElement;
    const button = nativeElement.querySelectorAll('button')[2];
    button.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }));
});

@Component({
  selector: 'test-wrapper',
  template: '<app-counter-output-child [counter]="counter" #childRef></app-counter-output-child>'
})
class TestWrapperComponent {
  counter = { value: 5 }
}

class ChangeDetectorRefMock {
  detectChanges: () => null
  reattach: () => null
  detach: () => null
}
