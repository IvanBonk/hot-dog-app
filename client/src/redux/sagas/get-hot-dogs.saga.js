import { takeEvery, put, fork, all } from 'redux-saga/effects';
import types from '../action.types';
import { httpRequest } from '../../helpers/httpRequest';

export function* getHotDogsWorker() {
  try {
    const response = yield httpRequest('/hot-dogs', 'GET');
  
    yield put({
      type: types.GET_HOT_DOGS.SUCCESS,
      payload: response.data
    })
  } catch (error) {
      console.log(error);
  }
}

export function* getHotDogsWatcher() {
  yield takeEvery(types.GET_HOT_DOGS.FETCH, getHotDogsWorker);
}

export function* getHotDogsSaga() {
  yield all([fork(getHotDogsWatcher)])
}