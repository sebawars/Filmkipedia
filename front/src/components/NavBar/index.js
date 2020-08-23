import React from 'react'
import { Link, Nav, Title } from './styles'
import { FcFilmReel } from 'react-icons/fc'
import { FiPower } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux';
import { setAuth as setAuthAction } from '../../redux/actions/set-auth';
import { removeTokenStorage } from '../../util/storage'

const NavBar = () => {

  // Redux
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const setAuth = (auth) => dispatch(setAuthAction(auth))

  const handleLogout = () => {    
    setAuth(null)
    removeTokenStorage()
  }

  return (
    <Nav>
      <Link to='/'><div><FcFilmReel size='35px'/></div><Title>VideoClub</Title></Link>
      { auth && <Link to='/' onClick={handleLogout} ><div><FiPower size='30px'/></div><br />Salir</Link> }
    </Nav>
  )
}

export default NavBar;