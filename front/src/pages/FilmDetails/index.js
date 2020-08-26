import React, { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilms as fetchFilmsAction } from '../../redux/actions/fetch-films'
import { Redirect } from '@reach/router'

import { Film } from '../../components/Film'
import { FilmForm } from '../../components/FilmForm'
import { Loader } from '../../components/Loader'
import { filmByIdSelector } from '../../redux/selectors/filmSelector'

export const FilmDetails = (props) => {
  const [ filmData, setFilmData ] = useState(null)
  const [ redirect, setRedirect ] = useState(false)
  
  const state = useSelector((state) => state)
  const { fetchInfo, auth, result } = state
  const filmWithId = filmByIdSelector(props.filmId)(state)
  
  const dispatch = useDispatch()
  
  const fetchFilms = (id, order, auth) => dispatch(fetchFilmsAction(id, order, auth))

  const handleChange = e => {
    setFilmData({
        ...filmData,
        [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(!result){
      fetchFilms(null, null, auth)
    }
    
    if(!fetchInfo.films.fetching){
      setFilmData(filmWithId)  
    }
  }, [fetchInfo.films.fetching])
  
  
  useEffect(() => {
    if(result){
      if((!fetchInfo.films.fetching && !filmWithId)){
        setRedirect(true)
      }
      
    }
  }, [result])
  
  return (
    fetchInfo.films.fetching
    ? <Loader />
    : ! redirect
        ? 
          <Fragment>
              { filmData && <Film {...filmData} key={1} onChange={handleChange}></Film> }
              { filmData && <FilmForm {...filmData} key={2} onChange={handleChange}/> }
          </Fragment>
        : <Redirect noThrow to='/films' />
  )
}
