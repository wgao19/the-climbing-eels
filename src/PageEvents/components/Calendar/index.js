// @flow
import React from 'react';
import cx from 'classnames';
import { beautifulDateTime, daysInMonth } from '../../../utils/dateTime';
import { weekdays } from './constants';
import type { DomType } from '../../../types/DomTypes';
import './style.scss';

type CalendarProps = {
  month: number,
  year: number,
} & DomType;

class Calendar extends React.Component {
  constructor(props: CalendarProps) {
    super(props);
    this.state = {
      month: props.month,
      year: props.year,
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  prev() {
    this.setState(prevState => {
      return prevState.month <= 0
        ? {
            month: 11,
            year: prevState.year - 1,
          }
        : {
            month: prevState.month - 1,
          };
    });
  }

  next() {
    this.setState(prevState => {
      return prevState.month >= 11
        ? {
            month: 0,
            year: prevState.year + 1,
          }
        : {
            month: prevState.month + 1,
          };
    });
  }

  render() {
    const { year, month } = this.state;
    const startOfMonth = new Date(`${year}-${month + 1}`);
    const startingWeekday = startOfMonth.getDay();
    const numberOfDaysThisMonth = daysInMonth(year, month);
    const datesArray = [];
    const datesByWeek = [[]];
    let week = 0;
    for (let i = 0; i < startingWeekday; i++) {
      datesArray.push(false);
    }
    for (let j = 0; j < numberOfDaysThisMonth; j++) {
      datesArray.push(j + 1);
    }
    for (let k = 0; k < datesArray.length; k++) {
      if (!!k && k % 7 === 0) {
        datesByWeek.push([]);
        week++;
      }
      datesByWeek[week].push(datesArray[k]);
    }

    return (
      <div className={cx('calendar', this.props.className)}>
        <div className="calendar-title">
          <div className="calendar-title__prev" onClick={this.prev}>
            prev
          </div>
          <div className="calendar-title__text">
            {beautifulDateTime(startOfMonth, {
              year: 'numeric',
              month: 'long',
            })}
          </div>
          <div className="calendar-title__next" onClick={this.next}>
            next
          </div>
        </div>
        <div className="calendar-body">
          <div className="calendar-header">
            {weekdays.map(weekday => (
              <div
                className="calendar-header__weekday"
                key={`header-weekday-${weekday}`}
              >
                {weekday}
              </div>
            ))}
          </div>
          <div className="calendar-content">
            {datesByWeek.map(week => (
              <div
                className="calendar-content__week"
                key={`content-week-${week}`}
              >
                {week.map(
                  (date, index) =>
                    date ? (
                      <div
                        className="calendar-content__date"
                        key={`content-date-${date}`}
                      >
                        {date}
                      </div>
                    ) : (
                      <div
                        className="calendar-content__date calendar-content__date--empty"
                        key={`content-date-empty-${index}`}
                      />
                    )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
