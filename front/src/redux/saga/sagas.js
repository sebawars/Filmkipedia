import { all, call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api';
import { setFetchInfo } from '../actions/set-fetch-info';
import { setAuth } from '../actions/set-auth';
import { setEntities } from '../actions/set-entities';
import { setFilmsIds } from '../actions/set-films-ids';
import { normalizeFilms } from '../../redux/normalizers';
import { SET_FILMS as SET_FILMS_ACTION } from '../actions/set-films';

function* fetchFilms({ type, payload: { skip, search, order, auth } }) {
  let error = null;
  try {
    yield put(setFetchInfo({ films: { fetchError: error, fetching: true } }));
    if (type === SET_FILMS_ACTION) yield put(setFilmsIds([], 0));
    const data = yield call(api.film.list, skip, search, order, auth);

    const dataNormalizada = normalizeFilms(data.results);
    const entities = dataNormalizada.entities;
    const result = dataNormalizada.result;

    switch (type) {
      case SET_FILMS_ACTION:
        yield all([put(setEntities(entities)), put(setFilmsIds(result, data.totalCount))]);
        break;
      default:
        break;
    }
  } catch (e) {
    // TODO
    
    yield all([put(setAuth(null))]);
    error = e.message;
  } finally {
    yield put(setFetchInfo({ films: { fetchError: error, fetching: false } }));
  }
}

function* filmsSaga() {
  yield takeEvery(SET_FILMS_ACTION, fetchFilms);
}

export default filmsSaga;
