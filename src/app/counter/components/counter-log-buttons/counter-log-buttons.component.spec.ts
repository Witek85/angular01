import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CounterLogButtonsComponent } from './counter-log-buttons.component';
import { CounterService } from '../../services/counter.service';

describe('CounterLogButtonsComponent', () => {
  let component: CounterLogButtonsComponent;
  let fixture: ComponentFixture<CounterLogButtonsComponent>;
  let counterService: CounterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterLogButtonsComponent ],
      providers: [ CounterService ]
    })
    .compileComponents();

    counterService = TestBed.get(CounterService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterLogButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start subscription on the click', fakeAsync( () => {
    spyOn(counterService, 'startSubscription');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelectorAll('button')[0];
    button.click();
    tick();
    expect(counterService.startSubscription).toHaveBeenCalled();
  }));

  it('should stop subscription on the click', fakeAsync( () => {
    component.randomizerActive = true;
    fixture.detectChanges();
    spyOn(counterService, 'stopSubscription');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelectorAll('button')[1];
    button.click();
    tick();
    expect(counterService.stopSubscription).toHaveBeenCalled();
  }));

  it('should log message on the click', fakeAsync( () => {
    spyOn(counterService, 'logMessage');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelectorAll('button')[2];
    button.click();
    tick();
    expect(counterService.logMessage).toHaveBeenCalled();
  }));
});
