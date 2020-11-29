import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '..';

export type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { add } = slice.actions;
export const selectCounter = (state: State): CounterState => state.counter;

export default slice.reducer;
