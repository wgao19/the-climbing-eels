// @flow @jsx h
import { h, Component } from 'preact';
import Calendar from './components/Calendar';
import './style.scss';

export default class PageEvents extends Component {
  render() {
    return (
      <div className="page-events">
        <Calendar />
      </div>
    );
  }
}
