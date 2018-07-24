// @flow
import React from 'react';
import wrapPage from 'widgets/PageWrapper';
import marked from 'marked';
import './style.scss';

import firstStory from './stories/2018-07-23-first-story.md';

const PageStories = () => {
  return (
    <div className="eels-page-stories">
      <div className="eels-page-stories__foreword serif">
        Hello page stories
      </div>
      <div
        className="eels-page-stories__story serif"
        dangerouslySetInnerHTML={{ __html: marked(firstStory) }}
      />
    </div>
  );
};

export default wrapPage(PageStories);
