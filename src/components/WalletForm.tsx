import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense,
  fetchCurrenciesRequest,
} from '../redux/wallet/action';

const INITIAL_STATE = {
  id: 0,
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
};

function WalletForm() {
  const { currencies } = useSelector((state: any) => state.wallet);
  const { expenses } = useSelector((state: any) => state.wallet);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrenciesRequest());
  }, [dispatch]);
  const [dataLocalExchange, setDataLocalExchange] = useState(INITIAL_STATE);

  useEffect(() => {
    const Values = {
      id: 0,
      value: '',
      currency: currencies[0],
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    return setDataLocalExchange(Values);
  }, [currencies]);

  const handleClickAddExpense = () => {
    const { value, currency, method, tag, description } = dataLocalExchange;
    dispatch(addExpense({ // Adiciona a despesa no estado global
      id: expenses.length,
      value,
      currency,
      method,
      tag,
      description,
    }));
    setDataLocalExchange(INITIAL_STATE); // Limpa o form
  };

  return (
    <div>
      <label htmlFor="cashValue">
        Valor
        <input
          type="Number"
          id="cashValue"
          name="cashValue"
          data-testid="value-input"
          onChange={ (e) => setDataLocalExchange(
            { ...dataLocalExchange, value: e.target.value },
          ) }
          value={ dataLocalExchange.value === '0' ? '' : dataLocalExchange.value }
        />
      </label>
      <label htmlFor="cashType">
        Moeda
        <select
          name="cashType"
          id="cashType"
          data-testid="currency-input"
          onChange={ (e) => setDataLocalExchange(
            { ...dataLocalExchange, currency: e.target.value },
          ) }
          value={ dataLocalExchange.currency }
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
          onChange={ (e) => setDataLocalExchange(
            { ...dataLocalExchange, method: e.target.value },
          ) }
          value={ dataLocalExchange.method }
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
          onChange={ (e) => setDataLocalExchange(
            { ...dataLocalExchange, tag: e.target.value },
          ) }
          value={ dataLocalExchange.tag }
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
          onChange={ (e) => setDataLocalExchange(
            { ...dataLocalExchange, description: e.target.value },
          ) }
          value={ dataLocalExchange.description }
        />
      </label>
      <button type="button" onClick={ handleClickAddExpense }>Adicionar despesa</button>
    </div>
  );
}

export default WalletForm;
