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
    // case para adicionar moedas
    case walletActionTypes.FETCH_CURRENCIES_REQUEST:
      return {
        ...state,
        currencies: [...state.currencies, ...action.payload],
      };
      // case para adicionar despesas
    case walletActionTypes.ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload.expense],
      };
      // case para adicionar o rates
    case walletActionTypes.FETCH_EXCHANGE_RATES_SUCCESS:
      return {
        ...state,
        exchangeRates: action.payload.exchangeRates,
      };
    default:
      return state;
  }
}
