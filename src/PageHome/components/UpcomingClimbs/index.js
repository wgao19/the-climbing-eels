/**
 * @flow
 * Intelligent component that loads and displays upcoming climbs
 * */
import React, { Component } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import initGoogle from '../../../utils/Google';
import ClimbEvent from '../ClimbEvent';
import Loading from '../../../widgets/Loading';
import { loadClimbs } from '../../../store/climbs/actions';
import randomWait from '../../../utils/randomWait';
import Mood from '../../../widgets/Mood';
import './style.scss';

type UpcomingClimbsProps = { upcomingClimbs: mixed[], loadClimbs: Function };

class UpcomingClimbs extends Component {
  constructor(props: UpcomingClimbsProps) {
    super(props);
  }
  componentDidMount() {
    randomWait(() => {
      initGoogle(this.props.loadClimbs);
    });
  }

  render() {
    const { upcomingClimbs } = this.props;
    return (
      <Mood.Consumer>
        {({ mood }) =>
          <div
            className={cx(
              'upcoming-climbs',
              mood && `upcoming-climbs--${mood}`,
            )}
          >
            <div className="upcoming-climbs__header">upcoming climbs</div>
            {upcomingClimbs && upcomingClimbs.length
              ? upcomingClimbs.map(climb =>
                  <ClimbEvent climb={climb} key={climb.id} />,
                )
              : <Loading />}
          </div>}
      </Mood.Consumer>
    );
  }
}

export default connect(
  state => {
    return {
      upcomingClimbs: state.climbs,
    };
  },
  { loadClimbs },
)(UpcomingClimbs);
