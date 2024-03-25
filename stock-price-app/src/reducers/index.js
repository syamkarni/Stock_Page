import { combineReducers } from 'redux';
import stockReducer from './stockReducer';
import stockDetailsReducer from './stockDetailsReducer';

const rootReducer = combineReducers({
  stocks: stockReducer,
  stockDetails: stockDetailsReducer
});

export default rootReducer;
