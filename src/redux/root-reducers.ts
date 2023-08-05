import { combineReducers } from 'redux';

import userReducer from './user/reducer';
// import cartReducer from './cart/reducer'; // Qualquer outro reducer...

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
