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

const Calendar = (props: CalendarProps) => {
  const { year, month } = props;
  const startOfMonth = new Date(`${year}-${month}`);
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
    <div className={cx('calendar', props.className)}>
      <div className="calendar-title">
        {beautifulDateTime(startOfMonth, { year: 'numeric', month: 'long' })}
      </div>
      <div className="calendar-body">
        <div className="calendar-header">
          {weekdays.map(weekday => (
            <div className="calendar-header__weekday">{weekday}</div>
          ))}
        </div>
        <div className="calendar-content">
          {datesByWeek.map(week => (
            <div className="calendar-content__week">
              {week.map(
                date =>
                  date ? (
                    <div className="calendar-content__date">{date}</div>
                  ) : (
                    <div className="calendar-content__date calendar-content__date--empty" />
                  )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
