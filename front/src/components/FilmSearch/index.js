import React from 'react';
import { Input } from 'antd';
import { useSelector } from 'react-redux';
const { Search } = Input;
import './styles.css';

export const FilmSearch = ({ setSearch }) => {
  // Redux
  const { fetchInfo } = useSelector((state) => state);
  const { loading } = fetchInfo;

  const handleSearch = (search) => {
    setSearch(search);
  };

  return <Search className='search-films' placeholder='Buscar' loading={loading} onSearch={handleSearch} />;
};
