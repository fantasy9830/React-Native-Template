import { combineReducers } from 'redux';
import authReducer from './components/Auth/reducer';

export default combineReducers({
  user: authReducer,
});
