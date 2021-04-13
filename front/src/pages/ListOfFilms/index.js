import React, { useState, useEffect, Fragment } from 'react';
import { AiOutlineSortDescending, AiOutlineSortAscending } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { FilmsContainer, OptionsContainer, OrderContainer } from './styles';
import { Loader } from '../../components/Loader';
import { ListFilm } from '../../components/ListFilm';
import { addFilms as addFilmsAction } from '../../redux/actions/add-films';
import { setFilms as setFilmsAction } from '../../redux/actions/set-films';

const ListOfFilms = ({ history }) => {
  const paramOrder = new URLSearchParams(history.location.search).get('order') || '';
  const [order, setOrder] = useState(paramOrder);
  const [currentPage, setCurrentPage] = useState(0);
  const [keywordToSearch, setKeywordToSearch] = useState('');
  // Redux
  const { fetchInfo, auth, result } = useSelector((state) => state);
  const filmIds = result;
  const dispatch = useDispatch();
  const setFilms = (newPage) => dispatch(setFilmsAction(newPage, keywordToSearch, order, auth));
  const addFilms = (newPage) => dispatch(addFilmsAction(newPage, keywordToSearch, order, auth));
  const addFollowingPage = () => {
    const nuevaPagina = currentPage + 1;
    setCurrentPage(nuevaPagina);
    addFilms(nuevaPagina);
  };

  const toggleQueryOrder = (newOrder) => {
    setCurrentPage(0);
    if (order === newOrder) {
      history.replace({ path: location.origin + location.pathname + `?order=${newOrder}`, search: null });
      setOrder('');
    } else {
      history.replace({
        path: location.origin + location.pathname + `?order=${newOrder}`,
        search: `?order=${newOrder}`,
      });
      setOrder(newOrder);
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
        </OptionsContainer>

        {filmIds.length > 0 && (
          <FilmsContainer>
            {filmIds.map((filmId) => (
              <ListFilm key={filmId} id={filmId} />
            ))}
          </FilmsContainer>
        )}
        {fetchInfo.films.fetching && <Loader />}
        <button onClick={() => addFollowingPage()}>Mostrar mas</button>
      </>
    </Fragment>
  );
};

export default ListOfFilms;
