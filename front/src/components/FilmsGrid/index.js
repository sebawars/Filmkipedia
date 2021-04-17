import React from 'react';
import { Row } from 'antd';
import { ListFilm } from '../ListFilm';

export const FilmsGrid = ({ filmIds }) => {
  return (
    filmIds.length > 0 && (
      <Row justify='center' style={{ padding: '3em' }} gutter={[16, 16]}>
        {filmIds.map((filmId) => (
          <ListFilm key={filmId} id={filmId} />
        ))}
      </Row>
    )
  );
};
