import { combineReducers } from 'redux';
import items from './itemReducer';

export const rootReducer = combineReducers({
  items: items,
});
