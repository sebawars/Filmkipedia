import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from '@reach/router'
import api from '../../api';
import { Film } from '../../components/Film'
import { FilmForm } from '../../components/FilmForm'
import { Loader } from '../../components/Loader'
import { filmByIdSelector } from '../../redux/selectors/filmSelector'
import { setFetchInfo } from '../../redux/actions/set-fetch-info';

export const FilmDetails = ({ filmId }) => {
  const [ filmData, setFilmData ] = useState(null)
  const [ redirect, setRedirect ] = useState(false)
  
  const state = useSelector((state) => state)
  const { fetchInfo, auth, result } = state
  const filmWithId = filmByIdSelector(filmId)(state)

  const handleChange = e => {
    setFilmData({
        ...filmData,
        [e.target.name]: e.target.value
    })
  }

  const dispatch = useDispatch();

  useEffect(() => {

    async function asyncEffect() {
      if(filmWithId)
        setFilmData(filmWithId);
      else {
        const fetchedFilm = await api.film.findById(filmId, auth);
        console.log('fetchedFilm: '+ fetchedFilm)
        setFilmData(fetchedFilm);
        dispatch(setFetchInfo({films:{fetchError: null, fetching: false}}))
      }
    }

    asyncEffect();

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
