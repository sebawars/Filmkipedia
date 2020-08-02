import React, { useState, useContext, Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Title, SubmitButton } from './styles'
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

    event.preventDefault()

    console.log('password.value: ' + password.value)

    if (!validateEmail(email.value)) {

      console.log('REVISE EMAIL!!!!')
      console.log('email.value: ' + email.value)
      setErrForm('Email inválido')

    } else if (password.value == '') {

      console.log('INGRESE PASS!!!!')
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
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <SubmitButton> {buttonTitle} </SubmitButton>
        <br></br>
        {errForm && <Error>{errForm}</Error>}
      </Form>
    </Fragment>
  )
}
