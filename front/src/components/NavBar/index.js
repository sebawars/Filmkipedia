import React, { useContext } from 'react'
import { Link, Nav, Title } from './styles'
import { FcFilmReel } from 'react-icons/fc'
import { FiPower } from 'react-icons/fi'
import { Context } from '../../Context'

export const NavBar = ( { isAuth } ) => {

  const { removeAuth } = useContext(Context)
  const handleLogout = () => {    
    removeAuth()
  }


  return (
    <Nav>
      <Link to='/'><div><FcFilmReel size='35px'/></div><Title>VideoClub</Title></Link>
      { isAuth && <Link to='/' onClick={handleLogout} ><div><FiPower size='30px'/></div><br />Salir</Link> }
    </Nav>
  )
}
