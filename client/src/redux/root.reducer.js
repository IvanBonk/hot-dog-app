import { combineReducers } from 'redux';
import { hotDogReducer } from './reducers/hot-dog.reducer';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  hotDogs: hotDogReducer,
  form: formReducer
});