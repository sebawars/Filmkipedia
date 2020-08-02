import React, { useState, useEffect } from 'react'
import { Film } from '../Film'
import { FilmsContainer, ListaPeliculas } from './styles'
import api from '../../api'
import { Loader } from '../Loader'

export const ListOfFilms = () => {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    api.film.list()
      .then(res => {
        console.log(res.body)
        setFilms(res.body)
        setLoading(false)
      })
  }, [])

  return (
    <FilmsContainer>
      <ListaPeliculas>
        {
          loading
            ? <Loader />
            : films.map(film => <Film key={film.id} {...film} />)
        }
      </ListaPeliculas>
    </FilmsContainer>
  )
}
