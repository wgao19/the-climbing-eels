// @flow
import React from 'react';
import InstagramLink from '../InstagramLink';
import './style.scss';

const Header = () => {
  return (
    <div className="eels-header">
      <div className="eels-header__main-text">hello eels</div>
      <span className="eels-header__secondary-text">us eels ♥ climbing</span>
      <InstagramLink className="eels-header__instagram-link" />
    </div>
  );
};

export default Header;
