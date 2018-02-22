import { h, Component } from 'preact';
import './style.scss';

export default class PageHome extends Component {
  render(props) {
    return (
      <div className="page-home">
        <div className="page-home__left">
          <div className="page-home-left-content">
            <div className="page-home-left-content__header">hello eels</div>
          <div className="page-home-left-content__text">eels are a couple of rock climbers</div>
          </div>

        </div>
        <div className="page-home__right" >
          <div className="page-home-right-content">
            <div className="page-home-right-content__header">
              upcoming climbs
            </div>
          </div>
        </div>
      </div>
    );
  }
}
