import { useSelector } from 'react-redux';

function Header() {
  const { email, totalMoney = 0 } = useSelector((state: any) => state.user);
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
