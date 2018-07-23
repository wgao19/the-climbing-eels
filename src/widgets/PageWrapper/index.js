/**
 * @flow
 * @format
 * */
import React, { Component } from 'react';
import Docked from 'react-scroll-docked';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';
import InstagramLink from '../InstagramLink';
import MoodContext from '../Mood';
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
  },
];

const moods = [
  'active',
  'calm',
  'calm',
  'calm',
  'chill',
  'chill',
  'chill',
  'warm',
];
const mood = moods[Math.floor(Math.random() * moods.length)];

const PageWrapper = WrappedPage => {
  return class PageWithWrapper extends Component {
    render() {
      return (
        <MoodContext.Provider value={{ mood }}>
          <div className="eels-page">
            <DockedHeader top={234} />
            <div className="page-home__top">
              <div className="page-home-top-content">
                <div className="page-home-top-content__header">hello eels</div>
                <div className="page-home-top-content__text">
                  constantly a work in progress
                  <Breadcrumb links={links} />
                </div>
                <InstagramLink className="page-home-top-content__instagram-link" />
              </div>
            </div>
            <WrappedPage {...this.props} />
          </div>
        </MoodContext.Provider>
      );
    }
  };
};

export default PageWrapper;
