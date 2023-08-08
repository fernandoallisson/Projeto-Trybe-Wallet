import { getCurrency } from '../../services/currency';
import { walletActionTypes } from './action-types';

// A tradução de Currencie é Moeda
// A tradução de Request é Requisição
// A tradução de Success é Sucesso
// A tradução de Failure é Falha
// A tradução de Fetch é Buscar

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
