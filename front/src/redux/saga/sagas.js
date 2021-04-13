import { all, call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api';
import { setFetchInfo } from '../actions/set-fetch-info';
import { setAuth } from '../actions/set-auth';
import { addEntities } from '../actions/add-entities';
import { addResult } from '../actions/add-result';
import { setEntities } from '../actions/set-entities';
import { setResult } from '../actions/set-result';
import { normalizeFilms } from '../../redux/normalizers';
import { ADD_FILMS as ADD_FILMS_ACTION } from '../actions/add-films';
import { SET_FILMS as SET_FILMS_ACTION } from '../actions/set-films';

function* fetchFilms({ type, payload: { skip, keyword, order, auth } }) {
  let error = null;
  try {
    yield put(setFetchInfo({ films: { fetchError: error, fetching: true } }));
    const data = yield call(api.film.list, skip, keyword, order, auth);

    const dataNormalizada = normalizeFilms(data);
    const entities = dataNormalizada.entities;
    const result = dataNormalizada.result;
    switch (type) {
      case ADD_FILMS_ACTION:
        yield all([put(addEntities(entities)), put(addResult(result))]);
        break;
      case SET_FILMS_ACTION:
        yield all([put(setEntities(entities)), put(setResult(result))]);
        break;
      default:
        break;
    }
  } catch (e) {
    // TODO
    yield all([put(setAuth(auth))]);
    error = e.message;
  } finally {
    yield put(setFetchInfo({ films: { fetchError: error, fetching: false } }));
  }
}

function* filmsSaga() {
  yield takeEvery(ADD_FILMS_ACTION, fetchFilms);
  yield takeEvery(SET_FILMS_ACTION, fetchFilms);
}

export default filmsSaga;
