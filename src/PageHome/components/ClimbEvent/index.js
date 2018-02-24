/**
 * @flow
 * */
import { h, Component } from 'preact';
import { beautifulDateTime } from '../../../utils/beautifulDateTIme';
import type { ClimbType } from '../../../types/ClimbTypes';
import './style.scss';

type ClimbEventProps = {
  climb: ClimbType,
};

class ClimbEvent extends Component {
  render(props: ClimbEventProps) {
    const { summary, start, end, location } = props.climb;
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
        </div>
        <div className="climb-event__time">
          {displayStartTime} - {displayEndTime}
        </div>
        {location &&
          <div className="climb-event__location">
            {location}
          </div>}
      </div>
    );
  }
}

export default ClimbEvent;
