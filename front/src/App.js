import React, { useContext, Fragment } from 'react'
import { Router, Redirect } from '@reach/router'
import { Main } from './styles/Main'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfFilms } from './components/ListOfFilms'
import { NavBar } from './components/NavBar'
import { LoginPage } from './pages/Login'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Fragment>
      <GlobalStyles />
      <NavBar />
      <Main>
        <Router>
          { !isAuth && <LoginPage path='/' />}
          { isAuth && <ListOfFilms path='/films' />}
          { !isAuth && <Redirect noThrow from='/films' to='/' />}
          { isAuth && <Redirect noThrow from='/' to='/films' />}
        </Router>
      </Main>
    </Fragment>
  )
}
