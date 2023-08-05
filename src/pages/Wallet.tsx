// import { useSelector } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

function Wallet() {
  // const { email, password } = useSelector((state: any) => state.userReducer); // Acessar a propriedade 'email' do estado do usuário

  return (
    <div>
      <Header />
      <WalletForm />
    </div>
  );
}

export default Wallet;
