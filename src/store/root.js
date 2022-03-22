/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import grocery from './reducer';
export const reducer = combineReducers({
  grocery: grocery,
});
