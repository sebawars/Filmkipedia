import React from 'react';
import UserForm from '../../components/UserForm';
import api from '../../api';
import { FormsContainer } from './styles';

export const LoginPage = () => {
  const onSubmitLogin = async (inputUser) => {
    const res = await api.user.login(inputUser);

    return res.data;
  };

  const onSubmitRegister = async (inputUser) => {
    const res = await api.user.register(inputUser);

    if (res.status !== 201) {
      return {};
    }

    const body = await api.user.login(inputUser);

    return body.data;
  };

  return (
    <FormsContainer>
      <UserForm title='Iniciar sesión' buttonTitle='Login' onSubmit={onSubmitLogin} />
      <UserForm title='Registro' buttonTitle='Registro' onSubmit={onSubmitRegister} />
    </FormsContainer>
  );
};
