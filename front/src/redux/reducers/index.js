import { combineReducers } from 'redux'
import auth from './auth'
import entities from './entities'
import result from './result'
import loading from './loading'

export default combineReducers({
  auth,
  entities,
  result,
  loading
})