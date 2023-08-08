// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCurrenciesRequest } from './redux/wallet/action';

// function CurrencyInfo() {
//   const dispatch = useDispatch();
//   const { currencies } = useSelector((state) => state.wallet);

//   useEffect(() => {
//     dispatch(fetchCurrenciesRequest());
//   }, [dispatch]);

//   return (
//     <div>
//       <h2>Currency Information</h2>
//       {!currencies ? (
//         <p>Não tem nada aqui de Currencies</p>
//       ) : (
//         <ul>
//           {currencies.map((currency) => (
//             <li key={ currency.code }>
//               {currency.name}
//               {' '}
//               :
//               {' '}
//               { currency.high }
//               {/* Exibir mais informações da moeda conforme necessário */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
// export default CurrencyInfo;
