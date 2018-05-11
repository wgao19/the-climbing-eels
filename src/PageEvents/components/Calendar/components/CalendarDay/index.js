// @flow
import React from 'react';
import cx from 'classnames';
import type { DomType } from '../../../../../types/DomTypes';
import './style.scss';

type CalendarDayProps = {
  year: number,
  month: number,
  date: number,
  week?: number,
} & DomType;

class CalendarDay extends React.Component {
  constructor(props: CalendarDayProps) {
    super(props);
    this.addClimb = this.addClimb.bind(this);
  }

  addClimb() {
    console.log('gonna add climb');
  }

  render() {
    const { date, className } = this.props;
    return (
      <div className={cx('calendar-day', className)}>
        {date}
        <div className="calendar-day__add" onClick={this.addClimb}>
          +
        </div>
      </div>
    );
  }
}

export default CalendarDay;
