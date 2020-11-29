import { all } from 'redux-saga/effects';
import counter from './counter';

export default function* rootSaga(): Generator {
  yield all([...counter]);
}
