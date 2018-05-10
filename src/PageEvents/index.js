// @flow
import React from 'react';
import { connect } from 'react-redux';
import Calendar from './components/Calendar';
import wrapPage from '../widgets/PageWrapper';
import { loadClimbsByDateRange } from '../store/climbs/actions';
import './style.scss';

const now = new Date();

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
        <Calendar
          month={now.getMonth()}
          year={now.getFullYear()}
          className="page-events-calendar"
        />
      </div>
    );
  }
}

export default connect(null, { loadClimbsByDateRange })(wrapPage(PageEvents));
