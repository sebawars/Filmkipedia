import React from 'react';
import { LoaderCont } from './styles';
import { PopCornIcon } from './styles';
import logo from '../../assets/popcorn.svg';

export const Loader = () => {
  return (
    <LoaderCont>
      <PopCornIcon src={logo} alt='Logo' />
    </LoaderCont>
  );
};
