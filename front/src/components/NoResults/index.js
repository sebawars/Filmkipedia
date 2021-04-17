import React from 'react';
import { NoResultsCont, PopCornIcon } from './styles';
import logo from '../../assets/empty-popcorn.svg';

export const NoResults = ({ fetching, length }) => {
  return (
    !fetching &&
    length === 0 && (
      <NoResultsCont>
        <PopCornIcon src={logo} />
        Sin Resultados
      </NoResultsCont>
    )
  );
};
