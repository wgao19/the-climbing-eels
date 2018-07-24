/**
 * @flow
 * shamelessly copy from http://tobiasahlin.com/spinkit/
 * */

import React from 'react';
import cx from 'classnames';
import Mood from 'widgets/Mood';
import './style.scss';

const Loading = () => (
  <Mood.Consumer>
    {({ mood }) => (
      <div className={cx('eels-loading', mood && `eels-loading--${mood}`)}>
        <div className="eels-loading-dot-1" />
        <div className="eels-loading-dot-2" />
      </div>
    )}
  </Mood.Consumer>
);

export default Loading;
