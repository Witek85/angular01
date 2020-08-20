import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CounterOutputComponent } from './counter-output.component';
import { CounterOutputChildComponent } from '../counter-output-child/counter-output-child.component';
import { Component, ChangeDetectorRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CounterOutputComponent', () => {
  let component: CounterOutputComponent;
  let childComponent: CounterOutputComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let childFixture: ComponentFixture<CounterOutputComponent>;
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWrapperComponent, CounterOutputComponent, CounterOutputChildComponent ],
      providers: [
        {provide: ChangeDetectorRef, useClass: ChangeDetectorRefMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    childFixture = TestBed.createComponent(CounterOutputComponent);
    component = fixture.debugElement.children[0].componentInstance;
    childComponent = childFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reattach on the click', fakeAsync( () => {
    const spy = spyOn((childComponent as any).ref, 'reattach').and.callThrough();
    const nativeElement = childFixture.nativeElement;
    const button = nativeElement.querySelectorAll('button')[0];
    button.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }));

  it('should detach on the click', fakeAsync( () => {
    const spy = spyOn((childComponent as any).ref, 'detach').and.callThrough();
    const nativeElement = childFixture.nativeElement;
    const button = nativeElement.querySelectorAll('button')[1];
    button.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }));

  it('should logmessage on the click', fakeAsync( () => {
    console.log = jasmine.createSpy("log");
    const nativeElement = childFixture.nativeElement;
    const button = nativeElement.querySelectorAll('button')[2];
    button.click();
    tick();
    expect(console.log).toHaveBeenCalled();
  }));
});

@Component({
  selector: 'test-wrapper',
  template: '<app-counter-output [counter]="counter" [config]="config"></app-counter-output>'
})
class TestWrapperComponent {
  counter = { value: 5 }
  config = { subheader: 'subheader'}
}

class ChangeDetectorRefMock {
  detectChanges: () => null
  reattach: () => null
  detach: () => null
}
