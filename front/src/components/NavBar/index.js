import React from 'react';
import { Link, Nav, Title, LensIcon } from './styles';
import { FiPower } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth as setAuthAction } from '../../redux/actions/set-auth';
import logo from '../../assets/lens.svg';

const NavBar = () => {
  // Redux
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const setAuth = (auth) => dispatch(setAuthAction(auth));

  const handleLogout = () => {
    setAuth(null);
    // removeTokenStorage()
  };

  return (
    <Nav>
      <Link to='/'>
        <LensIcon src={logo} alt='Logo' />
        <Title>VideoClub</Title>
      </Link>
      {auth && (
        <Link to='/' onClick={handleLogout}>
          <div>
            <FiPower size='30px' />
          </div>
          <br />
          Salir
        </Link>
      )}
    </Nav>
  );
};

export default NavBar;
