import { h, Component } from 'preact';
import UpcomingClimbs from './components/UpcomingClimbs';
import InstagramLink from './components/InstagramLink';
import Header from './components/Header';
import Docked from '../widgets/Docked';
import './style.scss';

const DockedHeader = Docked(Header);

export default class PageHome extends Component {
  render(props) {
    return (
      <div className="page-home">
        <DockedHeader top={300} />
        <div className="page-home__top">
          <div className="page-home-top-content">
            <div className="page-home-top-content__header">hello eels</div>
            <div className="page-home-top-content__text">
              eels are a couple of avid rock climbers
            </div>
            <InstagramLink className="page-home-top-content__instagram-link" />
          </div>
        </div>
        <div className="page-home__bottom">
          <div className="page-home-bottom-content">
            <div className="page-home-bottom-content__header serif">
              upcoming climbs
              <UpcomingClimbs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
