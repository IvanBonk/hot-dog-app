import { takeEvery, put, fork, all } from 'redux-saga/effects';
import types from '../action.types';
import { httpRequest } from '../../helpers/httpRequest';

export function* updateHotDogWorker({ payload }) {
  try {
    yield httpRequest(`/hot-dogs/${payload.id}`, 'PUT', payload);
    yield put({
      type: types.UPDATE_HOT_DOG.SUCCESS,
      payload: payload,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_HOT_DOG.ERROR,
      payload: error.message
    });
  }
}

export function* updateHotDogWatcher() {
  yield takeEvery(types.UPDATE_HOT_DOG.FETCH, updateHotDogWorker);
}

export function* updateHotDogSaga() {
  yield all([fork(updateHotDogWatcher)])
}