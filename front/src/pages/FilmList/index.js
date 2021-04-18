import React, { useEffect, Fragment, useState } from 'react';
import { AiOutlineSortDescending, AiOutlineSortAscending } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { OptionsContainer, OrderContainer } from './styles';
import { Loader } from '../../components/Loader';
import { FilmsGrid } from '../../components/FilmsGrid';
import { FilmSearch } from '../../components/FilmSearch';
import { setFilms as setFilmsAction } from '../../redux/actions/set-films';
import qs from 'query-string';
import { Paginator } from '../../components/Paginator';
import { NoResults } from '../../components/NoResults';

const FilmList = ({ history }) => {
  // Redux
  const { fetchInfo, auth, entitiesIds } = useSelector((state) => state);
  const filmIds = entitiesIds.films.ids;
  const totalCount = entitiesIds.films.totalCount;

  // LOCAL STATE
  const orderValues = ['ASC', 'DESC'];
  const queryOrder = (new URLSearchParams(history.location.search).get('order') || '').toUpperCase();
  const initialOrder = orderValues.find((orderValue) => orderValue === queryOrder) || '';

  const initialSearch = new URLSearchParams(history.location.search).get('search') || '';

  const queryPage = new URLSearchParams(history.location.search).get('page') || 1;
  const initialPage = isNaN(queryPage) || queryPage < 0 || initialSearch !== '' ? 1 : queryPage;

  const [filters, setFilters] = useState({
    search: initialSearch,
    page: initialPage,
    order: initialOrder,
  });

  const { search, page, order } = filters;

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const dispatch = useDispatch();

  const filmsPerPage = parseInt(process.env.REACT_APP_FILMS_PER_PAGES);

  const setFilms = () => dispatch(setFilmsAction((page - 1) * filmsPerPage, search, order, auth));

  const updateQueryParamsFromState = () => {
    const newQueries = {};
    if (search) newQueries.search = search;
    if (order) newQueries.order = order;
    if (page) newQueries.page = page;

    history.push({ search: qs.stringify(newQueries) });
  };

  useEffect(() => {
    setFilms();
    updateQueryParamsFromState();
  }, [filters]);

  const resetPage = () => updateFilters({ page: 1 });

  const toggleQueryOrder = (newOrder) => {
    resetPage();
    if (order === newOrder) {
      history.replace({ path: location.origin + location.pathname + `?order=${newOrder}`, search: search });
      updateFilters({ order: '' });
    } else {
      history.replace({
        path: location.origin + location.pathname + `?order=${newOrder}`,
        search: `?order=${newOrder}` + search && `&search=${search}`,
      });
      updateFilters({ order: newOrder });
    }
  };

  const handlePageChange = (newPage) => {
    updateFilters({ page: newPage });
  };

  const handleSearch = (newSearch) => {
    resetPage();
    updateFilters({ search: newSearch });
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
              onClick={() => !fetchInfo.films.fetching && toggleQueryOrder('ASC')}
            />
            &nbsp;
            <AiOutlineSortDescending
              cursor='pointer'
              size={order.toUpperCase() === 'DESC' ? '1.9em' : '1.5em'}
              onClick={() => !fetchInfo.films.fetching && toggleQueryOrder('DESC')}
            />
          </OrderContainer>
          <FilmSearch setSearch={handleSearch} search={search} />
        </OptionsContainer>

        <FilmsGrid filmIds={filmIds} />

        {fetchInfo.films.fetching && <Loader />}
        {filmIds.length > 0 && (
          <Paginator
            onChange={handlePageChange}
            total={totalCount}
            disabled={fetchInfo.films.fetching}
            showSizeChanger={false}
            defaultCurrent={page}
            pageSize={process.env.REACT_APP_FILMS_PER_PAGES}
          />
        )}
        <NoResults fetching={fetchInfo.films.fetching} length={filmIds.length} />
      </>
    </Fragment>
  );
};

export default FilmList;
