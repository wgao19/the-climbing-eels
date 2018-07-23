// @flow
import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import InstagramLink from '../InstagramLink';
import Mood from '../Mood';
import './style.scss';

const Header = () => {
  return (
    <Mood.Consumer>
      {({ mood }) =>
        <div className="eels-header">
          <Link to="/" className="eels-header__main-text">
            ٩(๑❛ᴗ❛๑)۶
          </Link>
          <Link to="/" className="eels-header__secondary-text">
            us eels
            <span
              className={cx(
                'eels-header__heart',
                mood && `eels-header__heart--${mood}`,
              )}
            >
              ♥
            </span>
            climbing
          </Link>
          <InstagramLink className="eels-header__instagram-link" />
        </div>}
    </Mood.Consumer>
  );
};

export default Header;
