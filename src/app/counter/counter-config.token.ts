import { InjectionToken } from '@angular/core';
import { CounterConfig } from './interfaces/counter-config'

export const COUNTER_CONFIG =
  new InjectionToken<CounterConfig>('counter-config');
