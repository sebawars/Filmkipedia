import React from 'react';
import { Input } from 'antd';
import { useDispatch, useStore } from 'react-redux';
import { setFilms as setFilmsAction } from '../../redux/actions/set-films';
import { setFilmSearch as setFilmSearchAction } from '../../redux/actions/set-film-search';
const { Search } = Input;
import './styles.css';

export const FilmSearch = () => {
  // Redux
  const dispatch = useDispatch();
  const { filmFilters, fetchInfo } = useStore().getState();
  const { auth, order } = filmFilters;
  const { loading } = fetchInfo;

  const handleSearch = (keyword) => {
    dispatch(setFilmSearchAction(keyword));
    keyword && keyword !== '' && dispatch(setFilmsAction(0, keyword, order, auth));
  };

  return <Search className='search-films' placeholder='Buscar' loading={loading} onSearch={handleSearch} />;
};
