import types from '../action.types';

export const getHotDogs = () => {
  return {
    type: types.GET_HOT_DOGS.FETCH
  }
}

export const postHotDog = (hotDog) => {
  return {
    type: types.POST_HOT_DOG.FETCH,
    payload: hotDog,
  }
} 

export const deleteHotDog = (id) => {
  return {
    type: types.DELETE_HOT_DOG.FETCH,
    payload: id,
  }
}

export const updateHotDog = (newHotDog) => {
  return {
    type: types.UPDATE_HOT_DOG.FETCH,
    payload: newHotDog,
  }
}

export const handleEditForm = (id) => {
  return {
    type: types.HANDLE_EDIT_FORM,
    payload: id,
  }
}