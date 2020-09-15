import types from '../action.types';

const initialState = {
  hotDogsList: [],
  fetching: false,
  openEditFormId: null,
  errorMessage: '',
}

export const hotDogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HOT_DOGS.FETCH:
    case types.POST_HOT_DOG.FETCH:
    case types.DELETE_HOT_DOG.FETCH:
    case types.UPDATE_HOT_DOG.FETCH:
      return {
        ...state,
        fetching: true,
      };
    case types.GET_HOT_DOGS.SUCCESS:
      return {
        ...state,
        hotDogsList: action.payload,
        fetching: false,
      };
    case types.POST_HOT_DOG.SUCCESS:
      return {
        ...state,
        hotDogsList: [...state.hotDogsList, action.payload],
        fetching: false,
      };
    case types.DELETE_HOT_DOG.SUCCESS:
      return {
        ...state,
        hotDogsList: state.hotDogsList.filter((obj) => obj.id !== action.payload),
        fetching: false,
      };
    case types.UPDATE_HOT_DOG.SUCCESS:
      return {
        ...state,
        hotDogsList: state.hotDogsList.map((obj) => obj.id === action.payload.id ? action.payload : obj),
        fetching: false,
      };
    case types.GET_HOT_DOGS.ERROR:
    case types.POST_HOT_DOG.ERROR:
    case types.DELETE_HOT_DOG.ERROR:
    case types.UPDATE_HOT_DOG.ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        fetching: false
      };
    case types.HANDLE_EDIT_FORM:
      return {
        ...state,
        openEditFormId: action.payload,
      };
    default: return state;
  }
}

