import { takeEvery, put, fork, all } from 'redux-saga/effects';
import types from '../action.types';
import { httpRequest } from '../../helpers/httpRequest';

export function* deleteHotDogWorker({ payload }) {
  try {
    yield httpRequest(`/hot-dogs/${payload}`, 'DELETE');
    yield put({
      type: types.DELETE_HOT_DOG.SUCCESS,
      payload: payload,
    })
  } catch (error) {
      console.log(error);
  }
}

export function* deleteHotDogWatcher() {
  yield takeEvery(types.DELETE_HOT_DOG.FETCH, deleteHotDogWorker);
}

export function* deleteHotDogSaga() {
  yield all([fork(deleteHotDogWatcher)])
}