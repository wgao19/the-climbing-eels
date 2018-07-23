// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import InstagramLink from '../InstagramLink';
import './style.scss';

const Header = () => {
  return (
    <div className="eels-header">
      <Link to="/" className="eels-header__main-text">
        ٩(๑❛ᴗ❛๑)۶
      </Link>
      <Link to="/" className="eels-header__secondary-text">
        us eels ♥ climbing
      </Link>
      <InstagramLink className="eels-header__instagram-link" />
    </div>
  );
};

export default Header;
