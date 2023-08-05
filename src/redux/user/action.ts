import { userActionTypes } from './action-types';

export const login = (email: string, password: string) => ({
  type: userActionTypes.LOGIN,
  payload: {
    email,
    password,
  },
});

export const logout = () => ({
  type: userActionTypes.LOGOUT,
});
