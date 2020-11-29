import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store';
import { counterAdd } from '../actions/counter';

export type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(counterAdd, (s, a) => {
      s.value += a.payload;
    });
  },
});

export const selectCounter = (state: State): CounterState => state.counter;

export default slice.reducer;
