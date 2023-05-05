import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'entities/Counter/modal/selectors/getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value,
);
