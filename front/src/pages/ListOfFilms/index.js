import React, { useState, useEffect, Fragment } from 'react'
import Select from 'react-select'
import { AiOutlineSortDescending, AiOutlineSortAscending } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { setEntities as setEntitiesAction } from '../../redux/actions/set-entities';
import { setResult as setResultAction } from '../../redux/actions/set-result';
import { setLoading as setLoadingAction } from '../../redux/actions/set-loading';
import { setAuth as setAuthAction } from '../../redux/actions/set-auth';

import { Loader } from '../../components/Loader'
import { ListFilm } from '../../components/ListFilm'
import { FilmsContainer, OptionsContainer, OrderContainer } from './styles'
import api from '../../api'
import { normalizeFilms } from '../../redux/normalizers'
import { filmListSelector } from '../../redux/selectors/filmSelector'
import { removeTokenStorage } from '../../util/storage'

const ListOfFilms = () => {

  const [order, setOrder] = useState(null)
  const [selectList] = useState([  { value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }])

  // Redux
  const auth = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.loading);
  const state = useSelector((state) => state);
  const films = filmListSelector(state)

  const dispatch = useDispatch();
  
  const setAuth = (auth) => dispatch(setAuthAction(auth))  
  const setEntities = (entities) => dispatch(setEntitiesAction(entities))
  const setResult = (result) => dispatch(setResultAction(result))
  const setLoading = (loading) => dispatch(setLoadingAction(loading))

  const customSelectStyles = {
    control: base => ({
      ...base,
      width: 150
    })
  };



  useEffect(function () {
    setLoading(true)
    api.film.list(order, auth)
      .then(res => {
        console.log('FETCH!')

        if(res.status === 200){
          const dataNormalizada = normalizeFilms(res.data)
          const entities = dataNormalizada.entities
          const result = dataNormalizada.result
          console.log('res.data: '+ JSON.stringify(res.data))
          console.log('dataNormalizada: '+ JSON.stringify(dataNormalizada))
          setEntities(entities)
          setResult(result)
        } else{
          removeTokenStorage()
          setAuth(null)  
        }
        setLoading(false)
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
                  <span>Orden:&nbsp;&nbsp;</span><AiOutlineSortAscending size={ order==='ASC' ? '37px' : '31px' } onClick={() => setOrder('ASC')} />&nbsp;<AiOutlineSortDescending size={ order==='DESC' ? '37px' : '31px' } onClick={() => setOrder('DESC')} />
                </OrderContainer>
                <Select options={selectList} styles={customSelectStyles} placeholder='Página'/>

              </OptionsContainer>


              <FilmsContainer>
                {
                  films.map(film => <ListFilm key={film.id} id={film.id} />)
                }
              </FilmsContainer>
            </Fragment>

      }

    </Fragment>
  )
}

export default ListOfFilms;