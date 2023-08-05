import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../redux/user/action';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const verifyButtonLoggin = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const passwordRegex = /^.{6,}$/;
    return !emailRegex.test(email) || !passwordRegex.test(password);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleClickSubmit = () => {
    dispatch(login(email, password)); // Dispatch para a action 'LOGIN'
  };

  return (
    <div>
      <h1>Trybe Wallet - Project</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            type="email"
            id="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            data-testid="password-input"
            type="password"
            id="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        {/* Link para a página de carteira */}
        <Link to="/carteira" onClick={ handleClickSubmit }>
          <button type="submit" disabled={ verifyButtonLoggin() }>Entrar</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
