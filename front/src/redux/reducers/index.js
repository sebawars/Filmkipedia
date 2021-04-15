import { combineReducers } from 'redux';
import auth from './auth';
import entities from './entities';
import entitiesIds from './entitiesIds';
import fetchInfo from './fetch-info';

export default combineReducers({
  auth,
  entities,
  entitiesIds,
  fetchInfo,
});
