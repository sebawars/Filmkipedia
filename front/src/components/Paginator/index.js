import { Pagination } from 'antd';
import { PaginatorContainer } from './styles';
import React from 'react';

export const Paginator = (props) => {
  return (
    <PaginatorContainer>
      <Pagination {...props} />
    </PaginatorContainer>
  );
};
