import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header>
      {user ? <p>Logado como: {user.username}</p> : <p>Você não está logado</p>}
    </header>
  );
};

export default Header;
