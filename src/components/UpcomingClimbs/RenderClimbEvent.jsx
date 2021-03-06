/**
 * @flow
 * */
import * as React from 'react';
import cx from 'classnames';
import Avatar from 'widgets/Avatar';
import Mood from 'widgets/Mood';
import beautifulDateTime from 'utils/beautifulDateTime';
import Paper from '@material-ui/core/Paper';
import type { ClimbType } from 'types/ClimbTypes';
import './style.scss';

type ClimbEventProps = {
  climb: ClimbType,
  onClick: string => void,
};

const ClimbEvent = (props: ClimbEventProps) => {
  const { summary, start, end, location, type, notes, attendees } = props.climb;
  const types = type && type.split(' + ');
  const displayStartTime = start.dateTime
    ? beautifulDateTime(new Date(start.dateTime))
    : start.date;
  const displayEndTime = end.dateTime
    ? beautifulDateTime(new Date(end.dateTime))
    : end.date;
  return (
    <Mood.Consumer>
      {({ mood }) => (
        <Paper
          className={cx('climb-event', mood && `climb-event--${mood}`)}
          onClick={props.onClick}
        >
          <React.Fragment>
            <div className="climb-event__header">
              <span>{summary}</span>
              {types &&
                types.map((item, index) => (
                  <div
                    className={cx(
                      'serif',
                      'climb-event__flag',
                      `climb-event__flag--${mood}`
                    )}
                    key={`type-${index}`}
                  >
                    <span>{item}</span>
                  </div>
                ))}
            </div>
            <div
              className={cx(
                'climb-event__time-and-location',
                mood && `climb-event__time-and-location--${mood}`
              )}
            >
              <div
                className={cx(
                  'climb-event__time',
                  mood && `climb-event__time--${mood}`
                )}
              >
                {displayStartTime} - {displayEndTime}
              </div>
              {location && (
                <div
                  className={cx(
                    'climb-event__location',
                    mood && `climb-event__location--${mood}`
                  )}
                >
                  <a
                    target="_blank"
                    href={`https://www.google.com/maps/search/${location}`}
                  >
                    📍{location}
                  </a>
                </div>
              )}
            </div>
            {attendees &&
              attendees.length && (
                <div className="climb-event__attendees">
                  {attendees.map(attendee => (
                    <Avatar key={`avatar-${attendee.email}`} {...attendee} />
                  ))}
                </div>
              )}
            {notes && (
              <div
                className={cx(
                  'climb-event__notes serif',
                  mood && `climb-event__notes--${mood}`
                )}
              >
                {notes}
              </div>
            )}
          </React.Fragment>
        </Paper>
      )}
    </Mood.Consumer>
  );
};

export default ClimbEvent;
