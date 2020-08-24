import React, { useState, useEffect, Fragment } from 'react'
import Select from 'react-select'
import { AiOutlineSortDescending, AiOutlineSortAscending } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';

import { FilmsContainer, OptionsContainer, OrderContainer } from './styles'
import { Loader } from '../../components/Loader'
import { ListFilm } from '../../components/ListFilm'
import { fetchFilms as fetchFilmsAction } from '../../redux/actions/fetch-films';
import { filmIdListSelector } from '../../redux/selectors/filmSelector'

const ListOfFilms = () => {

  const [order, setOrder] = useState(null)
  const [selectList] = useState([  { value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }])

  // Redux
  const auth = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.loading);
  const state = useSelector((state) => state);
  const filmIds = filmIdListSelector(state)

  const dispatch = useDispatch();
  
  const fetchFilms = (id, order, auth) => dispatch(fetchFilmsAction(id, order, auth))

  const customSelectStyles = {
    control: base => ({
      ...base,
      width: 150
    })
  };

  useEffect(function () {
    fetchFilms(null, order, auth)
  }, [order])

  return (
    <Fragment>
      {
        loading
          ? <Loader />
          : <Fragment>
              <OptionsContainer>
                <OrderContainer>
                  <span>Orden:&nbsp;&nbsp;</span><AiOutlineSortAscending size={ order==='ASC' ? '37px' : '31px' } onClick={() => setOrder('ASC')} />&nbsp;<AiOutlineSortDescending size={ order==='DESC' ? '37px' : '31px' } onClick={() => setOrder('DESC')} />
                </OrderContainer>
                <Select options={selectList} styles={customSelectStyles} placeholder='Página'/>

              </OptionsContainer>


              <FilmsContainer>
                {
                  filmIds.map(filmId => <ListFilm key={filmId} id={filmId} />)
                }
              </FilmsContainer>
            </Fragment>

      }

    </Fragment>
  )
}

export default ListOfFilms;