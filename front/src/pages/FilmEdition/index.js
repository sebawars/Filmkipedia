import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/Loader';
import { FilmEditionCard } from '../../components/FilmEditionCard';
import { filmByIdSelector } from '../../redux/selectors/filmSelector';
import { setFetchInfo } from '../../redux/actions/set-fetch-info';
import { EditionContainer, ButtonsContainer } from './styles';
import { FilmDetailsModal } from '../../components/FilmDetailsModal';
import { IdcardOutlined, SaveOutlined, RollbackOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import './styles.css';
import api from '../../api';

export const FilmEdition = (props) => {
  const [film, setFilm] = useState();
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [initialFilm, setInitialFilm] = useState({});

  const store = useSelector((state) => state);
  const { fetchInfo, auth } = store;
  const filmId = props.match.params.filmId;
  const filmWithId = filmByIdSelector(filmId)(store);

  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);

  const showDetailsModal = () => setIsDetailsModalVisible(true);
  const hideDetailsModal = () => setIsDetailsModalVisible(false);
  const unDoChanges = () => {
    setFilm(initialFilm);
  };

  const saveChanges = async () => {
    dispatch(setFetchInfo({ films: { fetchError: null, fetching: true } }));
    try {
      await api.film.save(filmId, film, auth);
      dispatch(setFetchInfo({ films: { fetchError: null, fetching: false } }));
      Modal.success({
        centered: true,
        content: 'Guardado con éxito',
      });
    } catch (error) {
      dispatch(setFetchInfo({ films: { fetchError: error, fetching: false } }));
      Modal.warning({
        centered: true,
        content: 'Hubo un inconveniente',
      });
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    async function asyncEffect() {
      // Seteamos loading en Redux
      dispatch(setFetchInfo({ films: { fetchError: null, fetching: true } }));

      try {
        if (filmWithId) {
          // Encontramos la pelicula en el store. No fetcheamos
          setFilm(filmWithId);
          setInitialFilm(filmWithId);
          console.log('initialFilm: ' + JSON.stringify(initialFilm));
        } else {
          // No encontramos la pelicula en el store. Fetcheamos
          const fetchedFilm = await api.film.findById(filmId, auth);
          setFilm(fetchedFilm);
          setInitialFilm(fetchedFilm);
          console.log('initialFilm: ' + JSON.stringify(initialFilm));
        }

        const [fetchedActors, fetchedDirectors] = await Promise.all([api.actor.list(auth), api.director.list(auth)]);

        setActors(fetchedActors);
        setDirectors(fetchedDirectors);

        dispatch(setFetchInfo({ films: { fetchError: null, fetching: false } }));
      } catch (error) {
        dispatch(setFetchInfo({ films: { fetchError: error, fetching: false } }));
      }
    }

    asyncEffect();
  }, []);

  return !film ? (
    <Loader />
  ) : (
    <>
      <EditionContainer>
        <h2>Edición</h2>
        <FilmEditionCard film={film} setFilm={setFilm} actors={actors} directors={directors} />
        <ButtonsContainer>
          <Button style={{ width: 'auto' }} onClick={showDetailsModal} icon={<IdcardOutlined />}>
            Preview
          </Button>
          <Button
            style={{ width: 'auto' }}
            loading={fetchInfo.films.fetching}
            onClick={saveChanges}
            icon={<SaveOutlined />}
          >
            Guardar
          </Button>
          <Button style={{ width: 'auto' }} onClick={unDoChanges} icon={<RollbackOutlined />}>
            Deshacer
          </Button>
        </ButtonsContainer>
      </EditionContainer>
      <FilmDetailsModal film={film} isModalVisible={isDetailsModalVisible} handleCancel={hideDetailsModal} />
    </>
  );
};
