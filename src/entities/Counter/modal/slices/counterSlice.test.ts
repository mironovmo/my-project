import { counterReducer, CounterSchema } from 'entities/Counter';
import { counterActions } from 'entities/Counter/modal/slices/counterSlice';

describe('counterSlice.test', () => {
    test('get increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
    test('get decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('get default state', () => {
        expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 });
    });
});
