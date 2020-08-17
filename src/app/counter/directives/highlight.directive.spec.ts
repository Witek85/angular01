import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { Component, Renderer2, DebugElement } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div appHighlight></div>`
})
class TestAppHighlightComponent {
}

describe('HighlightDirective', () => {

  let component: TestAppHighlightComponent;
  let fixture: ComponentFixture<TestAppHighlightComponent>;
  let element: DebugElement;
  let renderer: Renderer2;

  beforeAll( ()=> {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        declarations: [TestAppHighlightComponent, HighlightDirective],
        providers: [Renderer2]
      });

    fixture = TestBed.createComponent(TestAppHighlightComponent);
    component = fixture.componentInstance;
    renderer = fixture.componentRef.injector.get(Renderer2);
    
  });

  it('should create an instance', () => {
    element = fixture.debugElement;
    const directive = new HighlightDirective(element, renderer);
    expect(directive).toBeTruthy();
  });

  it('hovering over div', () => {
    element = fixture.debugElement.query(By.css('div'));
    element.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(element.nativeElement.style.border).toBe('1px solid green');
    expect(element.nativeElement.style.backgroundColor).toBe('blue');

    element.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(element.nativeElement.style.border).toBe('1px solid red');
    expect(element.nativeElement.style.backgroundColor).toBe('white');
});

});