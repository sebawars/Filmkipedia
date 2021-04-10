import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from '@reach/router';
import api from '../../api';
import { Film } from '../../components/Film';
import { FilmForm } from '../../components/FilmForm';
import { Loader } from '../../components/Loader';
import { filmByIdSelector } from '../../redux/selectors/filmSelector';
import { setFetchInfo } from '../../redux/actions/set-fetch-info';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import 'react-select-search/style.css';

export const FilmDetails = ({ filmId }) => {
  const [filmData, setFilmData] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [listableActors, setListableActors] = useState([]);
  const [listableDirectors, setListableDirectors] = useState([]);

  const state = useSelector((state) => state);
  const { fetchInfo, auth, result } = state;
  const filmWithId = filmByIdSelector(filmId)(state);

  const handleChange = (e) => {
    setFilmData({
      ...filmData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    async function asyncEffect() {
      dispatch(setFetchInfo({ films: { fetchError: null, fetching: true } }));

      try {
        if (filmWithId) {
          setFilmData(filmWithId);
        } else {
          const fetchedFilm = await api.film.findById(filmId, auth);
          setFilmData(fetchedFilm);
        }

        const fetchedActors = await api.actor.list(auth);
        const listableActors = fetchedActors.map((actor) => ({
          name: `${actor.name} ${actor.surname}`,
          value: actor.id,
        }));
        setListableActors(listableActors);
        const fetchedDirectors = await api.director.list(auth);
        const listableDirectors = fetchedDirectors.map((director) => ({
          name: `${director.name} ${director.surname}`,
          value: director.id,
        }));
        setListableDirectors(listableDirectors);

        dispatch(setFetchInfo({ films: { fetchError: null, fetching: false } }));
      } catch (error) {
        dispatch(setFetchInfo({ films: { fetchError: error, fetching: false } }));
      }
    }

    asyncEffect();
  }, []);

  return fetchInfo.films.fetching ? (
    <Loader />
  ) : !redirect ? (
    <Fragment>
      <Film {...filmData} key={1} onChange={handleChange}></Film>
      <FilmForm {...filmData} key={2} onChange={handleChange} />
      <SelectSearch
        options={listableActors}
        multiple
        search
        //onChange={(valores) => alert(valores[0])}
        printOptions='on-focus'
        filterOptions={fuzzySearch}
        placeholder='Agregar actores'
      />
      <SelectSearch
        options={listableDirectors}
        search
        //onChange={(valores) => alert(valores[0])}
        printOptions='on-focus'
        filterOptions={fuzzySearch}
        placeholder='Seleccionar director'
      />
    </Fragment>
  ) : (
    <Redirect noThrow to='/films' />
  );
};
