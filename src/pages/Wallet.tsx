import { useSelector } from 'react-redux';
import Header from '../components/Header';

function Wallet() {
  const { email, password } = useSelector((state: any) => state.userReducer); // Acessar a propriedade 'email' do estado do usuário

  return (
    <div>
      <Header />
      <h1>TrybeWallet</h1>
      {email ? (
        <p data-testid="email-field">{`Email: ${email}`}</p>
      ) : (
        <p data-testid="email-field">Email não encontrado</p>
      )}
      <h2>
        Essa é a senha:
        { password}
      </h2>
    </div>
  );
}

export default Wallet;
