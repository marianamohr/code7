import { combineReducers } from 'redux';
import user from './user';
import debits from './debits';


const rootReducer = combineReducers({
  user,
  debits,
});

export default rootReducer;