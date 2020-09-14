import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { getHotDogsSaga } from './sagas/get-hot-dogs.saga';
import { postHotDogSaga } from './sagas/post-hot-dog.saga';
import { deleteHotDogSaga } from './sagas/delete-hot-dog.saga';
import { updateHotDogSaga } from './sagas/update-hot-dog.saga';

export const saga = createSagaMiddleware();

export function* rootSaga() {
  yield all([
    fork(getHotDogsSaga),
    fork(postHotDogSaga),
    fork(deleteHotDogSaga),
    fork(updateHotDogSaga),
  ]);
}