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
      dispatch({
        type: walletActionTypes.FETCH_EXCHANGE_CURRENCIES,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// Toda vez que eu chamar essa função, ela vai chamar a API e vai retornar um objeto com as moedas com thunk

export const addExpense = (expense: any): any => {
  return async (dispatch: any) => {
    try {
      const exchangeRates = await getCurrencyExchange();

      dispatch({
        type: walletActionTypes.ADD_EXPENSE,
        payload: {
          ...expense,
          exchangeRates,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const removeExpense = (id: number): any => ({
  type: walletActionTypes.REMOVE_EXPENSE,
  payload: id,
});
