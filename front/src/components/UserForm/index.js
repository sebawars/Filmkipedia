import React, { useState, useContext, Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Title } from './styles'
import { Context } from '../../Context'

export const UserForm = ({ title, buttonTitle, onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const [ errForm, setErrForm ] = useState('')
  const { activateAuth } = useContext(Context)

  const validateEmail = (email) => {
    return ((email) && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
  }

  const handleSubmit = async (event) => {

    setErrForm('')

    event.preventDefault()

    if (!validateEmail(email.value)) {
      setErrForm('Email inválido')
    } else if (password.value == '') {
      setErrForm('Ingrese password')
    } else {
      const data = await onSubmit({
        username: email.value,
        password: password.value
      })

      if (data.error) setErrForm(data.body)

      else { 
        setErrForm('')
        activateAuth(data.body)
      }

    }

  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <input placeholder='Email' {...email} />
        <input placeholder='Password' type='password' {...password} />
        <button> {buttonTitle} </button>
        <br></br>
        {errForm && <Error>{errForm}</Error>}
      </Form>
    </Fragment>
  )
}
