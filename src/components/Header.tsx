import { useSelector } from 'react-redux';

function Header() {
  const { email } = useSelector((state: any) => state.user);
  const { expenses } = useSelector((state: any) => state.wallet);

  const totalMoney = expenses.reduce((acc: number, curr: any) => {
    const { value, exchangeRate } = curr;
    const total = acc + (value * exchangeRate);
    console.log(exchangeRate);
    return total;
  }, 0).toFixed(2);

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
