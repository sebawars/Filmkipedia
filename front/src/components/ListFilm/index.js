import React from 'react';
import { Link } from '@reach/router';
import { Article, Title, Imagen, Anio, TitleYear } from './styles';
import { filmByIdSelector } from '../../redux/selectors/filmSelector';
import { useSelector } from 'react-redux';

export const ListFilm = ({ id }) => {
  const state = useSelector((state) => state);
  const film = filmByIdSelector(id)(state);

  const linkStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <Article>
      <Link to={`/film/${film.id}`} state={film} style={linkStyle}>
        <Imagen src={film.image} />

        <TitleYear>
          <Title>{film.filmname + ` (${film.release})`}</Title>
        </TitleYear>
      </Link>
    </Article>
  );
};
