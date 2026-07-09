import { Component, Signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

@Component({
    selector: 'ngrx-counter',
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
    <button id="increment" (click)="increment()">Increment</button>

    <div>Current Count: {{ count() }}</div>

    <button id="decrement" (click)="decrement()">Decrement</button>

    <button id="reset" (click)="reset()">Reset Counter</button>
  `,
})
export class CounterComponent {
    private readonly store: Store<{ count: number }> = inject(Store);
    count: Signal<number> = this.store.selectSignal((state) => state.count);
    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement());
    }

    reset() {
        this.store.dispatch(reset());
    }
}
