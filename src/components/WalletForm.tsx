import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrenciesRequest } from '../redux/wallet/action';
import { CashType } from '../types';

function WalletForm() {
  const dispatch = useDispatch();

  const { currencies } = useSelector((state: any) => state.wallet);

  useEffect(() => {
    dispatch(fetchCurrenciesRequest());
  }, [dispatch]);

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
        />
      </label>
      <label htmlFor="cashType">
        Moeda
        <select
          name="cashType"
          id="cashType"
          data-testid="currency-input"
        >
          { currencies && currencies.map((currency: CashType) => (
            <option
              key={ currency.name }
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
        />
      </label>
      <button type="button">Adicionar despesa</button>
    </div>
  );
}

export default WalletForm;
