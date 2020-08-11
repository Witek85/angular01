import { interval, Observable } from 'rxjs'
import { tap, map } from 'rxjs/operators';

export class CounterService {
  public randomNumberObservable = interval(3000).pipe(
    tap(x => {console.log('preparing value', x)}),
    map(x => this.getRandomNumber(100,5))
  );
  public randomNumberSubscription;
  private randomNumberForNow = null;

  constructor() {}

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  startSubscription() {
    console.log('subscribed');
    this.randomNumberForNow = this.getRandomNumber(100,0);
    this.randomNumberSubscription = this.randomNumberObservable.subscribe(y => {
      console.log('subscribed value', y);
      this.randomNumberForNow = y;
    });
  }

  stopSubscription() {
    console.log('unsubscribed');
    this.randomNumberForNow = null;
    this.randomNumberSubscription.unsubscribe();
  }

  logMessage() {
    console.log('this is a random number for now: ', this.randomNumberForNow);
  }
}
