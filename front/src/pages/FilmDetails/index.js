import React, { Fragment, useState } from 'react'
import { Film } from '../../components/Film'
import { FilmForm } from '../../components/FilmForm'

export const FilmDetails = (props) => {

  const [ filmData, setFilmData ] = useState({...props.location.state})

  const handleChange = e => {
    setFilmData({
        ...filmData,
        [e.target.name]: e.target.value
    });
  };

  

  return (
    <Fragment>
      <Film {...filmData} key={1} onChange={handleChange}></Film>
      <FilmForm {...filmData} key={2} onChange={handleChange}/>
    </Fragment>
  )
}
