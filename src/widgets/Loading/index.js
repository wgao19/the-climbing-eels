/**
 * @flow @jsx h
 * shamelessly copy from http://tobiasahlin.com/spinkit/
 * */

import { h, Component } from 'preact';
import './style.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className="eels-loading">
        <div className="eels-loading-dot-1" />
        <div className="eels-loading-dot-2" />
      </div>
    );
  }
}
