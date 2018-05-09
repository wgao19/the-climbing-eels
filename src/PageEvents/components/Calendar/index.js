// @flow
import React from 'react';
import './style.scss';

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar__content">
        <h1 className="calendar-title">Thursday</h1>
        <p className="calendar-secondary-title">Dec 25 2017</p>
        <div className="calendar-itself">
          <div className="calendar-header">
            <div className="calendar-header__weekday">mon</div>
            <div className="calendar-header__weekday">tue</div>
            <div className="calendar-header__weekday">wed</div>
            <div className="calendar-header__weekday">thu</div>
            <div className="calendar-header__weekday">fri</div>
            <div className="calendar-header__weekday">sat</div>
            <div className="calendar-header__weekday">sun</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calendar;
