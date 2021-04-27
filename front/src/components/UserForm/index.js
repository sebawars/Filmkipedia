import React, { useState, Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Error, Title, LoginButton } from './styles';
import { useDispatch } from 'react-redux';
import { setAuth as setAuthAction } from '../../redux/actions/set-auth';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './styles.css';

const FilmSearch = ({ title, buttonTitle, onSubmit, fetching }) => {
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

  async function handleSubmit() {
    setErrForm('');

    // event.preventDefault();

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

  return (
    <Form className='login-form' initialValues={{ remember: true }} onFinish={handleSubmit}>
      <Form.Item
        name='username'
        rules={[
          { required: true, message: 'Ingrese usuario' },
          { type: 'email', message: 'Email inválido' },
        ]}
      >
        <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' {...email} />
      </Form.Item>
      <Form.Item name='password' rules={[{ required: true, message: 'Ingrese password' }]}>
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
          {...password}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button' disabled={fetching} loading={fetching}>
          {buttonTitle}
        </Button>
      </Form.Item>
      {errForm && <Error>{errForm}</Error>}
    </Form>
    // <Fragment>
    //   <Form onSubmit={handleSubmit}>
    //     <Title>{title}</Title>
    //     <input placeholder='Email' {...email} />
    //     <input placeholder='Password' type='password' {...password} />
    //     <LoginButton disabled={fetching}> {buttonTitle} </LoginButton>
    //     <br></br>
    //     {errForm && <Error>{errForm}</Error>}
    //   </Form>
    // </Fragment>
  );
};

export default FilmSearch;
