import { counterAdd, counterAddAsync } from '../actions/counter';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { loading } from '../actions/common';

function* addAsyncSaga(a: ReturnType<typeof counterAddAsync>) {
  yield put(loading(true));
  yield delay(1000);
  yield put(loading(false));
  yield put(counterAdd(a.payload));
}

export default [takeEvery(counterAddAsync, addAsyncSaga)];
