import React from 'react'
import { UserForm } from '../../components/UserForm'
import api from '../../api'
import { FormsContainer } from './styles'

export const LoginPage = () => {
    
    const onSubmitLogin = async ( inputUser ) => {
        const data = await api.user.login(inputUser)   
        return data
    }

    const onSubmitRegister = async ( inputUser ) => {
        const data = await api.user.register(inputUser)   
        return data
    }

    return (
      <FormsContainer>
        <UserForm title='Iniciar sesión' buttonTitle='Login' onSubmit={onSubmitLogin} />
        <UserForm title='Registro' buttonTitle='Registro' onSubmit={onSubmitRegister} />
      </FormsContainer>
    )
}
