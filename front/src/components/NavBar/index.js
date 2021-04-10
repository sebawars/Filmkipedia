import React from 'react';
import { Link, Nav, Title, PopCornIcon } from './styles';
import { FcFilmReel } from 'react-icons/fc';
import { FiPower } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth as setAuthAction } from '../../redux/actions/set-auth';
import { removeTokenStorage } from '../../util/storage';
import logo from '../../assets/popcorn.svg';

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
        {/* <IconContainer>
          <FcFilmReel size='35px' />
        </IconContainer> */}
        <PopCornIcon src={logo} alt='Logo' />
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
