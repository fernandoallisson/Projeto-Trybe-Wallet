import { AnyAction } from 'redux';
import { walletActionTypes } from './action-types';

export const addCurrency = (currency: AnyAction) => ({
  type: walletActionTypes.ADD_CURRENCY,
  payload: {
    currency,
  },
});

export const addExpense = (expense: AnyAction) => ({
  type: walletActionTypes.ADD_EXPENSE,
  payload: {
    expense,
  },
});
