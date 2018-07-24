/**
 * @flow
 * */
import * as React from 'react';
import cx from 'classnames';
import Mood from 'widgets/Mood';
import beautifulDateTime from 'utils/beautifulDateTime';
import type { ClimbType } from 'types/ClimbTypes';
import './style.scss';

type ClimbEventProps = {
  climb: ClimbType,
};

const ClimbEvent = (props: ClimbEventProps) => {
  const { summary, start, end, location, type, notes } = props.climb;
  const types = type && type.split(' + ');
  const displayStartTime = start.dateTime
    ? beautifulDateTime(new Date(start.dateTime))
    : start.date;
  const displayEndTime = end.dateTime
    ? beautifulDateTime(new Date(end.dateTime))
    : end.date;
  return (
    <div className="climb-event">
      <Mood.Consumer>
        {({ mood }) => (
          <React.Fragment>
            <div className="climb-event__header">
              {summary}
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
                    {item}
                  </div>
                ))}
            </div>
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
        )}
      </Mood.Consumer>
    </div>
  );
};

export default ClimbEvent;
