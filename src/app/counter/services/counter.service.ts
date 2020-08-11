import { interval, Observable, BehaviorSubject, Subscriber, Subscription } from 'rxjs'
import { tap, map } from 'rxjs/operators';

export class CounterService {
  public randomNumberObservable = interval(3000).pipe(
    tap(x => {console.log('preparing value', x)}),
    map(() => this.getRandomNumber(100,5))
  );
  public randomNumberSubscription: Subscription;
  randomizerActive = new BehaviorSubject<boolean>(false);
  private randomNumberForNow: number = null;

  constructor() {}

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  startSubscription() {
    this.randomNumberForNow = this.getRandomNumber(100,0);
    if (!this.randomizerActive.value) {
      this.randomizerActive.next(true)
      this.randomNumberSubscription = this.randomNumberObservable.subscribe(y => {
        this.randomNumberForNow = y;
      });
    }
  }

  stopSubscription() {
    this.randomNumberForNow = null;
    this.randomizerActive.next(false)
    this.randomNumberSubscription && this.randomNumberSubscription.unsubscribe();
  }

  logMessage() {
    console.log(`subscription is ${this.randomizerActive.value ? 'active' : 'not active'} and this is a random number for now: ${ this.randomNumberForNow}`);
  }
}
