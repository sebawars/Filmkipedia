import React, { useState, useEffect, Fragment } from 'react'
import { ListFilm } from '../../components/ListFilm'
import { ListaPeliculas, OptionsContainer, OrderContainer, PaginationContainer } from './styles'
import api from '../../api'
import { Loader } from '../../components/Loader'
import { AiOutlineSortDescending, AiOutlineSortAscending } from 'react-icons/ai'
import Select from 'react-select'

export const ListOfFilms = () => {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState('')
  const [selectList, setSelectList] = useState([  { value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }])

  const customSelectStyles = {
    control: base => ({
      ...base,
      width: 150
    })
  };

  useEffect(function () {
    setLoading(true)
    api.film.list(order)
      .then(res => {
        setLoading(false)
        setFilms(res.body)
      })
  }, [order])

  return (
    <Fragment>
      {
        loading
          ? <Loader />
          : <Fragment>
              <OptionsContainer>
                <OrderContainer>
                  <span>Orden:&nbsp;&nbsp;</span><AiOutlineSortAscending size={ order==='asc' ? '37px' : '31px' } onClick={() => setOrder('asc')} />&nbsp;<AiOutlineSortDescending size={ order==='desc' ? '37px' : '31px' } onClick={() => setOrder('desc')} />
                </OrderContainer>
                <Select options={selectList} styles={customSelectStyles} placeholder='Página'/>

              </OptionsContainer>


              <ListaPeliculas>
                {
                  films.map(film => <ListFilm key={film.id} {...film} />)
                }
              </ListaPeliculas>
            </Fragment>

      }

    </Fragment>
  )
}
