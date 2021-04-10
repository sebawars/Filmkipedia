import React, { useState, useEffect, Fragment } from 'react';
import { AiOutlineSortDescending, AiOutlineSortAscending } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { FilmsContainer, OptionsContainer, OrderContainer } from './styles';
import { Loader } from '../../components/Loader';
import { ListFilm } from '../../components/ListFilm';
import { fetchFilms as fetchFilmsAction } from '../../redux/actions/fetch-films';

const ListOfFilms = () => {
  const [order, setOrder] = useState(null);
  const [selectList] = useState([
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ]);

  // Redux
  const { fetchInfo, auth, result } = useSelector((state) => state);
  const filmIds = result;

  const dispatch = useDispatch();

  const fetchFilms = (take, skip, keyword, order, auth) => dispatch(fetchFilmsAction(take, skip, keyword, order, auth));

  const customSelectStyles = {
    control: (base) => ({
      ...base,
      width: 150,
    }),
  };

  useEffect(
    function () {
      fetchFilms(process.env.REACT_APP_FILMS_PER_PAGES, 0, 0, 'DESC', auth);
    },
    [order],
  );

  return (
    <Fragment>
      {fetchInfo.films.fetching ? (
        <Loader />
      ) : (
        <Fragment>
          <OptionsContainer>
            <OrderContainer>
              <span>Ordenar por:&nbsp;&nbsp;</span>
              <AiOutlineSortAscending size={order === 'ASC' ? '37px' : '31px'} onClick={() => setOrder('ASC')} />
              &nbsp;
              <AiOutlineSortDescending size={order === 'DESC' ? '37px' : '31px'} onClick={() => setOrder('DESC')} />
            </OrderContainer>
          </OptionsContainer>

          <FilmsContainer>{filmIds && filmIds.map((filmId) => <ListFilm key={filmId} id={filmId} />)}</FilmsContainer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ListOfFilms;
