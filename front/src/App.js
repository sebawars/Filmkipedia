import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
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
      {
        <BrowserRouter id='mainBrowserRouter'>
          <>
            <NavBar />
            <Main>
              <Switch>
                {!auth && <Route path='/' component={LoginPage} />}
                {!auth && <Route noThrow from='/*' to='/' />}

                {auth && <Route path='/films/:filmId' component={FilmDetails} />}
                {auth && <Route path='/films' component={ListOfFilms} />}
                {auth && (
                  <Route path='/*'>
                    <Redirect to='/films' />
                  </Route>
                )}
              </Switch>
            </Main>
          </>
        </BrowserRouter>
      }
    </Fragment>
  );
};

export default App;
