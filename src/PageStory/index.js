// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import wrapPage from 'widgets/PageWrapper';
import MarkdownRender from 'widgets/MarkdownRender';
import storyLoader from './utils/storyLoader';
import toQuery from 'utils/searchStringToQueryObject';
import './style.scss';

type P = { storyName: ?string };

const PageStories = (props: P) => {
  return (
    <div className="eels-page-stories">
      {props.storyName && (
        /** TODO: make dynamic import work with variable directory */
        <MarkdownRender loadMarkdown={storyLoader(props.storyName)} />
      )}
    </div>
  );
};

export default wrapPage(
  connect((state, ownProps) => {
    const { location } = ownProps;
    const query = location && toQuery(location.search);
    return {
      storyName: query.s,
    };
  })(withRouter(PageStories))
);
