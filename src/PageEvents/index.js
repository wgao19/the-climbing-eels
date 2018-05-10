// @flow
import React from 'react';
import { connect } from 'react-redux';
import Calendar from './components/Calendar';
import wrapPage from '../widgets/PageWrapper';
import { loadClimbsByDateRange } from '../store/climbs/actions';
import './style.scss';

class PageEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadClimbsByDateRange();
  }

  render() {
    return (
      <div className="page-events">
        <Calendar month={5} year={2018} className="page-events-calendar" />
        <Calendar month={6} year={2018} className="page-events-calendar" />
        <Calendar month={7} year={2018} className="page-events-calendar" />
      </div>
    );
  }
}

export default connect(null, { loadClimbsByDateRange })(wrapPage(PageEvents));
