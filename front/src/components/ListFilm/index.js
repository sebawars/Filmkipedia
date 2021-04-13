import React from 'react';
import { Link } from 'react-router-dom';
import { Article, Title, Imagen, TitleYear } from './styles';
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
    film && (
      <Article>
        <Link to={`/films/${film.id}`} state={film} style={linkStyle}>
          <Imagen src={film.image} />

          <TitleYear>
            <Title>{film.filmname + ` (${film.release})`}</Title>
          </TitleYear>
        </Link>
      </Article>
    )
  );
};
