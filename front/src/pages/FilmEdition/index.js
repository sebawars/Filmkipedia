import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api';
import { Film } from '../../components/Film';
import { FilmForm } from '../../components/FilmForm';
import { Loader } from '../../components/Loader';
import { FilmCard } from '../../components/FilmCard';
import { filmByIdSelector } from '../../redux/selectors/filmSelector';
import { setFetchInfo } from '../../redux/actions/set-fetch-info';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import './styles.css';
import { EditionContainer } from './styles';

export const FilmEdition = (props) => {
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

  return !filmData || fetchInfo.films.fetching ? (
    <Loader />
  ) : (
    <EditionContainer>
      <FilmCard style={{ width: '30em', height: '70%' }} film={filmData} />
      <FilmCard style={{ width: '30em', height: '70%' }} film={filmData} />
    </EditionContainer>
  );
};
