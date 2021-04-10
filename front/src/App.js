import React, { Fragment } from 'react';
import { Router, Redirect } from '@reach/router';
import { GlobalStyles, Main } from './styles/GlobalStyles';
import ListOfFilms from './pages/ListOfFilms';
import NavBar from './components/NavBar';
import { LoginPage } from './pages/Login';
import { FilmDetails } from './pages/FilmDetails';
import { useSelector } from 'react-redux';

const App = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <Fragment>
      <GlobalStyles />
      <NavBar />
      <Main>
        {
          <Router id='mainRouter'>
            {!auth && <LoginPage path='/' />}
            {!auth && <Redirect noThrow from='/*' to='/' />}

            {auth && <ListOfFilms path='/film' />}
            {auth && <FilmDetails path='/film/:filmId' />}
            {auth && <Redirect noThrow from='/*' to='/film' />}
          </Router>
        }
      </Main>
    </Fragment>
  );
};

export default App;
