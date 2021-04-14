import React, { useState, useEffect, Fragment } from 'react';
import { AiOutlineSortDescending, AiOutlineSortAscending } from 'react-icons/ai';
import { useDispatch, useStore } from 'react-redux';
import { FilmsContainer, OptionsContainer, OrderContainer } from './styles';
import { Loader } from '../../components/Loader';
import { ListFilm } from '../../components/ListFilm';
import { FilmSearch } from '../../components/FilmSearch';
import { addFilms as addFilmsAction } from '../../redux/actions/add-films';
import { setFilms as setFilmsAction } from '../../redux/actions/set-films';
import { setFilmSearch as setFilmSearchAction } from '../../redux/actions/set-film-search';
import { setFilmOrder as setFilmOrderAction } from '../../redux/actions/set-film-order';

const ListOfFilms = ({ history }) => {
  const setOrder = (newOrder) => dispatch(setFilmOrderAction(newOrder));
  const setKeyword = (newKeyword) => dispatch(setFilmSearchAction(newKeyword));

  const dispatch = useDispatch();
  const orderParam = new URLSearchParams(history.location.search).get('order') || '';
  const keywordParam = new URLSearchParams(history.location.search).get('keyword') || '';
  setOrder(orderParam);
  setKeyword(keywordParam);

  const [currentPage, setCurrentPage] = useState(0);

  // Redux
  const { fetchInfo, auth, result, filmFilters } = useStore().getState();
  const { keyword, order } = filmFilters;
  const filmIds = result;

  const setFilms = (newPage) => dispatch(setFilmsAction(newPage, keyword, order, auth));
  const addFilms = (newPage) => dispatch(addFilmsAction(newPage, keyword, order, auth));

  const addFollowingPage = () => {
    const nuevaPagina = currentPage + 1;
    setCurrentPage(nuevaPagina);
    addFilms(nuevaPagina);
  };

  const toggleQueryOrder = (newOrder) => {
    setCurrentPage(0);
    if (order === newOrder) {
      history.replace({ path: location.origin + location.pathname + `?order=${newOrder}`, search: keyword });
      setOrder('');
    } else {
      history.replace({
        path: location.origin + location.pathname + `?order=${newOrder}`,
        search: `?order=${newOrder}` + keyword && `&keyword=${keyword}`,
      });
      dispatch(setFilmSearchAction(newOrder));
    }
  };

  useEffect(() => {
    setFilms(currentPage);
  }, [order]);

  return (
    <Fragment>
      <>
        <OptionsContainer>
          <OrderContainer>
            <span>Ordenar&nbsp;&nbsp;</span>
            <AiOutlineSortAscending
              cursor='pointer'
              size={order.toUpperCase() === 'ASC' ? '1.9em' : '1.5em'}
              onClick={() => !fetchInfo.films.fetching && toggleQueryOrder('ASC')}
            />
            &nbsp;
            <AiOutlineSortDescending
              cursor='pointer'
              size={order.toUpperCase() === 'DESC' ? '1.9em' : '1.5em'}
              onClick={() => !fetchInfo.films.fetching && toggleQueryOrder('DESC')}
            />
          </OrderContainer>
          <FilmSearch />
        </OptionsContainer>

        {filmIds.length > 0 && (
          <FilmsContainer>
            {filmIds.map((filmId) => (
              <ListFilm key={filmId} id={filmId} />
            ))}
          </FilmsContainer>
        )}
        {fetchInfo.films.fetching && <Loader />}
        {filmIds.length > 0 && <button onClick={() => addFollowingPage()}>Mostrar mas</button>}
      </>
    </Fragment>
  );
};

export default ListOfFilms;
