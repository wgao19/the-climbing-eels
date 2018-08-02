/**
 * @flow
 * Intelligent component that loads and displays upcoming climbs
 * */

// libraries
import * as React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

// types
import type { ClimbType } from 'types/ClimbTypes';

// redux
import { loadClimbs } from 'store/climbs/actions';

// utils
import randomWait from 'utils/randomWait';

// UI
import ClimbEvent from './RenderClimbEvent';
import Loading from 'widgets/Loading';
import Mood from 'widgets/Mood';

import './style.scss';

type UpcomingClimbsProps = {
  upcomingClimbs: ClimbType[],
  loadClimbs: Function,
};

class UpcomingClimbs extends React.Component<UpcomingClimbsProps> {
  constructor(props: UpcomingClimbsProps) {
    super(props);
  }

  componentDidMount() {
    randomWait(this.props.loadClimbs);
  }

  render() {
    const { upcomingClimbs } = this.props;
    return (
      <Mood.Consumer>
        {({ mood }) => (
          <div
            className={cx(
              'upcoming-climbs',
              mood && `upcoming-climbs--${mood}`
            )}
          >
            <div className="upcoming-climbs__header">upcoming climbs</div>
            {upcomingClimbs && upcomingClimbs.length ? (
              upcomingClimbs.map(climb => (
                <ClimbEvent climb={climb} key={climb.id} />
              ))
            ) : (
              <Loading />
            )}
          </div>
        )}
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
  { loadClimbs }
)(UpcomingClimbs);
