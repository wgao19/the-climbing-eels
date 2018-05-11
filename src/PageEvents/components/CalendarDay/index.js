// @flow
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { getDateKey } from 'store/climbs/utils';
import { getGymIdKey } from 'store/gyms/utils';
import type { DomType } from 'types/DomTypes';
import './style.scss';

type CalendarDayProps = {
  year: number,
  month: number,
  date: number,
  week?: number,
} & DomType;

class CalendarDay extends React.Component<CalendarDayProps> {
  constructor(props) {
    super(props);
    this.addClimb = this.addClimb.bind(this);
  }

  addClimb() {}

  render() {
    const { date, className, climbs, gyms } = this.props;
    return (
      <div className={cx('calendar-day', className)}>
        {!!date &&
          <div className="calendar-day__date">
            {date}
          </div>}
        {gyms.map(gym =>
          <div className="calendar-day__gym" key={gym.name}>
            {climbs &&
              climbs[getGymIdKey({ gymId: gym.id })] &&
              <div className="calendar-day__gym-has-climbers">
                <div className="calendar-day__gym-name">
                  {gym.name}
                </div>
                {climbs[getGymIdKey({ gymId: gym.id })].map(climb =>
                  <div
                    className="calendar-day__climb"
                    key={climb.participant.email}
                  >
                    <img
                      src={climb.participant.avatar}
                      className="calendar-day__participant-avatar"
                    />
                  </div>,
                )}
              </div>}
          </div>,
        )}
        <div className="calendar-day__add" onClick={this.addClimb}>
          +
        </div>
      </div>
    );
  }
}

export default connect((state, ownProps) => {
  const { gyms } = state;
  const { month, year, date } = ownProps;
  return {
    climbs: state.climbs[getDateKey({ month, year, date })],
    gyms,
  };
})(CalendarDay);
