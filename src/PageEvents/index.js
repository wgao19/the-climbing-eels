// @flow
import React from 'react';
import { connect } from 'react-redux';
import Calendar from './components/Calendar';
import wrapPage from '../widgets/PageWrapper';
import { loadGyms } from '../store/gyms/actions';
import './style.scss';

const now = new Date();

type PageEventsProps = {
  loadGyms: mixed => void,
};
class PageEvents extends React.Component<PageEventsProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadGyms();
  }

  render() {
    return (
      <div className="page-events">
        <Calendar
          month={now.getMonth() + 1}
          year={now.getFullYear()}
          className="page-events-calendar"
        />
      </div>
    );
  }
}

export default connect(null, { loadGyms })(wrapPage(PageEvents));
