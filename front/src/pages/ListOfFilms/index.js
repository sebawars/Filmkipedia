import React, { useState, useEffect, Fragment } from 'react';
import { AiOutlineSortDescending, AiOutlineSortAscending } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { FilmsContainer, OptionsContainer, OrderContainer } from './styles';
import { Loader } from '../../components/Loader';
import { ListFilm } from '../../components/ListFilm';
import { fetchFilms as fetchFilmsAction } from '../../redux/actions/fetch-films';

const ListOfFilms = ({ history }) => {
  const paramOrder = new URLSearchParams(history.location.search).get('order') || '';
  const [order, setOrder] = useState(paramOrder);
  // Redux
  const { fetchInfo, auth, result } = useSelector((state) => state);
  const filmIds = result;

  const dispatch = useDispatch();
  const fetchFilms = (skip, keyword, order, auth) => dispatch(fetchFilmsAction(skip, keyword, order, auth));

  useEffect(() => {
    filmIds.length < 10 && fetchFilms(0, 0, order, auth);
  }, [order]);

  const setStateAndQueryOrder = (newOrder) => {
    history.replace({ path: location.origin + location.pathname + `?order=${newOrder}`, search: `?order=${newOrder}` });
    setOrder(newOrder);
  };

  return (
    <Fragment>
      <>
        <OptionsContainer>
          <OrderContainer>
            <span>Ordenar&nbsp;&nbsp;</span>
            <AiOutlineSortAscending
              cursor='pointer'
              size={order.toUpperCase() === 'ASC' ? '1.9em' : '1.5em'}
              onClick={() => setStateAndQueryOrder('ASC')}
            />
            &nbsp;
            <AiOutlineSortDescending
              cursor='pointer'
              size={order.toUpperCase() === 'DESC' ? '1.9em' : '1.5em'}
              onClick={() => setStateAndQueryOrder('DESC')}
            />
          </OrderContainer>
        </OptionsContainer>

        {filmIds && (
          <FilmsContainer>
            {filmIds.map((filmId) => (
              <ListFilm key={filmId} id={filmId} />
            ))}
          </FilmsContainer>
        )}
        {fetchInfo.films.fetching && <Loader />}
        <button>Mostrar mas</button>
      </>
    </Fragment>
  );
};

export default ListOfFilms;
