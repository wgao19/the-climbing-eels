import { h, Component } from 'preact';
import UpcomingClimbs from './components/UpcomingClimbs';
import './style.scss';

export default class PageHome extends Component {
  render(props) {
    return (
      <div className="page-home">
        <div className="page-home__left">
          <div className="page-home-left-content">
            <div className="page-home-left-content__header">hello eels</div>
            <div className="page-home-left-content__text">
              eels are a couple of avid rock climbers
            </div>
          </div>
        </div>
        <div className="page-home__right">
          <div className="page-home-right-content">
            <div className="page-home-right-content__header serif">
              upcoming climbs
              <UpcomingClimbs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
