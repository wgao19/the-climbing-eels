/**
 * @flow
 * @format
 * */
import * as React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import searchStringToQueryObject from 'utils/searchStringToQueryObject';

// $FlowFixMe
import Docked from 'react-scroll-docked';
import Header from '../Header';
import Breadcrumb, { BREADCRUMB_TYPE } from '../Breadcrumb';
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

const PageWrapper = (WrappedPage: React.ComponentType<*>) => {
  class PageWithWrapper extends React.Component<*> {
    render() {
      const mood =
        this.props.mood || moods[Math.floor(Math.random() * moods.length)];
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
                <Breadcrumb
                  className="page-home-top-content__nav"
                  breadcrumbType={BREADCRUMB_TYPE.NAV}
                  links={links}
                />
                <InstagramLink className="page-home-top-content__instagram-link" />
              </div>
            </div>
            <WrappedPage {...this.props} />
          </div>
        </MoodContext.Provider>
      );
    }
  }

  return connect((state, ownProps) => {
    // $FlowFixMe
    const { mood } = searchStringToQueryObject(ownProps.location.search);
    return {
      mood,
    };
  }, null)(PageWithWrapper);
};

export default PageWrapper;
