// @flow
import { h, Component } from 'preact';
import InstagramLink from '../InstagramLink';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <div className="eels-header">
        hello eels
        <span className="eels-header__text">
          eels are a couple of avid rock climbers
        </span>
        <InstagramLink className="eels-header__instagram-link" />
      </div>
    );
  }
}

export default Header;
