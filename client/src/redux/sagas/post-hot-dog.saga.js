import { takeEvery, put, fork, all } from 'redux-saga/effects';
import types from '../action.types';
import { httpRequest } from '../../helpers/httpRequest';

export function* postHotDogWorker({ payload }) {
  try {
    const response = yield httpRequest('/hot-dogs', 'POST', payload);
    yield put({
      type: types.POST_HOT_DOG.SUCCESS,
      payload: response.data
    });
  } catch (error) {
      yield put({
        type: types.POST_HOT_DOG.ERROR,
        payload: error.message,
      });
  }
}

export function* postHotDogWatcher() {
  yield takeEvery(types.POST_HOT_DOG.FETCH, postHotDogWorker);
}

export function* postHotDogSaga() {
  yield all([fork(postHotDogWatcher)])
}