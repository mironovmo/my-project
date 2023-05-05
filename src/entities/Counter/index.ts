import type { CounterSchema } from 'entities/Counter/modal/types/CounterSchema';
import { Counter } from 'entities/Counter/ui/Counter';
import { counterReducer } from 'entities/Counter/modal/slices/counterSlice';

export {
    CounterSchema,
    Counter,
    counterReducer,
};
