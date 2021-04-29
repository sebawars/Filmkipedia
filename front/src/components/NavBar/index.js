import React from 'react';
import { Link, Nav, Title, PopCornIcon } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth as setAuthAction } from '../../redux/actions/set-auth';
import logo from '../../assets/popcorn.svg';
import { LogoutOutlined } from '@ant-design/icons';

const NavBar = () => {
  // Redux
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const setAuth = (auth) => dispatch(setAuthAction(auth));

  const handleLogout = () => {
    setAuth(null);
  };

  return (
    <Nav>
      <Link to='/'>
        <PopCornIcon src={logo} alt='Logo' />
        <Title src={'https://fontmeme.com/permalink/210428/1797eceade9214a505c4ac2b20cf1833.png'}></Title>
      </Link>
      {auth && (
        <Link to='/' onClick={handleLogout}>
          <div>
            <LogoutOutlined style={{ fontSize: '2em' }} />
          </div>
        </Link>
      )}
    </Nav>
  );
};

export default NavBar;
