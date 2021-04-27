import React from 'react';
import UserForm from '../../components/UserForm';
import api from '../../api';
import { FormsContainer } from './styles';
import { Loader } from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setFetchInfo } from '../../redux/actions/set-fetch-info';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { fetchInfo } = state;

  const setLoadingAuth = (error, estado) => dispatch(setFetchInfo({ auth: { fetchError: error, fetching: estado } }));

  const onSubmitLogin = async (inputUser) => {
    setLoadingAuth(null, true);
    try {
      const res = await api.user.login(inputUser);
      if (res.status !== 200) {
        setLoadingAuth(null, false);
        return {};
      }
      setLoadingAuth(null, false);
      return res.data;
    } catch (error) {
      setLoadingAuth(error, false);
    }
  };

  const onSubmitRegister = async (inputUser) => {
    setLoadingAuth(null, true);
    try {
      const res = await api.user.register(inputUser);

      if (res.status !== 201) {
        setLoadingAuth(null, false);
        return {};
      }

      const body = await api.user.login(inputUser);

      setLoadingAuth(null, false);
      return body.data;
    } catch (error) {
      setLoadingAuth(error, false);
    }
  };

  return (
    <FormsContainer>
      <UserForm
        title='Iniciar sesión'
        buttonTitle='Login'
        onSubmit={onSubmitLogin}
        fetching={fetchInfo.auth.fetching}
      />
      <UserForm
        title='Registro'
        buttonTitle='Registro'
        onSubmit={onSubmitRegister}
        fetching={fetchInfo.auth.fetching}
      />
    </FormsContainer>
  );
};
