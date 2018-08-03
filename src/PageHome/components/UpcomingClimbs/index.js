/**
 * @flow
 * Intelligent component that loads and displays upcoming climbs
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import initGoogle from '../../../utils/Google';
import ClimbEvent from '../ClimbEvent';
import Loading from '../../../widgets/Loading';
import { loadGoogleCalendarClimbs } from 'store/climbs/actions';
import randomWait from '../../../utils/randomWait';

type UpcomingClimbsProps = { upcomingClimbs: mixed[], loadClimbs: Function };

class UpcomingClimbs extends Component {
  constructor(props: UpcomingClimbsProps) {
    super(props);
  }
  componentDidMount() {
    randomWait(() => {
      initGoogle(this.props.loadGoogleCalendarClimbs);
    });
  }

  render() {
    const { upcomingClimbs } = this.props;
    return (
      <div className="upcoming-climbs">
        {upcomingClimbs && upcomingClimbs.length ? (
          upcomingClimbs.map(climb => (
            <ClimbEvent climb={climb} key={climb.id} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      upcomingClimbs: state.climbs.GoogleCalendarClimbs,
    };
  },
  { loadGoogleCalendarClimbs }
)(UpcomingClimbs);
