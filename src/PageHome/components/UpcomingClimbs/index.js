/**
 * @flow
 * Intelligent component that loads and displays upcoming climbs
 * */
import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import initGoogle from '../../../utils/Google';
import ClimbEvent from '../ClimbEvent';
import { loadClimbs } from '../../../store/climbs/actions';

class UpcomingClimbs extends Component {
  componentDidMount() {
    initGoogle(this.props.loadClimbs);
  }

  render(props) {
    const { upcomingClimbs } = props;
    return (
      <div className="upcoming-climbs">
        {upcomingClimbs.map(climb => <ClimbEvent climb={climb} />)}
      </div>
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
