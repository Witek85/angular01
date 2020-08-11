import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-log-buttons',
  templateUrl: './counter-log-buttons.component.html',
  styleUrls: ['./counter-log-buttons.component.css']
})
export class CounterLogButtonsComponent implements OnInit, OnDestroy {
  randomizerActive: boolean = false;
  randomizerSubscription: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.randomizerSubscription = this.counterService.randomizerActive.subscribe(val => {
      this.randomizerActive = val;
    })
  }

  ngOnDestroy() {
    this.randomizerSubscription.unsubscribe();
    this.counterService.stopSubscription();
  }

  onStartSubscription() {
    this.counterService.startSubscription();
  }

  onStopSubscription() {
    this.counterService.stopSubscription();
  }

  onLogMessage() {
    this.counterService.logMessage();
  }



}
