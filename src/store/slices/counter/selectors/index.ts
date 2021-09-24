import { ReduxStore } from '../../../types';

export const selectorCounterValue = (state: ReduxStore) => state.counter.value;
