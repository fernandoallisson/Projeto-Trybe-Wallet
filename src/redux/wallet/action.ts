import { getCurrency } from '../../services/currency';
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
      dispatch(fetchCurrenciesSuccess(currenciesArray));
    } catch (error) {
      dispatch(fetchCurrenciesFailure(error));
    }
  };
};

export const fetchCurrenciesSuccess = (currencies: any) => ({
  type: walletActionTypes.FETCH_CURRENCIES_SUCCESS,
  payload: {
    currencies,
  },
});

export const fetchCurrenciesFailure = (error: any) => ({
  type: walletActionTypes.FETCH_CURRENCIES_FAILURE,
  payload: {
    error,
  },
});

export const fetchExchangeRatesSuccess = (exchangeRates: any) => ({
  type: walletActionTypes.FETCH_EXCHANGE_RATES_SUCCESS,
  payload: {
    exchangeRates,
  },
});

export const fetchExchangeRatesFailure = (error: any) => ({
  type: walletActionTypes.FETCH_EXCHANGE_RATES_FAILURE,
  payload: {
    error,
  },
});

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
