import { add, addAsync } from '../actions/counter';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { loading } from '../actions/common';

function* doAddAsync(n: PayloadAction<number>) {
  yield put(loading(true));
  yield delay(1000);
  yield put(loading(false));
  yield put(add(n.payload));
}

export default [takeEvery(addAsync, doAddAsync)];
