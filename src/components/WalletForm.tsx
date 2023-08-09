import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense,
  fetchCurrenciesRequest,
  fetchExchangeCurrencies } from '../redux/wallet/action';

const INITIAL_STATE = {
  id: 0,
  value: 0,
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
  exchangeRates: {},
  code: '',
};

type Expenses = {
  id: number;
  value: number;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRate: object;
  code: string;
};

function WalletForm() {
  const dispatch = useDispatch();
  const [dataLocal, setDataLocal] = useState(INITIAL_STATE);
  const { currencies } = useSelector((state: any) => state.wallet);
  const { data } = useSelector((state: any) => state.wallet);

  useEffect(() => {
    dispatch(fetchCurrenciesRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchExchangeCurrencies());
  }, [dispatch]);

  const id = useSelector((state: any) => state.wallet.expenses.length);
  const handleClickAddExpense = () => {
    const { value, currency, method, tag, description } = dataLocal;
    dispatch(addExpense({ // Adiciona a despesa no estado global
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: data,
    }));
    setDataLocal(INITIAL_STATE); // Limpa o form
  };

  const handleTeste = () => {
    console.log(data);
  };
  return (
    <div>
      <label htmlFor="cashValue">
        Valor
        <input
          type="number"
          id="cashValue"
          name="cashValue"
          data-testid="value-input"
          onChange={ (e) => setDataLocal(
            { ...dataLocal, value: Number(e.target.value) },
          ) }
          value={ dataLocal.value }
        />
      </label>
      <label htmlFor="cashType">
        Moeda
        <select
          name="cashType"
          id="cashType"
          data-testid="currency-input"
          onChange={ (e) => setDataLocal({ ...dataLocal, currency: e.target.value }) }
          value={ dataLocal.currency }
        >
          {currencies.map((currency: any) => (
            <option key={ currency } value={ currency }>
              { currency}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="method">
        Método de pagamento
        <select
          name="method"
          id="method"
          data-testid="method-input"
          onChange={ (e) => setDataLocal({ ...dataLocal, method: e.target.value }) }
          value={ dataLocal.method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="category">
        Categoria
        <select
          name="category"
          id="category"
          data-testid="tag-input"
          onChange={ (e) => setDataLocal({ ...dataLocal, tag: e.target.value }) }
          value={ dataLocal.tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          name="description"
          data-testid="description-input"
          onChange={ (e) => setDataLocal({ ...dataLocal, description: e.target.value }) }
          value={ dataLocal.description }
        />
      </label>
      <button type="button" onClick={ handleClickAddExpense }>Adicionar despesa</button>
      <button type="button" onClick={ handleTeste }>teste</button>
    </div>
  );
}

export default WalletForm;
