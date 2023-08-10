import { AnyAction } from 'redux';
import { walletActionTypes } from './action-types';

const initialState = {
  currencies: [],
  expenses: [],
  error: '',
  id: 0,
};

export function walletReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    // case para adicionar os símbolos das moedas
    case walletActionTypes.FETCH_CURRENCIES_REQUEST
    || walletActionTypes.FETCH_ONLY_CURRENCIES_REQUEST:
      return {
        ...state,
        currencies: [...state.currencies, ...action.payload],
      };

      // case para adicionar despesas
    case walletActionTypes.ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

      // case para adicionar as moedas
    case walletActionTypes.FETCH_EXCHANGE_CURRENCIES:
      return {
        ...state,
        data: action.payload,
      };

      // case para remover despesas
    case walletActionTypes.REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense: any) => expense.id !== action.payload),
      };
    default:
      return state;
  }
}
