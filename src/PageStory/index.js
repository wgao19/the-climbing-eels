// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MarkdownRender from 'widgets/MarkdownRender';
import storyLoader from './utils/storyLoader';
import toQuery from 'utils/searchStringToQueryObject';
import './style.scss';

type P = { storyName: ?string };

const PageStory = (props: P) => {
  return (
    <div className="eels-page-story">
      <div className="eels-page-story__header">
        the climbing eels > stories > joes valley
      </div>
      {props.storyName && (
        /** TODO: make dynamic import work with variable directory */
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
