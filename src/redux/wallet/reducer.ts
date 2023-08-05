import { AnyAction } from 'redux';
import { walletActionTypes } from './action-types';

const initialState = {
  currencies: [],
  expenses: [],
  total: 0,
  coins: [],
  cash: [],
};

type Action = {
  type: string;
  payload: AnyAction;
};

const walletReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case walletActionTypes.ADD_CURRENCY:
      return {
        ...state,
        currencies: [...state.currencies, action.payload.currency],
      };
    case walletActionTypes.ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload.expense],
      };
    case walletActionTypes.REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload.id,
        ),
      };
    case walletActionTypes.UPDATE_TOTAL:
      return {
        ...state,
        total: action.payload.total,
      };
    case walletActionTypes.GET_COINS:
      return {
        ...state,
        coins: action.payload.coins,
      };
    case walletActionTypes.GET_CASH:
      return {
        ...state,
        cash: action.payload.cash,
      };
    default:
      return state;
  }
}

export default walletReducer;
