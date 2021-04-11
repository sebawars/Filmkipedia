import React, { useState, Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Error, Form, Title, LoginButton } from './styles';
import { useDispatch } from 'react-redux';
import { setAuth as setAuthAction } from '../../redux/actions/set-auth';

const UserForm = ({ title, buttonTitle, onSubmit, fetching }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const [errForm, setErrForm] = useState('');

  // Redux
  const dispatch = useDispatch();
  const setAuth = (auth) => dispatch(setAuthAction(auth));

  const validateEmail = (email) => {
    // eslint-disable-next-line
    return email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  async function handleSubmit(event) {
    setErrForm('');

    event.preventDefault();

    if (!validateEmail(email.value)) {
      setErrForm('Email inválido');
    } else if (password.value === '') {
      setErrForm('Ingrese password');
    } else {
      const data = await onSubmit({
        username: email.value,
        password: password.value,
      });

      if (!data.access_token) setErrForm('Verifique usuario/contraseña');
      else {
        setErrForm('');
        setAuth(data.access_token);
      }
    }
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <input placeholder='Email' {...email} />
        <input placeholder='Password' type='password' {...password} />
        <LoginButton disabled={fetching}> {buttonTitle} </LoginButton>
        <br></br>
        {errForm && <Error>{errForm}</Error>}
      </Form>
    </Fragment>
  );
};

export default UserForm;
