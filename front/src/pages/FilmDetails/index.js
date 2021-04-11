import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api';
import { Film } from '../../components/Film';
import { FilmForm } from '../../components/FilmForm';
import { Loader } from '../../components/Loader';
import { filmByIdSelector } from '../../redux/selectors/filmSelector';
import { setFetchInfo } from '../../redux/actions/set-fetch-info';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import 'react-select-search/style.css';

export const FilmDetails = (props) => {
  const [filmData, setFilmData] = useState(null);
  const [listableActors, setListableActors] = useState([]);
  const [listableDirectors, setListableDirectors] = useState([]);

  const state = useSelector((state) => state);
  const { fetchInfo, auth } = state;
  const filmId = props.match.params.filmId;
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
      // Seteamos loading en Redux
      dispatch(setFetchInfo({ films: { fetchError: null, fetching: true } }));

      try {
        if (filmWithId) {
          // Encontramos la pelicula en el store. No fetcheamos
          setFilmData(filmWithId);
        } else {
          // No encontramos la pelicula en el store. Fetcheamos
          const fetchedFilm = await api.film.findById(filmId, auth);
          setFilmData(fetchedFilm);
        }

        const [fetchedActors, fetchedDirectors] = await Promise.all([api.actor.list(auth), api.director.list(auth)]);

        const listableActors = fetchedActors.map((actor) => ({
          name: `${actor.name} ${actor.surname}`,
          value: actor.id,
        }));

        const listableDirectors = fetchedDirectors.map((director) => ({
          name: `${director.name} ${director.surname}`,
          value: director.id,
        }));
        setListableActors(listableActors);
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
  ) : (
    <>
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
    </>
  );
};
