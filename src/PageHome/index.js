// @flow
import React from 'react';
import UpcomingClimbs from './components/UpcomingClimbs';
import Breadcrumb from '../widgets/Breadcrumb';
import Docked from 'react-scroll-docked';
import Header from '../widgets/Header';
import InstagramLink from '../widgets/InstagramLink';
import './style.scss';

const DockedHeader = Docked(Header);

// TODO: move to data
const links = [
  {
    text: 'climbs',
    url: '/climbs',
    active: true,
  },
  {
    text: 'stories',
    url: '/stories',
    disabled: true,
  },
];

const PageHome = () => {
  return (
    <div className="page-home">
      <DockedHeader top={234} />
      <div className="page-home__top">
        <div className="page-home-top-content">
          <div className="page-home-top-content__header">hello eels</div>
          <div className="page-home-top-content__text">
            eels are a couple of avid rock climbers
            <Breadcrumb links={links} />
          </div>
          <InstagramLink className="page-home-top-content__instagram-link" />
        </div>
      </div>
      <div className="page-home__bottom">
        <div className="page-home-bottom-content serif">
          <div className="page-home-bottom-content__header">
            upcoming climbs
          </div>
          <UpcomingClimbs />
        </div>
      </div>
    </div>
  );
};
export default PageHome;
