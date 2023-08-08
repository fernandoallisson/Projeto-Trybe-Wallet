import { AnyAction } from 'redux';
import { userActionTypes } from './action-types';

const initialState = {
  email: null,
  password: null,
  loading: false,
};

type Action = {
  type: string;
  payload: AnyAction;
};

export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        loading: true,
      };
    case userActionTypes.LOGOUT:
      return {
        ...state,
        email: null,
        password: null,
        loading: false,
      };
    default:
      return state;
  }
};
