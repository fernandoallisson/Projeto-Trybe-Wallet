import { AnyAction } from 'redux';
import { walletActionTypes } from './action-types';

const initialState = {
  currencies: [],
};

export function walletReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    // case para adicionar moedas
    case walletActionTypes.FETCH_CURRENCIES_REQUEST:
      return {
        ...state,
        currencies: [...state.currencies, ...action.payload],
      };
      // case para caso de sucesso
    case walletActionTypes.FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: [...action.payload.currencies],
      };
      // case para caso de falha
    case walletActionTypes.FETCH_CURRENCIES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
