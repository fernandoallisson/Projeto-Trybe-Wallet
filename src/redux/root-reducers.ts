import { combineReducers } from 'redux';

import { userReducer } from './user/reducer';
import { walletReducer } from './wallet/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
