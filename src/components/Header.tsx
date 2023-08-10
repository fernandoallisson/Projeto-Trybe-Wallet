import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const { email } = useSelector((state: any) => state.user);
  const { expenses } = useSelector((state: any) => state.wallet);
  const [totalMoney, setTotalMoney] = useState(0);

  // UseEfect para calcular o total de despesas
  useEffect(() => {
    const totalCurrency = expenses.reduce((acc: any, curr: any) => {
      const { value, exchangeRates } = curr;
      const { ask } = exchangeRates[curr.currency];
      const total = Number(value) * Number(ask);
      return acc + total;
    }, 0).toFixed(2);
    return setTotalMoney(totalCurrency);
  }, [expenses]);

  return (
    <div>
      <div>
        Email:
        {' '}
        <span data-testid="email-field">{email}</span>
      </div>
      <div>
        Despesa Total: R$
        {' '}
        <span data-testid="total-field">{ totalMoney }</span>
      </div>
      <span data-testid="header-currency-field">BRL</span>
    </div>
  );
}

export default Header;
