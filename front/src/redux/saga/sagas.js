import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api'
import { setFetchInfo } from '../actions/set-fetch-info'
import { setAuth } from '../actions/set-auth'
import { setEntities } from '../actions/set-entities'
import { setResult } from '../actions/set-result'
import { normalizeFilms } from '../../redux/normalizers'


// worker Saga: will be fired on FILM_FETCH_REQUESTED actions
function* fetchFilms({type, payload:{id, order, auth}}) {
   let error = null
   try {
      yield put(setFetchInfo({films:{fetchError: error, fetching: true}}))
      const data = yield call(api.film.list, order, auth)
      
      const dataNormalizada = normalizeFilms(data)
      const entities = dataNormalizada.entities
      const result = dataNormalizada.result

      yield all([
         put(setEntities(entities)),
         put(setResult(result))
      ])
      
   } catch (e) {
      // TODO
      yield all([
         put(setAuth(auth)),
      ])
      error = e.message
   } finally{
      yield put(setFetchInfo({films:{fetchError: error, fetching: false}}))
   }
}
/*
  Starts fetchFilms on each dispatched `FILM_FETCH_REQUESTED` action.
  Allows concurrent fetches of films.
*/
function* filmsSaga() {
  yield takeEvery("FETCH_FILMS", fetchFilms)
}


export default filmsSaga