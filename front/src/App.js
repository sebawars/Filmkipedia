import React, { Fragment, useEffect } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyles, Main } from './styles/GlobalStyles'
import ListOfFilms from './pages/ListOfFilms'
import NavBar from './components/NavBar'
import { LoginPage } from './pages/Login'
import { FilmDetails } from './pages/FilmDetails'
import { useSelector, useDispatch } from 'react-redux';
import { setAuth as setAuthAction } from './redux/actions/set-auth';
import { setLoading as setLoadingAction } from './redux/actions/set-loading';
import { Loader } from './components/Loader'
import { getTokenStorage } from './util/storage'

const App = () => {

  const dispatch = useDispatch();
  const setAuth = (auth) => dispatch(setAuthAction(auth))
  const setLoading = (loading) => dispatch(setLoadingAction(loading))
  
  const auth = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.loading);

  useEffect( () => {
    const storageToken = getTokenStorage()

    if(storageToken !== null)
      setAuth(storageToken)

    setLoading(false)

    }, [])
    
    
    return (
      <Fragment>
        <GlobalStyles />
        <NavBar/>
        <Main>
          {
            (!auth && loading)
              ? <Loader />
              : <Router id="mainRouter">
                  { !auth && <LoginPage path='/' /> } 
                  { !auth && <Redirect noThrow from='/*' to='/' />}

                  { auth && <ListOfFilms path='/film' /> }
                  { auth && <FilmDetails path='/film/:filmId' />}
                  { auth && <Redirect noThrow from='/*' to='/film' />}
                </Router>
          }
        </Main>
      </Fragment>
  )
}

export default App;