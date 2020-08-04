import React, { useContext, Fragment } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyles, Main } from './styles/GlobalStyles'
import { ListOfFilms } from './pages/ListOfFilms'
import { NavBar } from './components/NavBar'
import { LoginPage } from './pages/Login'
import { Context } from './Context'
import { FilmDetails } from './pages/FilmDetails'

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Fragment>
      <GlobalStyles />
      <NavBar isAuth={isAuth}/>
      <Main>
        <Router id="mainRouter">
          { !isAuth && <LoginPage path='/' />}
          { !isAuth && <Redirect noThrow from='/*' to='/' />}
          { isAuth && <ListOfFilms path='/film' />}
          { isAuth && <FilmDetails path='/film/:filmId' />}
          { isAuth && <Redirect noThrow from='/*' to='/film' />}
        </Router>
      </Main>
    </Fragment>
  )
}
