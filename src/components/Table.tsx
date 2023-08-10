import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../redux/wallet/action';

export function Table() {
  const { expenses } = useSelector((state: any) => state.wallet);
  const dispatch = useDispatch();

  const handleDelete = (e: any) => {
    const { id } = (e.target);
    const newExpenses = expenses.find((expense: any) => Number(expense.id) !== id).id;
    console.log(newExpenses);
    dispatch(removeExpense(Number(newExpenses)));
  };

  return (
    <div>
      <h2>Table</h2>
      {expenses && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Tag</th>
                <th>Método de pagamento</th>
                <th>Valor</th>
                <th>Moeda</th>
                <th>Câmbio utilizado</th>
                <th>Valor convertido</th>
                <th>Moeda de conversão</th>
                <th>Editar/Excluir</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense: any) => (
                <tr key={ expense.id }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{Number(expense.value).toFixed(2)}</td>
                  <td>{expense.exchangeRates[expense.currency].name}</td>
                  <td>
                    {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
                  </td>
                  <td>
                    {(expense.value
                    * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <span><button type="button">Editar</button></span>
                    <span>
                      <button
                        type="button"
                        data-testid="delete-btn"
                        onClick={ handleDelete }
                        id={ expense.id }
                      >
                        Excluir
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
