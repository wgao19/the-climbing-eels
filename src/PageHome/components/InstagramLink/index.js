// @flow

import { h, Component } from 'preact';
import instagramLogo from './instagram-logo.png';
import './style.scss';

class InstagramLink extends Component {
  render(props) {
    const { className } = props;
    return (
      <a
        href="https://www.instagram.com/_theclimbingeels/"
        className={className}
      >
        <img src={instagramLogo} className="instagram-logo" />
      </a>
    );
  }
}

export default InstagramLink;
