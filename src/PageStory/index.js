// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import storyLoader from './utils/storyLoader';
import toQuery from 'utils/searchStringToQueryObject';
import MarkdownRender from 'widgets/MarkdownRender';
import Breadcrumb, { BREADCRUMB_TYPE } from 'widgets/Breadcrumb';
import './style.scss';

type P = { storyName: ?string };

const locationLinks = [
  {
    text: 'the climbing eels',
    url: '/',
  },
  {
    text: 'stories',
    url: '/stories',
  },
  {
    text: "joe's valley study notes",
    active: true,
    url: '/story?s=joes-valley-study-notes',
  },
];

const PageStory = (props: P) => {
  return (
    <div className="eels-page-story">
      <div className="eels-page-story__header">
        <Breadcrumb
          links={locationLinks}
          breadcrumbType={BREADCRUMB_TYPE.LOCATION}
        />
      </div>
      {props.storyName && (
        /**
         * TODO:
         * 1. make dynamic import work with variable directory
         * 2. hash key story name (issue #5)
         */
        <MarkdownRender
          loadMarkdown={storyLoader(props.storyName)}
          className="eels-page-story__story"
        />
      )}
      <div className="eels-page-story__footer">footer</div>
    </div>
  );
};

export default connect((state, ownProps) => {
  const { location } = ownProps;
  const query = location && toQuery(location.search);
  return {
    storyName: query.s,
  };
})(withRouter(PageStory));
