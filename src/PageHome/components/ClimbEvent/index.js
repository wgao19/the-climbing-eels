/**
 * @flow
 * */
import React from 'react';
import cx from 'classnames';
import beautifulDateTime from '../../../utils/beautifulDateTime';
import type { ClimbType } from '../../../types/ClimbTypes';
import './style.scss';

type ClimbEventProps = {
  climb: ClimbType,
};

const ClimbEvent = (props: ClimbEventProps) => {
  const { summary, start, end, location, type, notes } = props.climb;
  const types = type.split(' + ');
  const displayStartTime = start.dateTime
    ? beautifulDateTime(new Date(start.dateTime))
    : start.date;
  const displayEndTime = end.dateTime
    ? beautifulDateTime(new Date(end.dateTime))
    : end.date;
  return (
    <div className="climb-event">
      <div className="climb-event__header">
        {summary}
        {types &&
          types.map((item, index) => (
            <div
              className={cx('climb-event__flag', `climb-event__flag--${item}`)}
              key={`type-${index}`}
            >
              {item}
            </div>
          ))}
      </div>
      <div className="climb-event__time">
        {displayStartTime} - {displayEndTime}
      </div>
      {location && <div className="climb-event__location">{location}</div>}
      {notes && <div className="climb-event__notes">{notes}</div>}
    </div>
  );
};

export default ClimbEvent;
