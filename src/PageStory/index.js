// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';
import storyLoader from './utils/storyLoader';
import toQuery from 'utils/searchStringToQueryObject';
import MarkdownRender from 'widgets/MarkdownRender';
import wrapWithFieldNotes from 'components/FieldNotesWrapper';
import { Dom } from 'types/Dom';

type P = { storyName: ?string } & Dom;

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
    <div className={cx('eels-page-story', props.className)}>
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
    </div>
  );
};

export default connect((state, ownProps) => {
  const { location } = ownProps;
  const query = location && toQuery(location.search);
  return {
    storyName: query.s,
  };
})(
  withRouter(
    wrapWithFieldNotes(PageStory, {
      locationLinks,
    })
  )
);
