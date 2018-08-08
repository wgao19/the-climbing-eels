// @flow
import React from 'react';
import wrapPage from 'widgets/PageWrapper';
import './style.scss';

const PageStories = () => {
  return (
    <div className="eels-page-stories">
      <div className="eels-page-stories__foreword serif">
        Hello page stories
      </div>
    </div>
  );
};

export default wrapPage(PageStories);
