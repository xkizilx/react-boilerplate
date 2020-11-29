import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store';
import { loading } from '../actions/common';

export type CommonState = {
  loading: number;
};

const initialState: CommonState = {
  loading: 0,
};

const slice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loading, (s, a) => {
      s.loading += a.payload ? 1 : -1;
    });
  },
});

export const selectCommon = (state: State): CommonState => state.common;

export default slice.reducer;
