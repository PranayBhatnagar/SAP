import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers/userReducers';
import { greenCreditReducer } from './reducers/greenCreditReducers';

const rootReducer = combineReducers({
  user: userReducer,
  greenCredit: greenCreditReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
