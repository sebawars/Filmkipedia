import { combineReducers } from 'redux';
import auth from './auth';
import entities from './entities';
import result from './result';
import fetchInfo from './fetch-info';

export default combineReducers({
  auth,
  entities,
  result,
  fetchInfo,
});
