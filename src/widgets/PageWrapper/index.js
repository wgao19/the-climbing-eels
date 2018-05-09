/**
 * @flow
 * @format
 * */
import React, { Component } from 'react';
import Docked from 'react-scroll-docked';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';
import InstagramLink from '../InstagramLink';
import './style.scss';

const DockedHeader = Docked(Header);

// TODO: move to data
const links = [
  {
    text: 'climbs',
    url: '/',
  },
  {
    text: 'stories',
    url: '/stories',
    disabled: true,
  },
  {
    text: 'safety',
    url: '/safety-info',
  },
];

const PageWrapper = WrappedPage => {
  return class PageWithWrapper extends Component {
    render() {
      return (
        <div className="eels-page">
          <DockedHeader top={234} />
          <div className="page-home__top">
            <div className="page-home-top-content">
              <div className="page-home-top-content__header">hello eels</div>
              <div className="page-home-top-content__text">
                eels are a group of avid rock climbers
                <Breadcrumb links={links} />
              </div>
              <InstagramLink className="page-home-top-content__instagram-link" />
            </div>
          </div>
          <WrappedPage {...this.props} />
        </div>
      );
    }
  };
};

export default PageWrapper;
