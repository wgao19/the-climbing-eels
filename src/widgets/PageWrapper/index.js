/**
 * @flow
 * @format
 * */
import * as React from 'react';
import cx from 'classnames';
// $FlowFixMe
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

const PageWrapper = (WrappedPage: React.ComponentType<*>) => {
  return class PageWithWrapper extends React.Component<*> {
    render() {
      return (
        <MoodContext.Provider value={{ mood }}>
          <div className="eels-page">
            <DockedHeader top={234} />
            {/* TODO: refactor */}
            <div className="page-home__top">
              <div className="page-home-top-content">
                <div className="page-home-top-content__header">hello eels</div>
                <MoodContext.Consumer>
                  {({ mood }) => (
                    <div
                      className={cx(
                        'page-home-top-content__text',
                        mood && `page-home-top-content__text--${mood}`,
                        'serif'
                      )}
                    >
                      constantly a work in progress
                    </div>
                  )}
                </MoodContext.Consumer>
                <Breadcrumb links={links} />
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
