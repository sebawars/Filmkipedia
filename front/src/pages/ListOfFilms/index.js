import React, { useEffect, Fragment, useState } from 'react';
import { AiOutlineSortDescending, AiOutlineSortAscending } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { FilmsContainer, OptionsContainer, OrderContainer } from './styles';
import { Loader } from '../../components/Loader';
import { ListFilm } from '../../components/ListFilm';
import { FilmSearch } from '../../components/FilmSearch';
import { addFilms as addFilmsAction } from '../../redux/actions/add-films';
import { setFilms as setFilmsAction } from '../../redux/actions/set-films';
import qs from 'query-string';

const ListOfFilms = ({ history }) => {
  // Redux
  const { fetchInfo, auth, entitiesIds } = useSelector((state) => state);
  const filmIds = entitiesIds.films.ids;
  const totalCount = entitiesIds.films.totalCount;

  // SET INICIAL DE SEARCH DESDE QUERY PARAM
  const [search, setSearch] = useState(new URLSearchParams(history.location.search).get('search') || '');

  // SET INICIAL DE ORDER DESDE QUERY PARAM
  const queryOrder = (new URLSearchParams(history.location.search).get('order') || '').toUpperCase();
  const orderValues = ['ASC', 'DESC'];
  const queryOrderOrDefault = orderValues.find((orderValue) => orderValue === queryOrder) || '';
  const [order, setOrder] = useState(queryOrderOrDefault);

  // SET INICIAL DE PAGE DESDE QUERY PARAM
  let queryPage = new URLSearchParams(history.location.search).get('page');
  if (isNaN(queryPage) || queryPage < 0) queryPage = 1;
  const [page, setPage] = useState(queryPage || 1);

  const dispatch = useDispatch();

  const filmsPerPage = parseInt(process.env.REACT_APP_FILMS_PER_PAGES);

  const setFilms = () => dispatch(setFilmsAction((page - 1) * filmsPerPage, search, order, auth));
  const addFilms = (newPage) => dispatch(addFilmsAction((newPage - 1) * filmsPerPage, search, order, auth));

  const updateQueryParamsFromState = () => {
    const newQueries = {};
    if (search) newQueries.search = search;
    if (order) newQueries.order = order;
    if (page) newQueries.page = page;

    history.push({ search: qs.stringify(newQueries) });
  };

  const addFollowingPage = () => {
    const newPage = page + 1;
    setPage(newPage);
    addFilms(newPage);
  };

  const toggleQueryOrder = (newOrder) => {
    setPage(0);
    if (order === newOrder) {
      history.replace({ path: location.origin + location.pathname + `?order=${newOrder}`, search: search });
      setOrder('');
    } else {
      history.replace({
        path: location.origin + location.pathname + `?order=${newOrder}`,
        search: `?order=${newOrder}` + search && `&search=${search}`,
      });
      setOrder(newOrder);
    }
  };

  const availablePages = filmIds.length < totalCount;

  useEffect(() => {
    setFilms();
  }, [order, search]);

  useEffect(() => {
    updateQueryParamsFromState();
  }, [order, search, page]);

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
          <FilmSearch setSearch={setSearch} search={search} />
        </OptionsContainer>

        {filmIds.length > 0 && (
          <FilmsContainer>
            {filmIds.map((filmId) => (
              <ListFilm key={filmId} id={filmId} />
            ))}
          </FilmsContainer>
        )}
        {fetchInfo.films.fetching && <Loader />}
        {filmIds.length > 0 && availablePages && <button onClick={() => addFollowingPage()}>Mostrar mas</button>}
      </>
    </Fragment>
  );
};

export default ListOfFilms;
