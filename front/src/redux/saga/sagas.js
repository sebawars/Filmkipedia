import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api'
import { removeTokenStorage } from '../../util/storage'
import { setLoading } from '../actions/set-loading'
import { setAuth } from '../actions/set-auth'
import { setEntities } from '../actions/set-entities'
import { setResult } from '../actions/set-result'
import { setFetchError } from '../actions/set-fetch-error'
import { normalizeFilms } from '../../redux/normalizers'


// worker Saga: will be fired on FILM_FETCH_REQUESTED actions
function* fetchFilms({type, payload:{id, order, auth}}) {
   try {
      yield put(setLoading(true))
      const data = yield call(api.film.list, order, auth)
      
      const dataNormalizada = normalizeFilms(data)
      const entities = dataNormalizada.entities
      const result = dataNormalizada.result

      yield put(setEntities(entities))
      yield put(setResult(result))

      yield put(setFetchError(null))
   } catch (e) {
      // TODO
      yield removeTokenStorage()
      yield put(setAuth(auth))
      yield put(setFetchError(e.message))
   } finally{
      yield put(setLoading(false))
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