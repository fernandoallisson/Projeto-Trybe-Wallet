import { useSelector } from 'react-redux';

export function WalletCard() {
  const { expense } = useSelector((state: any) => state.wallet);

  return (
    <div>
      <h2>Wallet Card</h2>
      {!expense ? (
        <p>Não tem nada aqui de Wallet Card</p>
      ) : (
        <div>
          {expense.map((expense: any) => (
            <ul key={ expense.id }>
              <li>{ expense.description }</li>
              <li>
                { expense.currency }
                {' '}
                { (expense.value).toFixed(2) }
              </li>
              <li>{ expense.exchangeRate }</li>
              <li>{ expense.currency }</li>
              <li>{ expense.method }</li>
              <li>{ expense.tag }</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
