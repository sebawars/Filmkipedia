import React from 'react';
import { Input } from 'antd';
import { useSelector } from 'react-redux';
const { Search } = Input;
import './styles.css';

export const FilmSearch = ({ search, setSearch }) => {
  // Redux
  const { fetchInfo } = useSelector((state) => state);

  const handleSearch = (search) => {
    setSearch(search);
  };

  return (
    <Search
      style={{ minWidth: '10em' }}
      allowClear
      className='search-films'
      placeholder={search || 'Buscar'}
      loading={fetchInfo.films.fetching}
      onSearch={handleSearch}
    />
  );
};
