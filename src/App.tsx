import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/carteira" Component={ Wallet } />
        {/* <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } /> */}
      </Routes>
    </div>
  );
}

export default App;
