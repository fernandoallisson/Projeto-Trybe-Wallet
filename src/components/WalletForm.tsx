import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, fetchCurrenciesRequest } from '../redux/wallet/action';
import { CashType } from '../types';

function WalletForm() {
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    value: 0,
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    exangeRates: {},
  };

  // data para guardar os valores dos inputs e enviar para o redux;
  const [data, setData] = useState(INITIAL_STATE);

  const { currencies } = useSelector((state: any) => state.wallet);

  // gerar um id para cada despesa de forma crescente
  const id = useSelector((state: any) => state.wallet.expenses.length);

  // useEffect para fazer a requisição da API de moedas
  useEffect(() => {
    dispatch(fetchCurrenciesRequest());
  }, [dispatch]);

  // função para adicionar despesa e limpar os inputs
  const handleClickAddExpense = () => {
    const { value, currency, method, tag, description } = data;
    dispatch(addExpense({
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRate: Number(
        currencies.find((curr: CashType) => curr.code === currency).ask,
      ),
    }));
    setData(INITIAL_STATE);
  };

  // console.log(currencies);

  return (
    <div>
      <label htmlFor="cashValue">
        Valor
        <input
          type="number"
          id="cashValue"
          name="cashValue"
          data-testid="value-input"
          onChange={ (e) => setData({ ...data, value: Number(e.target.value) }) }
          value={ data.value }
        />
      </label>
      <label htmlFor="cashType">
        Moeda
        <select
          name="cashType"
          id="cashType"
          data-testid="currency-input"
          onChange={ (e) => setData({ ...data, currency: e.target.value }) }
          value={ data.currency }
        >
          { currencies && currencies.map((currency: CashType) => (
            <option
              key={ `${currency.name}-${currency.create_date}` }
              value={ currency.code }
            >
              {currency.code}
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
          onChange={ (e) => setData({ ...data, method: e.target.value }) }
          value={ data.method }
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
          onChange={ (e) => setData({ ...data, tag: e.target.value }) }
          value={ data.tag }
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
          onChange={ (e) => setData({ ...data, description: e.target.value }) }
          value={ data.description }
        />
      </label>
      <button type="button" onClick={ handleClickAddExpense }>Adicionar despesa</button>
    </div>
  );
}

export default WalletForm;
