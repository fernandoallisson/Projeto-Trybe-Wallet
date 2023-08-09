import { getCurrency, getCurrencyExchange } from '../../services/currency';
import { walletActionTypes } from './action-types';

// A tradução de Currencie é Moeda
// A tradução de Request é Requisição
// A tradução de Success é Sucesso
// A tradução de Failure é Falha
// A tradução de Fetch é Buscar
// A tradução de Exchange é Cambio
// A tradução de Rates é Taxas

export const fetchCurrenciesRequest = (): any => {
  return async (dispatch: any) => {
    try {
      const data = await getCurrency();
      const currenciesArray = Object.values(data);

      dispatch({
        type: walletActionTypes.FETCH_CURRENCIES_REQUEST,
        payload: currenciesArray,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchExchangeCurrencies = (): any => {
  return async (dispatch: any) => {
    try {
      const data = await getCurrencyExchange();
      const currenciesArray = Object.values(data);
      dispatch({
        type: walletActionTypes.FETCH_EXCHANGE_CURRENCIES,
        payload: currenciesArray,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const addExpense = (expense: any) => ({
  type: walletActionTypes.ADD_EXPENSE,
  payload: {
    expense,
  },
});

export const removeExpense = (expense: any) => ({
  type: walletActionTypes.REMOVE_EXPENSE,
  payload: {
    expense,
  },
});
